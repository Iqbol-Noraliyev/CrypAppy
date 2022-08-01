import styled from "styled-components";

export const ButtonStyled = styled.button`
    font-family: 'League Spartan';
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 100px;
    width: 164px;
    height: 48px;
    text-align: center;
    background-color: #0000;
    transition: 0.5s;

    &:hover{
        transition: 0.5s;
        box-shadow:  0 0 15px #fff;
    }
    
    &:active{
        transition: 0.5s;
        box-shadow: inset 0 0 15px #fff;
    }
`