import React, { useEffect, useState } from "react";
// react component for creating dynamic tables
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import Header from "../Headers/Header";
import {
  Card,
  Button,
  Modal,  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import AddCapteur from "../components/Capteur/AddCapteur/AddCapteur";
import { fetchCapteurs } from "../Redux/CapteurSlice";
import { useDispatch , useSelector} from 'react-redux';
const pagination = paginationFactory({
  page: 1,
  alwaysShowAllBtns: true,
  showTotal: true,
  withFirstAndLast: false,
  sizePerPageRenderer: ({ options, currSizePerPage, onSizePerPageChange }) => (
    <div className="dataTables_length" id="datatable-basic_length">
      <label>
        Show{" "}
        {
          <select
            name="datatable-basic_length"
            aria-controls="datatable-basic"
            className="form-control form-control-sm"
            onChange={(e) => onSizePerPageChange(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        }{" "}
        entries.
      </label>
    </div>
  ),
});

const { SearchBar } = Search;
function Capteur() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch= useDispatch()
  useEffect(() => {
    dispatch(fetchCapteurs());
  }, [dispatch]);
  const capteursList = useSelector((state) => state.capteur);
  const dataTable = Array.isArray(capteursList) ? capteursList : [capteursList];
  console.log("list of capteur =", dataTable);




  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <div className="text-right" xs="4">
        <Button
          color="info"
          href="#pablo"
          onClick={handleShow}
          size="lg"
          style={{ marginRight: "2%", marginTop: "2%" }}
        >
          Add Capteur
        </Button>
      </div>
      <ToolkitProvider
        data={dataTable}
        keyField="name"
        columns={[
          {
            dataField: "name",
            text: "Name",
            sort: true,
          },
          {
            dataField: "Longitude",
            text: "Longitude",
            sort: true,
          },
          {
            dataField: "Latitude",
            text: "Latitude",
            sort: true,
          },
          {
            dataField: "Action",
            text: "Action",
            sort: false,
          },
        ]}
        search
      >
        {(props) => (
          <div className="py-4">
            <div
              id="datatable-basic_filter"
              className="dataTables_filter px-4 pb-1"
            >
              <label>
                Search:
                <SearchBar
                  className="form-control-sm"
                  placeholder=""
                  {...props.searchProps}
                />
              </label>
            </div>
            <BootstrapTable
              {...props.baseProps}
              bootstrap4={true}
              bordered={false}
            />
            
             <div className="py-4">
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
              </div>
          </div>
        )}
      </ToolkitProvider>
      <Modal
        className="modal-dialog-centered"
        size="sm"
        isOpen={show}
        toggle={handleClose}
      >
        <div className="modal-body p-0">
          <Card className="bg-secondary shadow border-0">
            <AddCapteur toggle={handleClose} />
          </Card>
        </div>
      </Modal>
    </div>
  );
}

export default Capteur;
