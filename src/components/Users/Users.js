import { useState, useEffect } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import './users.css'
import User from "../User/User"


export default function Users(props){
    const [list, setList] = useState([]);



    async function fetchData(type) {
        let url = `https://randomuser.me/api/?nat=ca&seed=0360&format=json&results=16`;
        let resp = await fetch(url);
        let data = await resp.json();
        setList(data.results)
    }

    function findUser(id) {
    return list.find((item, index) => parseInt(id) === index + 1);
    }

    useEffect(() => {
        fetchData();
        
    }, []);



    return (
        <>
            <div className = "users">
                <div className = "cardList">
                    {list.length === 0 && <p>Loading...</p>}
                    {list.map((item, index) => (
                    <div key = {item.name.first }  className = "card">
                        <Image src={item.picture.medium} />
                        <Card style={{ width: '18rem' }}
                        >
                            <Card.Header>{item.name.first} {item.name.last} </Card.Header>
                            <Card.Body>
                                <Card.Text>{item.email}</Card.Text>
                                <Card.Text>{item.cell}</Card.Text>
                                <NavLink className = "card-Link" to={`/users/${index + 1}`}>More info</NavLink>
                            </Card.Body>
                        </Card>
                    </div>
                    ))}
                </div>
            
                <div className = "userDetails">
                    <Route path="/users/:id">
                        <User list = { list } />
                    </Route>
                </div>
            </div>
        </>
    )
}