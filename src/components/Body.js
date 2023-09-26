import ResCart, { withPromotedLabel } from "./ResCart";
import { useState, useEffect, useContext } from "react";

import { RES_LIST_API } from "../utils/constant";
import { Link } from "react-router-dom";
import useStatusOnline from "../utils/useStatusOnline";
import { withPromotedLabel } from "./ResCart";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filterRestaurents, setfilterRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useStatusOnline();

  const ResCartPramoted = withPromotedLabel(ResCart);

  const { loggedInUser, setUserName } = useContext(UserContext);

  console.log("onlineStatus", onlineStatus);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RES_LIST_API);
      const resList = await data.json();
      setListOfRestaurent(
        resList?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilterRestaurents(
        resList?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log("res", listOfRestaurent);
    } catch {
      (err) => {
        console.log("error", err);
      };
    }
  };

  const filterDATA = () => {
    let res = listOfRestaurent.filter((res) => res.info.avgRating > 4);
    setfilterRestaurents(res);
  };

  const searchFilter = () => {
    const res = listOfRestaurent.filter((restaurant) =>
      (restaurant.info?.name).toLowerCase()?.includes(searchText.toLowerCase())
    );
    setfilterRestaurents(res);
  };

  console.log("filterRestaurents", filterRestaurents);
  if (onlineStatus === false)
    return <h1>You are offline No internet connection</h1>;

  return filterRestaurents?.length === 0 ? (
    <div>
      <h1>Loading ...</h1>
    </div>
  ) : (
    <div className="py-4">
      <div className="flex">
        <div className="px-4 m-4">
          <input
            className="border-solid rounded-md border-2 border-indigo-300"
            onChange={() => setSearchText(event.target.value)}
            type="text"
            value={searchText}
          />
          <button
            className=" m-4 px-4 rounded-lg border-solid border-2 border-indigo-400"
            onClick={searchFilter}
          >
            search
          </button>
          <button
            className="px-4 border-solid rounded-md border-indigo-400 border-2"
            onClick={filterDATA}
          >
            Top rated Restaurents
          </button>
          <input
            className="border-solid rounded-md mx-4 border-2 border-indigo-300"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="m-4 px-4 flex flex-wrap justify-around">
        {filterRestaurents.map((restaurent) => (
          <Link
            key={restaurent?.info?.id}
            to={"/restaurent/" + restaurent?.info?.id}
          >
            <ResCart resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
