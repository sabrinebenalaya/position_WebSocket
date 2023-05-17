import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserByID } from "../../Redux/UserSlice";
function EditUser({id}) {

  console.log("id", id);
const dispatch= useDispatch()
  useEffect(() => {
    
      dispatch(getUserByID(id));
  
  }, [dispatch]);
  const user = useSelector((state) => state.user);
  console.log("user=", user)
  return (
    <div>
      <Col className="order-xl-1" xl="8">
        <Card className="bg-secondary shadow">
          <CardBody>
            <Form>
              <h6 className="heading-small text-muted mb-4">
                User information
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Username
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue="lucky.jesse"
                        id="input-username"
                        placeholder="Username"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Position
                      </label>
                      <Input
                        id="exampleFormControlSelect1 "
                        className="form-control-alternative"
                        type="select"
                      >
                        <option>PDG</option>
                        <option>Developper</option>
                        <option>Asisstent</option>
                        <option>Director</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-first-name"
                      >
                        First name
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue="Lucky"
                        id="input-first-name"
                        placeholder="First name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-last-name"
                      >
                        Last name
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue="Jesse"
                        id="input-last-name"
                        placeholder="Last name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example-date-input"
                      >
                        Date of birth
                      </label>
                      <Input
                        defaultValue={new Date().getFullYear() + "-11-23"}
                        id="example-date-input"
                        type="date"
                        className="form-control-alternative"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example-date-input"
                      >
                        Status
                      </label>
                      <Input
                        id="exampleFormControlSelect1 "
                        className="form-control-alternative"
                        type="select"
                      >
                        <option>Active</option>
                        <option>Not Active</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col lg="6" className="d-flex align-items-center">
                    <FormGroup className="d-flex align-items-center">
                      <Input
                        id="exampleFormControlSelect1"
                        className="custom-file-input form-control-alternative"
                        type="file"
                      />
                      <label
                        className="custom-file-label form-control-alternative"
                        htmlFor="exampleFormControlSelect1"
                      >
                        Choose your profile picture
                      </label>
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <hr className="my-4" />
              {/* Address */}
              <h6 className="heading-small text-muted mb-4">
                Contact information
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example-tel-input"
                      >
                        Phone
                      </label>
                      <Input
                        defaultValue="40-(770)-888-444"
                        id="example-tel-input"
                        type="tel"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-email"
                      >
                        Email address
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-email"
                        placeholder="jesse@example.com"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <hr className="my-4" />
              {/* Description */}
              <h6 className="heading-small text-muted mb-4">About me</h6>
              <div className="pl-lg-4">
                <FormGroup>
                  <label>About Me</label>
                  <Input
                    className="form-control-alternative"
                    placeholder="A few words about you ..."
                    rows="4"
                    defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                          Open Source."
                    type="textarea"
                  />
                </FormGroup>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
}

export default EditUser;
