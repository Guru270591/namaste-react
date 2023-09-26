import { useEffect, useState } from "react";

const useStatusOnline = () =>{
   const [status, setStatus] = useState(true);
    useEffect(()=>{
       // get status online offline by evenlistener
       window.addEventListener('online', ()=> setStatus(true))
       window.addEventListener('offline', ()=> setStatus(false))
    },[]);


    return status;

}


export default useStatusOnline;