import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./fullProfils.css";

const LineInfo = ({title, value}) => (
    <div className="line">
        <div className="key">
            <p>{title}:</p>
        </div>
        <div className="value">
            <p> {value}</p>
        </div>
    </div>
)

const Backbutton = () => {
    let navigate = useNavigate();
    return (
        <>
        <div className="btn-container">
             <button onClick={() => navigate(-1)}>Go back</button>
        </div>
        </>
    );
};

const FullProfils = ({data}) => {
    const { id } = useParams();
    const profile = data.filter(user => user.id === parseInt(id))
    return (
        <section className="full"> 
            <div className="containeur">
                <LineInfo title="Name" value={profile[0].name} />
                <LineInfo title="Username" value={profile[0].username} />
                <LineInfo title="E-mail" value={profile[0].email} />
                <LineInfo title="Phone" value={profile[0].phone} />
                <LineInfo title="Company Name" value={profile[0].company.name} />
                <LineInfo title="Web Site" value={profile[0].website} />
                <LineInfo title="Street" value={profile[0].address.street} />
                <LineInfo title="City" value={profile[0].address.city} />
                <LineInfo title="Zip code" value={profile[0].address.zipcode} />
                <Backbutton />
            </div>
        </section>
    )
}
export default FullProfils;