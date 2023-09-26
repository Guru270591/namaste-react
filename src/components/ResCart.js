import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const ResCart = ({resData})=>{
   const { loggedInUser } = useContext(UserContext);
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData.info;
    return (
        <div className="p-2 m-1 w-[200px] border-2 border-solid border-gray-200 bg-gray-100 hover:bg-gray-300">
           <img  className ="p-3" src={CDN_URL + cloudinaryImageId}/>
           <h4 className="my-2 font-bold">{name} </h4>
           <h5>{cuisines.join(', ')}</h5>
           <h5>{costForTwo}</h5>
           <h5>{avgRating} Rating</h5>
           <h5>User Name: {loggedInUser} </h5>
        </div>
    )
}

export const withPromotedLabel = (ResCart)=>{
   return (props)=>{
    return (
        <div>
            <label>
                Promoted
            </label>
            <ResCart { ... props}/>
        </div>
    )
   }
}

export default  ResCart;