import { useEffect } from "react";
import User from './User';
import UserClass from "./UserClass";

const About = () => {

  useEffect(() => {
    let data = setInterval(() => {
      console.log("interval");
    }, 1000);

    return () => {
      clearInterval(data);
      console.log("useEffect unMounted");
    };
  }, []);

  return (
    <div>
      <User />
      <UserClass name={"pk"} location={"elr"} />
    </div>
  );
};

export default About;
