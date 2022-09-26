import React from "react";
import Profil from "./Profils";
import '../Styles/Cards.css';

const Card = ({data}) => {
    return (
        <section className="hero">
         <div className="hero-containeur">
            <Profil data={data}/>
         </div>
        </section>
    )
}

export default Card;