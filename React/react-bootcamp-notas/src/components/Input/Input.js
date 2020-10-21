import React, { Component } from "react";
import style from "./style/style.module.css";

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstInput: null,
      secondInput: 0,
      thirthInput: 0,
      fourthInput: 0,
      fivethInput: 0,
    };
  }

  handleInputsChange = (event) => {
    this.setState({
      firstInput: event.target.value,
    });
    this.props.onInputChange();
  };

  /* handleInputsValue = () => {
    this.props.value();
  }; */

  render() {
    return (
      <div className={style.inputItem}>
        <label>
          Módulo 1 - Fundamentos (0 - 100)
          <input
            type="number"
            onInput={this.handleInputsChange}
            name="fundamentos"
            value={this.state.firstInput}
            min="0"
            max="100"
          />
        </label>
        <label>
          Módulo 2 - Angular (0 - 100)
          <input
            type="number"
            onInput={this.handleInputsChange}
            name="angular"
            value={this.secondInput}
            min="0"
            max="100"
          />
        </label>
        <label>
          Módulo 3 - React (0 - 100)
          <input
            type="number"
            onInput={this.handleInputsChange}
            name="react"
            value={this.thirthInput}
            min="0"
            max="100"
          />
        </label>
        <label>
          Módulo 4 - Vue (0 - 100)
          <input
            type="number"
            onInput={this.handleInputsChange}
            name="vue"
            value={this.firstInput}
            min="0"
            max="100"
          />
        </label>
        <label>
          Módulo 5 - Desafio Final (0 - 100)
          <input
            type="number"
            onInput={this.handleInputsChange}
            name="desafio"
            value={this.fivethInput}
            min="0"
            max="100"
          />
        </label>
      </div>
    );
  }
}
