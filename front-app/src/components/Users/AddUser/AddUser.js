import {
  Button,
  Card,
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
import { addUser } from "../../../Redux/Actions/authAction";
import { fetchUsers } from "../../../Redux/Actions/userAction";
import { toast } from "react-toastify";
import { isEmpty } from "./../../../Validator/isEmpty";
import { validatorRegister } from "../../../Validator/validatorRegister";

const AddUser = ({ toggle }) => {
  const uniqueId = uuidv4();

  const [user, setUser] = useState({ password: uniqueId });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log("user=", user);
  };

  function eliminerEspaces(chaine) {
    return chaine.replace(/\s/g, "");
  }

  const handleAddUser = (event) => {
    event.preventDefault();

    const { errors, isValid } = validatorRegister(user);

    if (!isValid) {
      if (!isEmpty(errors.mail)) {
        toast.error(errors.mail);
      }
      if (!isEmpty(errors.firstName)) {
        toast.error(errors.firstName);
      }
      if (!isEmpty(errors.lastName)) {
        toast.error(errors.lastName);
      }
      if (!isEmpty(errors.position)) {
        toast.error(errors.position);
      }
    } else {
      // Met à jour la propriété "userName" de l'objet "user"

      const firstName = eliminerEspaces(user.firstName);
      const lastName = eliminerEspaces(user.lastName);
      const userToAdd = {
        ...user,
        userName: `${firstName}-${lastName}`,
      };
      // Dispatch l'action "addUser" avec l'objet "updatedUser"
      dispatch(addUser(userToAdd));
      // Effectue la logique pour fermer un élément ou un état (toggle)
      toggle();
       // Dispatch l'action "fetchUsers" pour récupérer les utilisateurs mis à jour

    dispatch(fetchUsers());
    }
   
  };

  return (
    <>
      <Card className="bg-secondary shadow border-0">
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <small>Add user</small>
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
                  placeholder="firstName"
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  required
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
                  placeholder="lastName"
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  required
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
                  placeholder="Email"
                  type="email"
                  autoComplete="new-email"
                  onChange={handleChange}
                  name="mail"
                  required
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-badge" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Position"
                  type="text"
                  onChange={handleChange}
                  name="position"
                  required
                />
              </InputGroup>
            </FormGroup>

            <div className="text-center">
              <Button
                className="mt-4"
                color="primary"
                type="button"
                onClick={handleAddUser}
              >
                Add User
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default AddUser;
