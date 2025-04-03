import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = () => {

    const { store, actions} = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getCharacter(params.uid)
    }, [])

    return (

        <div className="container bg-dark">
            <div className="card my-2  bg-dark text-light">
                <div className="row g-0">
                    <h1>{store.currentCharacter.name}</h1>
                    <div className="col-md-7 col-lg-6 col-xl-5 mt-2">
                        <img className="img-fluid rounded-start" src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} />
                    </div>
                    <div className="col-md-5 col-lg-6 col-xl-7">
                        <div className="card-body">
                            <p><strong>Height:</strong> {store.currentCharacter.height}</p>
                            <p><strong>Mass:</strong> {store.currentCharacter.mass}</p>
                            <p><strong>Hair color:</strong> {store.currentCharacter.hair_color}</p>
                            <p><strong>Skin color:</strong> {store.currentCharacter.skin_color}</p>
                            <p><strong>Eye color:</strong> {store.currentCharacter.eye_color}</p>
                            <p><strong>Birth year:</strong> {store.currentCharacter.birth_year}</p>
                            <p><strong>Gender:</strong> {store.currentCharacter.gender}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}