import { useState, useEffect } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card'


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
    //     <div className="planets">
    //   {list.length === 0 && <p>Loading...</p>}
    //   <div className="planet-list">
    //     {list.map((item, index) => (
    //       <p key={item.name.first}>
    //         <NavLink to={`/Users/${index + 1}`}>{item.name.last}</NavLink>
            
    //       </p>
    //     ))}
    //   </div>
    // </div>
    <>
    {list.length === 0 && <p>Loading...</p>}
     {list.map((item, index) => (
    <div key = {item.name.first}>
        <Card 
        style={{ width: '18rem'}}>
            <Card.Img variant="top" src={item.picture.large} />
            <Card.Header>{item.name.first} {item.name.last}</Card.Header>
            <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href = "#">More Info</Card.Link>
            </Card.Body>
        </Card>
    </div>
    ))}
    </> 
      )
}