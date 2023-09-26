import { useParams } from "react-router";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const resDetails = useRestaurentMenu(resId);

  const [showIndex, setShowIndex] = useState(1);

  if (resDetails === null) {
    return <div>Loading ...</div>;
  }
  const { name, cuisines, costForTwoMessage } =
    resDetails?.cards[0]?.card?.card?.info;
  const cartegorysItems =
    resDetails.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cards)=> cards?.card?.card?.['@type']=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

console.log('categorys', cartegorysItems);
  return (
    <div>
      <div className="text-center my-4">
        <h1 className="font-bold py-2 text-lg">{name}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>
      {/*  Here I will list the all restaurent Category  */}
      {cartegorysItems?.map((categorys, index)=>
          <RestaurentCategory setShowIndex = {()=> setShowIndex(index)} showItem= {index == showIndex ? true : false } categorys = {categorys?.card?.card}/>
      )}
        
    

      {/* <div>
                <h1>Menu</h1>
                <h2>{resList.title}</h2>
                {resList.map((menuItem)=>{
                    return(
                <ul>
                    <li key = {menuItem?.card?.info?.id}>{menuItem?.card?.info?.name} - RS.{menuItem?.card?.info?.price/100 || menuItem?.card?.info?.defaultPrice/100 }</li>
                </ul>
                    )
                })}
                
            </div> */}
    </div>
  );
};

export default RestaurentMenu;
