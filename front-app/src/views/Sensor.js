import React, {useState} from "react";
// react component for creating dynamic tables
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import Header from "../Headers/Header";
import {
  Card,
  Container,
  Button,
  Modal,
} from "reactstrap";
import AddSensor from './../components/Sensors/AddSensor/AddSensor';
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

function Sensor() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dataTable = [
    {
      name: "sensor A",
      position: " positionA",
      office: "officeA",
      Age: "AgeA",
      start_date: "12-12-2015",
      salary: "1254",
    },
    {
      name: "sensor B",
      position: " positionB",
      office: "officeB",
      Age: "AgeB",
      start_date: "12-12-2010",
      salary: "10254",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Container className="mt--7" fluid>
      <div className="text-right" xs="4">
          <Button
            color="info"
            href="#pablo"
            onClick={handleShow}
            size="lg"
            style={{ marginRight: "2%", marginTop: "2%" }}
          >
            Add Sensor
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
              dataField: "position",
              text: "Position",
              sort: true,
            },
            {
              dataField: "office",
              text: "Office",
              sort: true,
            },
            {
              dataField: "Age",
              text: "age",
              sort: true,
            },
            {
              dataField: "start_date",
              text: "Start date",
              sort: true,
            },
            {
              dataField: "salary",
              text: "Salary",
              sort: true,
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
                pagination={pagination}
                bordered={false}
              />
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
                <AddSensor toggle={handleClose} />
              </Card>
            </div>
          </Modal>
      </Container>
    </div>
  );
}

export default Sensor;
