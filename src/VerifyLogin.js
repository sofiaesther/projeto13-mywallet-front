import { useContext } from "react";
import UserContext from "./contexts/userContext";
import { useNavigate  } from "react-router-dom";

export default function Verification(){
    const { config, setConfig } = useContext(UserContext);
    const navigate = useNavigate();

    if (Object.keys(config).length === 0){
        if (localStorage.getItem("UserAuth") === null){
            navigate('/login');
        }else{
            const userAuth = JSON.parse(localStorage.getItem("UserAuth"));
            setConfig({headers:{...config, Authorization: `Bearer ${userAuth.token}`}});
        };
    };
};