import React from "react";
import './Profil.css';
import { Link } from 'react-router-dom';


const Profil = ({data}) => {
    return (
        <>
        {data.map((profil, index) => 
            <div key={index} className="profil-container">
                <div className="profil-box">
                    <div className="profil-picture">
                        <div className="picture">{profil.name[0]}</div>
                    </div>
                    <div className="profil-info">
                        <h3>{profil.name}</h3>
                        <p>{profil.username}</p>
                        <a href={profil.website}>{profil.website}</a>
                    </div>
                    <button className="profil-link">
                        <Link to={`/profil/${profil.id}`}>More Details</Link>
                    </button>
                </div>
            </div>
            )}
        </>
    )
}

export default Profil;