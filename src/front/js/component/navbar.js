import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="">
					<Link  to="/starships"><button>Starships</button></Link>
		            <Link to="/planets"><button>Planets</button></Link>
		            <Link  to="/characters"><button>Characters</button></Link>	
				</div>
			</div>
		</nav>
	);
};
