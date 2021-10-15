import { useState, useEffect } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Table from 'react-bootstrap/Table'

export default function Address(){
    const [list, setList] = useState([]);


    useEffect(() => {
        fetchData();
        
      }, []);

      async function fetchData(type) {
        let url = `https://randomuser.me/api/?nat=ca&seed=0360&format=json&results=16`;
        let resp = await fetch(url);
        let data = await resp.json();
        setList(data.results.sort((a,b) => {
            if(a.name.last > b.name.last) return 1
            else if(a.name.last < b.name.last) return -1
            else return 0
        }))
      }

      return (
        <>
        {list.length === 0 && <p>Loading...</p>}
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Address</th>
          </tr>

        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr>
                <th>{index + 1}</th>
                <th>{item.name.last}</th>
                <th>{item.name.first}</th>
                <th>{item.location.street.number} {item.location.street.name}, {item.location.city}, {item.location.state} </th>
            </tr>
          ))}
        </tbody>
      </Table>
      </>
      )
}