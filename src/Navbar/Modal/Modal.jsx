import React, { useState } from 'react';
import { ButtonStyled } from '../../ButtonStyled';
import './Modal.css'

const Modal = ({closeModel}) => {
    // const [close, setClose] = useState(true)

    return ( 
        <div className='my-modal'>
            <div className='modal'>
                <h1>modal</h1>
                <ButtonStyled onClick={() => closeModel(false)}>close</ButtonStyled>
            </div>
        </div>
     );
}
 
export default Modal;