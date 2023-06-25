import RestaurentCard from "./RestaurantCard";

import useOnlineCheck from "../utils/useOnlineCheck";

const Body = () => {
  const onlineStatus = useOnlineCheck();
  if (onlineStatus == false)
    return <h1> You are offline, Please check your internet connection!!</h1>;

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard />
      </div>
    </div>
  );
};

export default Body;
