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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers, deleteUser } from "./../../../Redux/Actions/userAction";
function UserItem({ user }) {
  const dispatch = useDispatch();
  //edit user

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/admin/editUser/${user._id}`);
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
            <div className="avatar-group" style={{ marginRight: "5px" }}>
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
                      src={user.photo}
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
            <Media>
              <span className="mb-0 text-sm">{user.userName}</span>
            </Media>
          </Media>
        </th>
        <td>
          <div className="d-flex align-items-center">
            <span className="mr-2">{user.position}</span>
          </div>
        </td>
        <td>{user.mail}</td>

        <td>
          <Badge color="" className="badge-dot mr-4">
            {user.status === "active" ? (
              <i className="bg-success" />
            ) : (
              <i className="bg-danger" />
            )}
            {user.status}
          </Badge>
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
              <DropdownItem onClick={handleEdit}>Edit</DropdownItem>
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
