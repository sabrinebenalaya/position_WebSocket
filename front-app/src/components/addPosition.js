import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import io from "socket.io-client";

function AddPosition() {
  const [position, SetPosition] = useState({});
  const socket = io.connect("http://localhost:3001");
  const longitude = 800;
  const latitude = 800;
  const hangelChange = (e) => {
    if (e.target.name === "lng" && e.target.value > longitude) {
      toast.error("longitude must be < 800");
    } else if (e.target.name === "lat" && e.target.value > latitude) {
      toast.error("latitude must be < 800");
    } else {
      SetPosition({ ...position, [e.target.name]: e.target.value });
    }
  };

  const handelAdd = (e) => {
    e.preventDefault();
    socket.emit("addPosition", position);
    SetPosition({});
    toast("Position added successfully");
  };

  return (
    <Form className="container mb-3" style={{ width: "20%" }}>
      <Form.Group className="mb-3">
        <Form.Label>longitude </Form.Label>
        <Form.Control
          type="Number"
          placeholder="Enter longitude"
          onChange={hangelChange}
          name="lng"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Latitude</Form.Label>
        <Form.Control
          type="Number"
          placeholder="Latitude"
          onChange={hangelChange}
          name="lat"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          onChange={hangelChange}
          name="text"
        />
      </Form.Group>

      <Form.Select
        aria-label="Default select example"
        name="object"
        onChange={hangelChange}
      >
        <option>Selctionne l'object</option>
        <option value="GiDesk">Desk</option>
        <option value="GiOfficeChair">Chair</option>
        <option value="FcFilingCabinet">Cabinet</option>
        <option value="HiDesktopComputer">Computer</option>
        <option value="GiPositionMarker">Autre</option>
      </Form.Select>

      <Button
        variant="primary"
        type="submit"
        className="mb-3"
        onClick={handelAdd}
      >
        Add
      </Button>
    </Form>
  );
}

export default AddPosition;
