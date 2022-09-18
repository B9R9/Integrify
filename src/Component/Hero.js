import React from "react";
import Profil from "./profil";
import "./Hero.css";

const Hero = ({data}) => {
    return (
        <section className="hero">
         <div className="hero-containeur">
            <Profil data={data}/>
         </div>
        </section>
    )
}

export default Hero;