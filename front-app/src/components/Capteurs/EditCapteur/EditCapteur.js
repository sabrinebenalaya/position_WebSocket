import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Button,
  Modal,
} from "reactstrap";
import { Switch } from "@chakra-ui/react";
import { getCapteurByID, updateCapteur } from "./../../../Redux/Actions/capteurAction";
import { FormControl, FormLabel } from '@chakra-ui/react';

function EditCapteur({ id }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCapteurByID(id));
  }, [dispatch, id]);

  const capteur = useSelector((state) => state.capteurReducer.capteur);
  console.log("capteur", capteur);

  const [capteurEdited, SetCapteurEdited] = useState(capteur);
  const HandelChange = (e) => {
    const { name, value } = e.target;
    SetCapteurEdited({ ...capteurEdited, [name]: value });
    console.log("capteurEdited", capteurEdited);
  };

 
  const handelChecked = (checked) => {
    const updatedCapteurEdited = { ...capteurEdited };
    updatedCapteurEdited.status = checked ? "inactive" : "active";
    SetCapteurEdited(updatedCapteurEdited);
  };
  
  const HandelSubmit = (e) => {
    e.preventDefault();
    console.log("capteurEdited", capteurEdited);
    dispatch(updateCapteur(capteurEdited, id))
  };
  return (
    <Card className="bg-secondary shadow border-0">
      <CardBody className="px-lg-5 py-lg-5">
        <div className="text-center text-muted mb-4">
          <small>Edit Capteur</small>
        </div>
        <Form role="form">
          <FormGroup>
            <InputGroup className="input-group-alternative mb-3">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-hat-3" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Name"
                type="text"
                name="name"
                value={capteurEdited.name}
                onChange={HandelChange}
              />
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup className="input-group-alternative mb-3">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-hat-3" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Longitude"
                type="Number"
                name="Longitude"
                value={capteurEdited.Longitude}
                onChange={HandelChange}
              />
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup className="input-group-alternative mb-3">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-email-83" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Latitude"
                type="Number"
                value={capteurEdited.Latitude}
                name="Latitude"
                onChange={HandelChange}
              />
            </InputGroup>
          </FormGroup>

          <FormControl display="flex" alignItems="center">
  <FormLabel htmlFor="email-alerts" mb="0">
    Status{" "}
  </FormLabel>
  <Switch
    id="email-alerts"
    size="lg"
    colorScheme="teal"
    isChecked={capteurEdited.status === "active"}
    onChange={handelChecked}
  />
</FormControl>


          <div className="text-center">
            <Button
              className="mt-4"
              color="primary"
              type="button"
              onClick={HandelSubmit}
            >
              Edit Capteur
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
}

export default EditCapteur;
