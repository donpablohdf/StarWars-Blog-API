import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navBar.css"
import logo from "/src/front/img/logoStartWars.png"
import { Login } from "./Login.jsx";
import { Favorites } from "./Favorites.jsx";



export const Navbar = () => {
	const { store, actions } = useContext(Context);


	const n_favs = Object.keys(store.favoritos).length
	return (
		<nav className="navbar bg-secondary text-bg-secondary p-3 d-flex sticky-top">

			<div className="pl-5 "><Link to="/"><img src={logo} height={50} /></Link></div>

			<div className="pl-5 "><Link to="/private" ><button className="btn btn-secondary" type="button">Private Area</button></Link></div>

			
		</nav>
	);
};