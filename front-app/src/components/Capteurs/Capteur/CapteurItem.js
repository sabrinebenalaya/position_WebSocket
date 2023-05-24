import React, { useState } from "react";
import {
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  UncontrolledTooltip,
  Modal,
  Card,
} from "reactstrap";
import { useDispatch } from "react-redux";
import EditCapteur from "../EditCapteur/EditCapteur";
import {
  deleteCapteur,
  fetchCapteurs,
  updateCapteur,
} from "../../../Redux/Actions/capteurAction";
import { Switch } from "@chakra-ui/react";
import Form from 'react-bootstrap/Form';
import { MDBSwitch } from "mdb-react-ui-kit";

function CapteurItem({ capteur }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  //delete capteur
  const HandelDelete = (e) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this Capteur?"
    );
    if (confirmed) {
      dispatch(deleteCapteur(capteur._id));
    }
  };

const status =capteur.status;

const [capteurEdited, SetCapteurEdited]=useState(status)

  const handelChange = (e) => {
    const { checked } = e.target;
    
    SetCapteurEdited(checked)
    dispatch(updateCapteur({"status" : checked}, capteur._id))
  };
  
  return (
    <>
      <tr>
        <th scope="row">
          <Media className="align-items-center">
            <Media>
              <span className="mb-0 text-sm">{capteur.name}</span>
            </Media>
          </Media>
        </th>

        <td>{capteur.Longitude}</td>
        <td>{capteur.Latitude}</td>

        <td>
        <span className="clearfix" />
<label className="custom-toggle">
  <input type="checkbox" checked={capteurEdited} onChange={handelChange} />
  <span className="custom-toggle-slider rounded-circle" />
</label>

       

        </td>

        <td className="text-right">
          <UncontrolledDropdown>
            <DropdownToggle
              className="btn-icon-only text-light"
              href="#pablo"
              role="button"
              size="sm"
              color=""
              onClick={(e) => e.preventDefault()}
            >
              <i className="fas fa-ellipsis-v" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem onClick={handleShow}>Edit</DropdownItem>
              <DropdownItem href="#pablo" onClick={HandelDelete}>
                Delete
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </td>
      </tr>

      <Modal
        className="modal-dialog-centered"
        size="sm"
        isOpen={show}
        toggle={handleClose}
      >
        <div className="modal-body p-0">
          <Card className="bg-secondary shadow border-0">
            <EditCapteur id={capteur._id} toggle={handleClose} />
          </Card>
        </div>
      </Modal>
    </>
  );
}

export default CapteurItem;
