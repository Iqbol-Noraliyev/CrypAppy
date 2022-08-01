import React, { useState } from 'react';
import img from './Frame.png'
import image from './IMAGE3...png'
import './Mobile.css'
import images from './IMAGE..png'
import axios from 'axios';


const Mobile = () => {
    const [data,setData] = useState([])
   const getCryp = (() => {
        axios.get('https://62a1bfdbcc8c0118ef53b103.mockapi.io/api/v1/Bitcoin')
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    })
    return ( 
        <div>
            <div className='mobile-section'>
            <div className='main-mobile'>
                <h5>mobile friendly</h5>
                <h1>Manage your money from anywhere</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                    <div className='boxs'>
                        <div>
                            <img src={img} alt="image" />
                            <h3>Benefit description</h3>
                            <p>Suspendisse varius enim in eros elementum tristique. Duis cursus.</p>
                        </div>
                        <div>
                            <img src={img} alt="image" />
                            <h3>Benefit description</h3>
                            <p>Suspendisse varius enim in eros elementum tristique. Duis cursus.</p>
                        </div>
                    </div>
                <button onClick={getCryp}>Get CrypAppy</button>
                
            </div>
            <div className='img_section'>
                <img src={image} alt="image1" />
                <img src={images} alt="image2" />
            </div>

        </div>
     
        </div>

     );
}
 
export default Mobile;