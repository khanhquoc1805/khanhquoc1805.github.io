import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import Avatar from "../components/Avatar/Avatar";
import Navigation from "../components/Navigation/Navigation";

function Home() {
    return (
        <div className="home">
            <Avatar></Avatar>
            <Navigation></Navigation>
        </div>
    );
}

export default Home;
