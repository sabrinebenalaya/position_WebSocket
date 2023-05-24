import {
    Card,
    CardHeader,
    CardFooter,
    Pagination,
    PaginationItem,
    PaginationLink,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
    Col,
    Button,
    Modal,
  } from "reactstrap";
  import { useEffect, useState } from "react";
  // core components
  import Header from "../../Headers/Header";
  import AddUser from "../../components/Users/AddUser/AddUser";
  import { useDispatch, useSelector } from "react-redux";
  import UserItem from "../../components/Users/User/UserItem";
import { fetchUsers } from "../../Redux/Actions/userAction";
  
  
  const UserTable = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    //get all user
    const dispatch = useDispatch();
    const usersList = useSelector((state) => state.userReducer.users);

    useEffect(() => {
      dispatch(fetchUsers());
    }, [dispatch]);

    const list = Array.isArray(usersList) ? usersList : [usersList];
  
   
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid >
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Users List</h3>
                  <div className="header-body d-flex justify-content-end">
                    <Col className="col-auto">
                      <Button
                        className="avatar avatar-sm"
                        id="tooltip7424380455"
                        onClick={handleShow}
                      >
                        <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                          <i className="ni ni-fat-add" />
                        </div>
                      </Button>
                      <UncontrolledTooltip delay={0} target="tooltip7424380455">
                        Add User
                      </UncontrolledTooltip>
  
                    </Col>
                  </div>
                </CardHeader>
  
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col" style={{ fontWeight: 'bold' , color: "black"}}>UserName</th>
                      <th scope="col"style={{ fontWeight: 'bold' , color: "black"}}>Position</th>
                      <th scope="col"style={{ fontWeight: 'bold' , color: "black"}}>Email</th>
                      <th scope="col"style={{ fontWeight: 'bold' , color: "black"}}>Status</th>
                     
                      <th scope="col" />
                    </tr>
                  </thead>
  
                  <tbody>
                    {list.map((user, index)=>{
                      return ( <UserItem user={user} key={index} />);
                    })}
                   
                  </tbody>
                </Table>
  
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
  
            {/* Modal of add User */}
            <Modal
              className="modal-dialog-centered"
              size="sm"
              isOpen={show}
              toggle={handleClose}
            >
              <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">
                  <AddUser toggle={handleClose} />
                </Card>
              </div>
            </Modal>
          </Row>
        </Container>
      </div>
    );
    ;
  };
  
  export default UserTable;
  