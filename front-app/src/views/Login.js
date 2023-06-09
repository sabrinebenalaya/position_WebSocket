/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
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
  Row,
  Col,
  Container,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React , {useState} from "react";
import { logIn } from "../Redux/Actions/authAction";
import { validatorLogin } from "../Validator/validatorLogin";
import { isEmpty } from "../Validator/isEmpty";
import { toast } from "react-toastify";
const Login = () => {
 
  
  //login
  const [loginUser, setLoginUser] = useState({
    mail: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const handelSumbit = (e) => {
    const { errors, isValid } = validatorLogin(loginUser);
    
    if (!isValid) {
      if (!isEmpty(errors.mail)) {
        toast.error(errors.mail);
      }
      if (!isEmpty(errors.password)) {
        toast.error(errors.password);
      }
    } else {
      dispatch(logIn(loginUser, navigate));

    }
  };

  return (
    <div>
  
    
      <div className="main-content">
        <div className="  py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <h1 className="text-white">Welcome!</h1>
              </Row>
            </div>
          </Container>
        </div>
        {/* Page content */}
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Col lg="5" md="7">
              <Card className="bg-secondary shadow border-0">
               
                <CardBody className="px-lg-5 py-lg-5"      style={{
        backgroundColor: "#5603ad", borderRadius:"10px"
      }}>
                  <div className="text-center text-muted mb-4">
                    <small>SigIn </small>
                  </div>
                  <Form role="form">
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          type="email"
                          name="mail"
                          autoComplete="new-email"
                          onChange={handelChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Password"
                          type="password"
                          name="password"
                          autoComplete="new-password"
                          onChange={handelChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        name="rememberMe" id="rememberMe" 
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="rememberMe"
                      >
                        <span className="text-muted">Remember me</span>
                      </label>
                    </div>
                    <div className="text-center">
                      <Button className="my-4" color="white" type="button" onClick={handelSumbit}>
                        Sign in
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
              
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Login;
