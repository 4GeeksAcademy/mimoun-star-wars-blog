import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Starship = () => {

    const { store, actions } = useContext(Context);
    const params = useParams()

    useEffect(() =>{
        actions.getStarship(params.uid)
    }, [])

    return (


        <div className="container bg-dark">
            <div className="card my-2  bg-dark text-light mt-3">
                <div className="row g-0">
                    <h1>{store.currentStarship.name}</h1>
                    <div className="col-md-7 col-lg-6 col-xl-5">
                        <img className="img-fluid rounded" src={`https://starwars-visualguide.com/assets/img/starships/${params.uid}.jpg`} />
                    </div>
                    <div className="col-md-5 col-lg-6 col-xl-7">
                        <div className="card-body">
                            <p>Model: {store.currentStarship.model}</p>
                            <p>Starship class: {store.currentStarship.starship_class}</p>
                            <p>Manufacturer: {store.currentStarship.manufacturer}</p>
                            <p>Cost in credits: {store.currentStarship.cost_in_credits}</p>
                            <p>Length: {store.currentStarship.length}</p>
                            <p>Crew: {store.currentStarship.crew}</p>
                            <p>Passengers: {store.currentStarship.passengers}</p>
                            <p>Max atmosphering speed: {store.currentStarship.max_atmosphering_speed}</p>
                            <p>Hyperdrive rating: {store.currentStarship.hyperdrive_rating}</p>
                            <p>MGLT: {store.currentStarship.MGLT}</p>
                            <p>Cargo capacity: {store.currentStarship.cargo_capacity}</p>
                            <p>Consumables: {store.currentStarship.consumables}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}