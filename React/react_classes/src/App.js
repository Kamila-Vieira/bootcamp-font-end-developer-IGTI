import React, { Component } from "react";
//import ProjetoBase from "./components/ProjetoBase/ProjetoBase";
import { formatedDate } from "./helpers/formatDateAndTime";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      clickArray: [],
    };
  }

  handleButtonClick = () => {
    const newClickArray = Object.assign([], this.state.clickArray);
    newClickArray.push(formatedDate());
    this.setState({ clickArray: newClickArray });
  };

  componentDidUpdate() {
    document.title = this.state.clickArray.length.toString();
  }

  render() {
    const { clickArray } = this.state;
    return (
      <div>
        <h4>
          React e <em>Class Components</em>
        </h4>
        <button onClick={this.handleButtonClick}>Clique-me!</button>
        <ul>
          {clickArray.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
