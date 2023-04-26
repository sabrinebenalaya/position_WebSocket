import React, { useEffect, useState } from "react";
import { GiPositionMarker, GiOfficeChair, GiDesk } from "react-icons/gi";
import { FcFilingCabinet } from "react-icons/fc";
import { HiDesktopComputer } from "react-icons/hi";
import io from "socket.io-client";
import AddPosition from "./addPosition";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';


const socket = io.connect("http://localhost:3001");

function Plan() {
  const [positionList, setPositionList] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    socket.on("positionList", (positions) => {
      setPositionList(positions);
    });
  }, []);

  return (
    <div>
    <div
      style={{
        width: "700px",
        height: "700px",
        backgroundColor: "blue",
        border: "1px solid black",
        margin: "auto",
        position: "relative",
      }}
    >
      {positionList.map((pos, key) => {
        return (
          <div
            style={{
              width: "40px",
              height: "40px",
              position: "absolute",
              top: `${pos.lng}px`,
              left: `${pos.lat}px`,
              cursor: "pointer",
            }}
            key={key}
            title={pos.text}
          >
            {pos.object === "GiDesk" && (
              <GiDesk style={{ width: "100%", height: "80%" }} />
            )}
            {pos.object === "GiOfficeChair" && (
              <GiOfficeChair style={{ width: "80%", height: "80%" }} />
            )}
            {pos.object === "FcFilingCabinet" && (
              <FcFilingCabinet style={{ width: "80%", height: "80%" }} />
            )}
            {pos.object === "HiDesktopComputer" && (
              <HiDesktopComputer style={{ width: "100%", height: "100%" }} />
            )}
            {pos.object === "GiPositionMarker" && (
              <GiPositionMarker style={{ width: "80%", height: "80%" }} />
            )}
          </div>
        );
      })}
    </div>
    <Button
        variant="primary"
        type="submit"
        className="mb-3"
        onClick={()=>navigate("/add")}
      >
        New position
      </Button>
      
    </div>
  );
}

export default Plan;
