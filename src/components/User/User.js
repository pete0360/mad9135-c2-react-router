import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// import Card from 'react-bootstrap/Card'
// import Image from 'react-bootstrap/Image'

export default function User ({ findUser }) {
    const [user, setUser] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        setUser(findUser(id));
      }, [findUser, id])

    return (
        <>
            
            <p>{user.email}</p>

        
        </>
    )
}

User.propTypes = {
    findUser: PropTypes.func.isRequired,
}