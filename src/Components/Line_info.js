import React from "react";
import '../Styles/Profile.css';

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

export default LineInfo;