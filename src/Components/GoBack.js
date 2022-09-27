import React from "react";
import { useNavigate } from 'react-router-dom';
import '../Styles/Profile.css';

const GoBack = () => {
    let navigate = useNavigate();
    return (
        <>
        <div className="btn-container">
             <button onClick={() => navigate(-1)}>Go back</button>
        </div>
        </>
    );
};

export default GoBack;
