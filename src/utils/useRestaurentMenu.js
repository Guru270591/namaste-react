import { useEffect, useState } from "react";
import { RES_DETAILS_API } from "./constant";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResIfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_DETAILS_API + resId);
    const json = await data.json();
    setResIfo(json.data);
  };
  return resInfo;
};

export default useRestaurentMenu;
