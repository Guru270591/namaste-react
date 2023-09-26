import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useStatusOnline from "../utils/useStatusOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useStatusOnline();
  const { loggedInUser } = useContext(UserContext);
  const [btnText, setBtnText] = useState("Login");

  const items = useSelector((store) => store.cart.items);
  console.log("item", items);

  return (
    <div className="flex justify-between bg-pink-200">
      <div>
        <img className="logo-img h-24" src={LOGO_URL} />
      </div>
      <div className="p-2">
        <ul className="m-2 pt-4 flex">
          <li className=" px-4">
            Online Status: {onlineStatus === true ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About US</Link>
          </li>
          <li className="px-4">
            <Link to="contact">Contact US</Link>
          </li>
          <Link to="/cart">
            <li className="px-4 cursor-pointer">
              Cart- ( {items.length} item )
            </li>{" "}
          </Link>
          <button
            className="px-4"
            onClick={() => {
              btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
            }}
          >
            {btnText}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
