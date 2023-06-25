const User = (props) => {
  const { login } = props.data;

  return (
    <div>
      <h2> Name: {login}</h2>
    </div>
  );
};

export default User;
