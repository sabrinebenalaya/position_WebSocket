import React, { useEffect, useState } from "react";

import {
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Container,
  Button,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../Headers/Header";
import { getUserByID, updateUser } from "../../../Redux/Actions/userAction";
import { positions } from "../../../variables/constant";
import { toast } from "react-toastify";
function EditUser() {
  const { id } = useParams();
  console.log("id user to edit", id);
const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserByID(id));
  }, [dispatch, id]);

  const user = useSelector((state) => state.userReducer.user);
  console.log("user=", user);

  const [userEdited, SetUserEdited] = useState(user);
  const [file, setFile]= useState(null)

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };
  
  const HandelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
  console.log("file", file)
    if (file) {
      formData.append("image", file);
    }
  
    formData.append("userEdited", JSON.stringify(userEdited));
  
    dispatch(updateUser(formData, id, navigate));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Container className="mt--7" fluid>
        <Col className="order-xl-1">
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
                          id="input-username"
                          type="text"
                          placeholder={user.userName}
                          onChange={(e) =>
                            SetUserEdited({
                              ...userEdited,
                              userName: e.target.value,
                            })
                          }
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
                          id="position"
                          className="form-control-alternative"
                          type="select"
                          onChange={(e) =>
                            SetUserEdited({
                              ...userEdited,
                              position: e.target.value,
                            })
                          }
                        >
                          {positions.map((position) => (
                            <option
                              key={position}
                              value={position}
                              selected={position === user.position}
                            >
                              {position}
                            </option>
                          ))}
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
                          placeholder={user.firstName}
                          id="input-first-name"
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
                          id="input-last-name"
                          placeholder={user.lastName}
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
                        defaultValue={user.dateOfBirth ? user.dateOfBirth : new Date().toISOString().split('T')[0]}
  
                          id="example-date-input"
                          type="date"
                          className="form-control-alternative"
                          placeholder="yyy"
                          onChange={(e) =>
                            SetUserEdited({
                              ...userEdited,
                              dateOfBirth: e.target.value,
                            })
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup className="d-flex align-items-center">
                        <label
                          className="custom-file-label form-control-alternative"
                          htmlFor="exampleFormControlSelect1"
                          style={{
                            marginLeft: "15px",
                            marginTop: "30px",
                            height: "43%",
                            width: "95%",
                          }}
                        >
                          Choose your profile picture
                        </label>
                        <Input
                          id="exampleFormControlSelect1"
                          className="custom-file-input form-control-alternative"
                          type="file"
                          onChange={handleFileInputChange}
                        />
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
                          placeholder={
                            user.phone
                              ? user.phone
                              : "Enter your phone number 📞"
                          }
                          id="example-tel-input"
                          className="form-control-alternative"
                          type="tel"
                          onChange={(e) =>
                            SetUserEdited({
                              ...userEdited,
                              phone: e.target.value,
                            })
                          }
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
                          placeholder={user.mail}
                          type="email"
                          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                          onChange={(e) =>
                            SetUserEdited({
                              ...userEdited,
                              mail: e.target.value,
                            })
                          }
                          onBlur={(e) => {
                            if (!e.target.validity.valid) {
                              toast.error("Invalid email format");
                            }
                          }}
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
                      placeholder={
                        user.aboutMe
                          ? user.aboutMe
                          : "Tell us about yourself!😎"
                      }
                      rows="4"
                      type="textarea"
                      onChange={(e) =>
                        SetUserEdited({
                          ...userEdited,
                          aboutMe: e.target.value,
                        })
                      }
                    />
                  </FormGroup>
                </div>

                <div className="text-center">
                  <Button
                    className="mt-4"
                    color="primary"
                    type="button"
                    onClick={HandelSubmit}
                  >
                    Update User
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Container>
    </div>
  );
}

export default EditUser;
