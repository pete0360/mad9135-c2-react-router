import { useParams } from 'react-router-dom';
import "./user.css"


export default function User({ list }){


    const { id } = useParams()


    let user = list.find((item, index) => parseInt(id) === index + 1)

    return(
        <div className = "detail-card">
            <div className = "img-container">
            {user && <img className = "detail-image" src = {user.picture.large} alt = "user" />}    
            </div>
            <div className = "detail-info">
            {user && <h1>{user.name.first} {user.name.last}</h1>}
            {user && <h3>Address</h3>}
            {user && <p>{user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.country}, {user.location.postcode} </p>}
            {user && <h2>Login Info </h2>}
            {user && <p><h4>uuid</h4> {user.login.uuid}</p>}
            {user && <p><h4>username</h4>{user.login.username}</p>}
            {user && <p><h4>password</h4> {user.login.password}</p>}

            </div>
        </div>
    )
}
