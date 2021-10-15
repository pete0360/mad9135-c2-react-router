import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

// import Card from 'react-bootstrap/Card'
// import Image from 'react-bootstrap/Image'

export default function User ({ list }) {
    // const [user, setUser] = useState(null);
    const { id } = useParams();

    // useEffect(() => {
    //     setUser(findUser(id));
    //   }, [findUser, id])

    let user = list.find((item, index) => parseInt(id) === index + 1)

    return (
        <>
        <div key = {user.name.first }  className = "detail-card">
                        <Image src={user.picture.large} />
                        <Card style={{ width: '18rem' }}
                        >
                            <Card.Header>{user.name.first} {user.name.last} </Card.Header>
                            <Card.Body>
                                <Card.Text>{user.location.street.number} {user.location.street.name}</Card.Text>
                                <Card.Text>{user.location.city},</Card.Text>
                                <Card.Text>{user.location.state},</Card.Text>
                                <Card.Text>{user.location.country},</Card.Text>
                                <Card.Text>{user.location.postcode}</Card.Text>
                                <Card.Text>{user.login.uuid}</Card.Text>
                                <Card.Text>{user.login.username}</Card.Text>
                                <Card.Text>{user.login.password}</Card.Text>



                            </Card.Body>
                        </Card>
                    </div>
        </>
    )
}

// User.propTypes = {
//     findUser: PropTypes.func.isRequired,
// }