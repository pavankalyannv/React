import React from "react";

class UserName extends React.Component {
  constructor(props) {
    console.log("First class construtor");
    super(props);

    this.state = {
      count: 0,
    };
  }

  async componentDidMount() {
    // On rendering the construtor-->render-->componentDidMount() will be called, mostly used for fetch data from API's.
    console.log(" Third class componenetDidMount ");

    const data = await fetch("https://api.github.com/users/uname");
    const json = await data.json();
    console.log(json);
    //  Best example for didMount and unMount using timeOut
    // const var = setTimeInterval(()=>{console.log('Interval')}, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // This will render everytime when some UI operation is happend
    console.log("Fourth  class componentDidUpdate ");

    // If we have multiple variables to update in state we need to add more conditions to validate like this and perform action as per that
    if (
      this.state.count !== prevState.count ||
      this.state.count1 !== prevState.count1
    ) {
      // some code
    }

    // In useEffect(()=>,[count, count1]) if we are passing 2 dependt fields we need to use sepearte if else in componentDidUpdate() -- very tough task 🫡
    if (this.state.count !== prevState.count) {
      // some code to update first depend field state
    }

    if (this.state.count1 !== prevState.count1) {
      // some code second depend field state
    }
  }

  componentWillUnmount() {
    // this will only run when we are switching the tabs mostly used for clean up activity example unsetTimeout(var);
    console.log("Fifth class componentWillUnmount ");
  }
  render() {
    console.log("Second class render");

    return (
      <div>
        <h1>Count {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Button
        </button>
      </div>
    );
  }
}

export default UserName;
