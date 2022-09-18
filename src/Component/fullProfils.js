import React from "react";
import { useParams } from "react-router-dom";
import "./fullProfils.css";


const FullProfils = ({data}) => {
    const { id } = useParams();
    return (
        <section className="full">
            <div className="containeur">
                <div className="line">
                    <div className="key">
                        <p>Name:</p>
                    </div>
                    <div className="value">
                        <p> {data[id - 1].name}</p>
                    </div>
                </div>
                <div className="line">
                    <div className="key">
                        <p>Username:</p>
                    </div>
                    <div className="value">
                        <p> {data[id - 1].username}</p>
                    </div>
                </div>
                <div className="line">
                    <div className="key">
                        <p>E-mail:</p>
                    </div>
                    <div className="value">
                        <p> {data[id - 1].email}</p>
                    </div>
                </div>
                <div className="line">
                    <div className="key">
                        <p>Phone:</p>
                    </div>
                    <div className="value">
                        <p> {data[id - 1].phone}</p>
                    </div>
                </div>
                <div className="line">
                    <div className="key">
                        <p>Company Name:</p>
                    </div>
                    <div className="value">
                        <p> {data[id - 1].company.name}</p>
                    </div>
                </div>
                <div className="line">
                    <div className="key">
                        <p>Web Site:</p>
                    </div>
                    <div className="value">
                        <p> {data[id - 1].website}</p>
                    </div>
                </div>
                <div className="line">
                    <div className="key">
                        <p>Street:</p>
                    </div>
                    <div className="value">
                        <p> {data[id - 1].address.street}</p>
                    </div>
                </div>
                <div className="line">
                    <div className="key">
                        <p>Suite:</p>
                    </div>
                    <div className="value">
                        <p> {data[id - 1].address.suite}</p>
                    </div>
                </div>
                <div className="line">
                    <div className="key">
                        <p>City:</p>
                    </div>
                    <div className="value">
                        <p> {data[id - 1].address.city}</p>
                    </div>
                </div>
                <div className="line">
                    <div className="key">
                        <p>Zip Code:</p>
                    </div>
                    <div className="value">
                        <p> {data[id - 1].address.zipcode}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FullProfils;