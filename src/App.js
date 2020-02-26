import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: ""
    };
  }

  componetDidMount() {
    this.setData();
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleOnChange = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      fullName: e.target.value
    });
  };

  // local storage
  setData() {
    const { fullName } = this.state;
    console.log(this.state); 
    localStorage.setItem("fullName", JSON.stringify(fullName));
  }

  getData() {
    let data = localStorage.getItem("fullName");
    data = JSON.parse(data);
    console.log(data);
  }

  render() {
    const { fullName } = this.state;
    return (
      <div>
        <h1>React Forms and Input</h1>
        <p>Full name: {fullName}</p>
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>
            <input
              type="text"
              value={fullName}
              placeholder="your name"
              name="fullName"
              onChange={e => this.handleOnChange(e)}
            />
            {/* <button onClick={this.getData()}> Get Message </button> */}
            <button onClick={this.setData()}> Save </button>
          </p>
        </form>
      </div>
    );
  }
}

export default App;
