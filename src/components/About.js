import User from "./User";
import UserClass from "./UserClass";
import useAboutUser from "../utils/useAboutUser";

const About = () => {
  const userData = useAboutUser();

  return <div>{userData ? <User data={userData} /> : "loading user wait"}</div>;
};

export default About;
