import React from "react";
import Profils from "../Components/Profils";
import '../Styles/Home.css';

const Home = ({data}) => {
    return (
        <section className="profils">
         <div className="profils-containeur">
            <Profils data={data}/>
         </div>
        </section>
    )
}

export default Home;