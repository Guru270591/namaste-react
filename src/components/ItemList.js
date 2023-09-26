import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ itemList }) => {
  const dispatch = useDispatch();
  console.log("dispatch", dispatch);

  console.log("itemList", itemList);
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {itemList?.map((item) => {
        const { name, price, description, imageId } = item?.card?.info;
        console.log("imag", imageId);
        return (
          <div className="flex justify-between py-4 border-b-2 border-b-gray-200">
            <div className="w-9/12">
              <p className="font-bold py-2 text-md">{name}</p>
              <p className="font-bold mb-4"> ₹ : {price / 100}</p>
              <p className="text-md">{description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  onClick={() => handleAddItem(item)}
                  className="p-2 px-4 mt-32 mx-12 rounded-lg bg-black text-white shadow-lg"
                >
                  Add +
                </button>
              </div>
              <img src={CDN_URL + imageId} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
