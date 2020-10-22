import React, { Component } from "react";
import style from "./style/style.module.css";
//import Notas from "../Notas/Notas";

export default class Input extends Component {
  handleInputsChange = (event) => {
    const { id } = this.props.currentGrades;
    const grade = Number.parseInt(event.target.value, 10) || 0;
    this.props.onGradeChange(grade, id);
  };

  render() {
    const { labelName, currentGrades } = this.props;
    const { grades } = currentGrades;
    return (
      <div className={style.inputItem}>
        <label>{labelName}</label>
        <input
          type="number"
          onInput={this.handleInputsChange}
          min="0"
          max="100"
          defaultValue={grades}
        />
      </div>
    );
  }
}
