import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import {Favourites } from "../pages/Favourites.jsx";

export const Starships = () => {

    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const handleOnError = (event) => {
        event.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
    }

    return (

        <div className="container bg-dark mb-3">
            <h1 className="text-light text-center pt-4">Starships</h1>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2">
                {store.starships.map((item) =>
                    <div key={item.uid} className="col my-3">
                        <div className="card h-100 mx-2  border border-0 object-fit-scale">
                            <img 
                            className="card-img-top object-fit-scale"
                            onError={handleOnError}
                            alt="" src={`https://starwars-visualguide.com/assets/img/starships/${item.uid}.jpg`} />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {item.name}
                                </h5>
                                <div className="d-flex justify-content-between">
                                    <Link to={`/starships/${item.uid}`} className="btn btn-secondary">Details</Link>
                                    <Favourites item={item} type="starship" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )

}