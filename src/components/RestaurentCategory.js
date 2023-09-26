import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({ categorys, showItem, setShowIndex }) => {
    //const [isShow, setIsShow] = useState(showItem);
  console.log(categorys);

  const handleChange = ()=>{
    setShowIndex();
    //setIsShow(isShow !== true);
  }

  return (
    <div>
    <div className="w-6/12  mx-auto my-8 p-4 bg-gray-50 shadow-lg">
      <div className="flex justify-between cursor-pointer" onClick={handleChange}>
        <span className="font-bold text-lg">{categorys.title} ({categorys?.itemCards?.length})</span>
        <span>{showItem ? '🔽': '🔼' } </span>
      </div>
      <div>
       {showItem && (<ItemList itemList = {categorys?.itemCards}/>)}
       </div>
    </div>
    </div>
  );
};

export default RestaurentCategory;
