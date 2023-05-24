import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import { addCapteur, fetchCapteurs } from "../../../Redux/Actions/capteurAction";

const AddCapteur = ({ toggle }) => {
  const uniqueId = uuidv4();
const dispatch= useDispatch()
  const [capteur, setCapteur] = useState({"status": true});

  const handleChange = (event) => {
    setCapteur({ ...capteur, [event.target.name]: event.target.value });
    
  };

  const handleAddCapteur = (event) => {
    event.preventDefault();
    dispatch(addCapteur(capteur))
    toggle();
  dispatch(fetchCapteurs());
  };
  return (
    <>
      <Card className="bg-secondary shadow border-0">
        <CardHeader className="bg-transparent pb-5 text-muted text-center mt-2 mb-4">
          <small>Add a Capteur</small>
        </CardHeader>
        <CardBody className="px-lg-5 py-lg-5">
          <Form role="form">
            
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-tag" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Name"
                  type="text"
                  onChange={handleChange}
                  name="name"
                />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-pin-3" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Longitude"
                  type="Nulber"
                  name="Longitude"
                  onChange={handleChange}
                />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-pin-3" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Latitude"
                  type="Number"
                  autoComplete="Latitude"
                  onChange={handleChange}
                  name="Latitude"
                />
              </InputGroup>
            </FormGroup>

            <div className="text-center">
              <Button
                className="mt-4"
                color="primary"
                type="button"
                onClick={handleAddCapteur}
              >
                Add Capteur
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default AddCapteur;
