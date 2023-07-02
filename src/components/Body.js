import RestaurentCard from "./RestaurantCard";
import useOnlineCheck from "../utils/useOnlineCheck";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Body = () => {
  const onlineStatus = useOnlineCheck();
  const dispatch = useDispatch();
  if (onlineStatus == false)
    return <h1> You are offline, Please check your internet connection!!</h1>;
  const addItems = () => {
      dispatch(addItem('grapes'));
  }
  return (
    <div className="body">
      <button onClick={()=>addItems()}> Add Item </button>
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard />
      </div>
    </div>
  );
};

export default Body;
