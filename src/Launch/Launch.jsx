import React from 'react';
import launch from './Launch.png'
import image from './IMAGE.png'
import './Launch.css'

const Launch = () => {
    return ( 
        <div className='launch-box'>
                <div className='title'>
                <h1>A perfect landing page to help launch your app</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                </div>
                <div className='box'>
                    <div className='main-block'>
                        <div className='block'>
                            <img src={launch} alt="images" />
                            <h4>Feature description</h4>
                            <p>Suspendisse varius enim in eros elementum tristique. Duis cursusSuspendisse varius enim in eros elementum tristique. Duis cursus.</p>
                        </div>
                        <div className='block'>
                            <img src={launch} alt="images" />
                            <h4>Feature description</h4>
                            <p>Suspendisse varius enim in eros elementum tristique. Duis cursusSuspendisse varius enim in eros elementum tristique. Duis cursus.</p>
                        </div>
                        <div className='block'>
                            <img src={launch} alt="images" />
                            <h4>Feature description</h4>
                            <p>Suspendisse varius enim in eros elementum tristique. Duis cursusSuspendisse varius enim in eros elementum tristique. Duis cursus.</p>
                        </div>
                    </div>
                    <img src={image} alt="image" />
                    <div>
                        <div className='block2'>
                            <img src={launch} alt="images" />
                            <h4>Feature description</h4>
                            <p>Suspendisse varius enim in eros elementum tristique. Duis cursusSuspendisse varius enim in eros elementum tristique. Duis cursus.</p>
                        </div>
                        <div className='block2'>
                            <img src={launch} alt="images" />
                            <h4>Feature description</h4>
                            <p>Suspendisse varius enim in eros elementum tristique. Duis cursusSuspendisse varius enim in eros elementum tristique. Duis cursus.</p>
                        </div>
                        <div className='block2'>
                            <img src={launch} alt="images" />
                            <h4>Feature description</h4>
                            <p>Suspendisse varius enim in eros elementum tristique. Duis cursusSuspendisse varius enim in eros elementum tristique. Duis cursus.</p>
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default Launch;