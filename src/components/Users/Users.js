import { useState, useEffect } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card'


import './users.css'
import User from "../User/User"


export default function Users({ list }){
    // const [list, setList] = useState([]);



    // async function fetchData(type) {
    //     let url = `https://randomuser.me/api/?nat=ca&seed=0360&format=json&results=16`;
    //     let resp = await fetch(url);
    //     let data = await resp.json();
    //     setList(data.results)
    // }

    // function findUser(id) {
    // return list.find((item, index) => parseInt(id) === index + 1);
    // }

    // useEffect(() => {
    //     fetchData();
        
    // }, []);



    return (
        <>

            <div className = "users">
                <div className = "cardList parent">
                    {list.length === 0 && <p>Loading...</p>}
                    {list.map((item, index) => (
                    <div key = {item.name.first }  className = {`div${index + 1} center-page`} >
                        
                        <Card className style={{ width: '18rem' }}
                        >
                            <Card.Img className = "userImage" variant="top" src={item.picture.large} />
                            <div className = "cardContainer">
                            <h2>{item.name.first} {item.name.last} </h2>
                            <Card.Body>
                                <Card.Text>{item.email}</Card.Text>
                                <Card.Text>{item.cell}</Card.Text>
                                <NavLink className = "card-Link" to={`/users/${index + 1}`}>More info</NavLink>
                            </Card.Body>
                            </div>
                        </Card>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}