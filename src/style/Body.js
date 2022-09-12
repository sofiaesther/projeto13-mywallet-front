import styled from "styled-components";

const Body = styled.div`
    background-color: #8C11BE;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Raleway';
    color: #ffffff;
`

const Form = styled.form`
    width: 330px;
    margin: 30 auto auto auto;
    display: flex;
    flex-direction: column;

    input{
        height: 60px;
        background-color: #ffffff;
        color: #000;
        border-radius: 5px;
        padding-left: 15px;
        text-align: left;
        border: none;
        margin-top: 15px;
        font-size: 20px;
    }
    ::placeholder{
        font-size: 20px;
        color: #000;
    }

    button{
        background-color: #A328D6;
        height: 60px;
        align-items: center;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 5px;
        border: none;
        font-size: 20px;
        color: #ffffff;
        margin-top: 15px;

        .hover{
            box-shadow: #000 3px 3px;
        }
    }

`;

const LinktoRegister = styled.div`
margin-top: 15px;
    font-size: 15px;
    text-align: center;
    color: #fff;
    text-decoration: none;
`;
export { Body, Form, LinktoRegister };