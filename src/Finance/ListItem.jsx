import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom'

const ListItem = () => {
    const [data, setData] = useState({
        name: '',
        task: '',
    })
    const params = useParams()

    useEffect(() => {
        axios.get('https://62a1bfdbcc8c0118ef53b103.mockapi.io/api/v1/Finance/' + params.id)
        .then(res => setData(res.data), console.log('okey'))
        .catch(err => console.log(err))
    }, [])
    return ( 
        <div>
            <div>
            <h3>{data.name}</h3>
            <p>{data.task}</p>
            <Link to='finance'>Finance</Link>
            </div>
        </div>
     );
}
 
export default ListItem;