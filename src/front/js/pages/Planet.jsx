import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Planet = () => {

    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() =>{
        actions.getPlanet(params.uid)
    }, [])
    return (

        <div className="container bg-dark">
            <div className="card my-2  bg-dark text-light ">
                <div className="row g-0">
                    <h1>{store.currentPlanet.name}</h1>
                    <div className="col-md-7 col-lg-6 col-xl-5">
                        <img className="img-fluid rounded" src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`}/>
                    </div>
                    <div className="col-md-5 col-lg-6 col-xl-7">
                        <div className="card-body">
                            <p><strong>Diameter:</strong> {store.currentPlanet.diameter} </p>
                            <p><strong>Rotation Period:</strong> {store.currentPlanet.rotation_period}</p>
                            <p><strong>Orbital Period:</strong> {store.currentPlanet.orbital_period}</p>
                            <p><strong>Gravity:</strong> {store.currentPlanet.gravity}</p>
                            <p><strong>Population:</strong> {store.currentPlanet.population}</p>
                            <p><strong>Climate:</strong> {store.currentPlanet.climate}</p>
                            <p><strong>Terrain:</strong> {store.currentPlanet.terrain}</p>
                            <p><strong>Surface water:</strong> {store.currentPlanet.surface_water}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}