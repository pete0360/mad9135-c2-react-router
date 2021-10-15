import { useState, useEffect } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import './users.css'


export default function Users(){
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchData();
        
      }, []);

      async function fetchData(type) {
        let url = `https://randomuser.me/api/?nat=ca&seed=0360&format=json&results=16`;
        let resp = await fetch(url);
        let data = await resp.json();
        setList(data.results.sort((a, b) => {
        if (a.name.last > b.name.last) return 1
        else if (a.name.last < b.name.last) return -1
        else return 0}))
      }


      return (

    
    <div className = "Users">
    {list.length === 0 && <p>Loading...</p>}
    {list.map((item, index) => (
    <div key = {item.name.first} className = "cardList">
        <Image src={item.picture.medium} />
        <Card 
        style={{ width: '18rem'}}>
            <Card.Header>{item.name.first} {item.name.last} </Card.Header>
            <Card.Body>
                <Card.Text>{item.email}</Card.Text>
                <Card.Text>{item.cell}</Card.Text>
                <Card.Link href = "#">More Info</Card.Link>
            </Card.Body>
        </Card>
    </div>
    ))}
    <div className = "userDetails">

    </div>
    
    </div>
    
      )
}