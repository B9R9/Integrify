import React from "react";
import LineInfo  from "../Components/Line_info";
import GoBack from "../Components/GoBack";
import { useParams } from "react-router-dom";
import '../Styles/Profile.css';


const Profile = ({data}) => {
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
                <GoBack />
            </div>
        </section>
    )
}
export default Profile;