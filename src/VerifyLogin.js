import { useContext } from "react";
import UserContext from "./contexts/userContext";
import { useNavigate  } from "react-router-dom";

export default function Verification(){
    const { config, setConfig } = useContext(UserContext);
    const navigate = useNavigate();
    const userAuth = localStorage.getItem("UserAuth");
    if (Object.keys(config).length===0){
        if (!userAuth){
            navigate('/login');
        }else{
            setConfig({headers:{Authorization: `Bearer ${userAuth}`}});
        };
    };
};