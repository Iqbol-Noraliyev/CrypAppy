import React, { useState } from 'react';
import { ButtonStyled } from '../ButtonStyled';
import logo from './IMAGE.png'
import Modal from './Modal/Modal';
import './Navbar.css'


const Navbar = () => {
const [openModal, setOpenModal] = useState(false)




    return ( 
        
        <div className='navbar'>
            <div className='navbar-section container'>
                <img src={logo} alt="images" />
                <div className='navbar-link'>
                    <a className='link' href="#">Benefits</a>
                    <a className='link' href="#">Features</a>
                    <a className='link' href="#">Reviews</a>
                    <a className='link' href="#">Pricing</a>
                    <a className='link activ' href="#">Contact</a>
                    <ButtonStyled onClick={() => {setOpenModal(true);}}>
                        Buy CrypAppy
                    </ButtonStyled>
                </div>
            </div>
                {openModal && <Modal closeModel = {setOpenModal}/> }
        </div>
     );
}
 
export default Navbar;