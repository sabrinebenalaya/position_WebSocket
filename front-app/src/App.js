import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch, Redirect, Routes } from "react-router-dom";

import AuthLayout from "./layouts/Auth.js";
import AdminLayout from "./layouts/Admin.js";
function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
          <Redirect from="/" to="/admin/index" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
