import React from "react";
import {
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  UncontrolledTooltip,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUsers } from "../../../Redux/UserSlice";
import { useNavigate } from "react-router-dom";
function UserItem({ user }) {
  const dispatch = useDispatch();
  const selectedRoute = useSelector((state) => state.route.selectedRoute);
  //edit user
 

const navigate = useNavigate()

  const handleEditUser = (userId) => {
    console.log("id user dans useritem", userId);
  navigate(`/admin/editUser/${userId}`)
   
  };
  
  
  //delete user
  const HandelDelete = (e) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmed) {
      dispatch(deleteUser(user._id));
      dispatch(fetchUsers());
    }
  };

  //profil user
  const HandelProfil = (e) => {};
  return (
    <>
      <tr>
        <th scope="row">
          <Media className="align-items-center">
            
            <Media>
              <span className="mb-0 text-sm">{user.userName}</span>
            </Media>
          </Media>
        </th>

        <td>{user.email}</td>

        <td>
          <Badge color="" className="badge-dot mr-4">
            <i className="bg-warning" />
            pending
          </Badge>
        </td>

        <td>
          <div className="avatar-group">
            {user.userName ? (
              <>
                <a
                  className="avatar avatar-sm"
                  href="#pablo"
                  id={user.userName}
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="rounded-circle"
                    src={require("../../../assets/img/theme/team-1-800x800.jpg")}
                  />
                </a>
                <UncontrolledTooltip delay={0} target={user.userName}>
                  {user.userName}
                </UncontrolledTooltip>
              </>
            ) : (
              <span className="avatar avatar-sm"> </span>
              // Ou utilisez une icône appropriée ici
            )}
          </div>
        </td>
        <td>
          <div className="d-flex align-items-center">
            <span className="mr-2">{user.position}</span>
          </div>
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
              <DropdownItem onClick={() => handleEditUser(user._id)}>
                Edit
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={HandelDelete}>
                Delete
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={HandelProfil}>
                Profil
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </td>
      </tr>
    </>
  );
}

export default UserItem;
