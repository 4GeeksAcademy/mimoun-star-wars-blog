import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ButtonLike = ({ item, type }) => {
    const { store, actions } = useContext(Context);

    const isFavorite = store.favorites.some(fav => fav.name === item.name && fav.type === type);

    // Función para manejar la acción de agregar o quitar de favoritos
    const handleFavorite = () => {
        if (isFavorite) {
            actions.removeFavorite(item.name, item.type);
        } else {
            actions.addFavorite({ ...item, type });
        }
    };

    return (
        <span
            className={`btn ${isFavorite ? 'btn-warning' : 'btn-outline-warning'}`}
            onClick={handleFavorite}
        >
            <i className="fas fa-heart fa-lg"></i>
        </span>
    );
};