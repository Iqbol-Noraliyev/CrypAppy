import React, { useEffect, useState } from 'react';
import finance from './Frame.png'
import './Finance.css'
import axios from 'axios';
import {Routes,Route,Link, } from 'react-router-dom';
import ListItem from './ListItem';

const Finance = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://62a1bfdbcc8c0118ef53b103.mockapi.io/api/v1/Finance")
             .then(res => setData(res.data))
             .catch(err => console.log(err))

   }, [])
    return ( 
        <div>
            <div className='finance-title'>
                <h1>New crypto finance app</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
            <div className='finance-boxs'>
            {
                data.map((x, i) => {
                    return(
                        <div className='finance-box' key={i}>
                            <img src={finance} alt="" />
                            <h3>{x.name}</h3>
                            <p>{x.task.length > 60 ? `${x.task.substr(0, 60)}...` : x.task}</p>
                            <Link to={'/ListItem/' + x.id}>Learn more</Link>
                            <Routes>
                                <Route path='/ListItem/:id' element={<ListItem />}/> 
                            </Routes>
                        </div>
                    )
                })
            }
            </div>
            
        </div>
     );
}
 
export default Finance;