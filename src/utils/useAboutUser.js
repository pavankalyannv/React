import { useEffect, useState } from "react";

const useAboutUser = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const res = userData();
  }, []);

  const userData = async () => {
    const data = await fetch("https://api.github.com/users/pavankalyannv");
    const json = await data.json();
    setData(json);
  };
  return data;
};

export default useAboutUser;
