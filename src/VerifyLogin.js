import { useContext } from "react";
import UserContext from "./contexts/userContext";
import { useNavigate  } from "react-router-dom";

export default function Verification(){
    const { config, setConfig } = useContext(UserContext);
    const navigate = useNavigate();
    if (Object.keys(config).length===0){
        const userAuth = localStorage.getItem("UserAuth");
        console.log(userAuth,'userauth')
        if (!userAuth){
            navigate('/login');
        }else{
            setConfig({...config, headers:{Authorization: `Bearer ${userAuth}`}});
        };
    };
    console.log(config,'in')
};