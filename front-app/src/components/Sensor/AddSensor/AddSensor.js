
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
  import { useState } from 'react';
  import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from 'uuid';


  const AddSensor= ({ toggle }) => {
    const uniqueId = uuidv4();

    const [user, setUser] = useState();
   
    const handleChange = (event) => { 
      setUser({ ...user, [event.target.name]: event.target.value });
    };
  
    const handleAddUser = (event) => {
      event.preventDefault();
      toggle()
    };
    return (
      <>
       
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>Sign up with</small>
              </div>
              <div className="text-center">
               
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={
                        require("../../../assets/img/icons/common/google.svg")
                          
                      }
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign up with credentials</small>
              </div>
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Name" type="text" name="userName" onChange={handleChange}/>
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
                      name="email"
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
                    />
                  </InputGroup>
                </FormGroup>
             
                
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button" onClick={handleAddUser}>
                    Add User
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
     
      </>
    );
  };
  
  export default AddSensor;
  