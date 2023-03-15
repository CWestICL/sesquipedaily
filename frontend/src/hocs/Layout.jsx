import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const layout = ({ children }) => (
    <Fragment>
        <Navbar />
        <Outlet />
    </Fragment>
);

export default layout