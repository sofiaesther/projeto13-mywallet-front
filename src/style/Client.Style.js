import styled from "styled-components";

const Content = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
`;
const Top = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content:space-between;
    font-size: 26px;
    ion-icon {
        font-size: 30px;
    }

`;

const InfoBox = styled.div`
    background-color: #fff;
    margin-top: 30px;
    height: calc(100vh - 330px);
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
`
const Buttons = styled.div`
    background-color: #A328D6;
    width: 150px;
    height: 115px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    border-radius: 8px;
    padding: 20px;
    ion-icon {
        font-size: 30px;
    }

    p{
        margin-top: 50px;
        font-size: 18px;
        width: 50px;
    }
`;
const Operation = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content:space-between;
`;
const Transactions = styled.div`
    display: flex;
    margin:5px 10px;

`;
const Information = styled.div`
    display: flex;
    justify-content: space-between;
    color: black;
    margin-left: 20px;
    width: 100%;
`
const Date =styled.div`
    color: #C6C6C6;
`;

const NoTransaction = styled.div`
    color:#868686;
    font-size: 20px;
    width: 180px;
    margin: 150px auto;
    text-align: center;
`;
export {Date, NoTransaction, Content, Operation, InfoBox, Buttons, Top, Information, Transactions};