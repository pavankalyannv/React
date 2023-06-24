const User = (props) => {
  console.log("props", props);
  // const { recData } = props;
  // console.log("recData", recData);
  // const {login} = recData;
  // console.log("login", login);

  // I want to destructure the login from props
  // const {login} = props
  // const {login} = props.data
  // both didn't worked getting error 
 
  
  return (
    <div>
      <h2> Name: {props?.data?.login}</h2>
    </div>
  );
};

export default User;
