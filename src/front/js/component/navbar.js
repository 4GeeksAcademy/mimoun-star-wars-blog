import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container d-flex">
				<div className="d-grid gap-2 d-md-flex ">
					<Link  to="/starships"><button type="button" class="btn btn-primary">Starships</button></Link>
		            <Link to="/planets"><button type="button" class="btn btn-primary">Planets</button></Link>
		            <Link  to="/characters"><button type="button" class="btn btn-primary">Characters</button></Link>	
				</div>
			</div>
		</nav>
	);
};
