import React, { Component } from "react";
import Input from "../Input/Input";
import style from "./style/style.module.css";

export default class Notas extends Component {
  constructor() {
    super();

    this.state = {
      totalGrades: 0,
      totalPercentage: 1,
      approvedByAverage: false,
      approvedByPercentage: false,
    };
  }

  calculateGrades = () => {
    /* this.setState({
      totalGrades: 5,
      totalPercentage: 1,
      approvedByAverage: true,
      approvedByPercentage: true,
    }); */
    console.log("Input alterado");
  };

  render() {
    const {
      totalGrades,
      totalPercentage,
      approvedByAverage,
      approvedByPercentage,
    } = this.state;

    return (
      <div className={style.main}>
        <div className="input-container">
          <Input onInputChange={this.calculateGrades} />
        </div>
        <div className={style.grades_container}>
          <div className={style.grade_Item}>
            <p>Nota total: </p>
            <span>{totalGrades}</span>
          </div>
          <div className={style.grade_Item}>
            <p>Percentual total:</p>
            <span>{totalPercentage}</span>
          </div>
          <div className={style.grade_Item}>
            <p>Aprovado pela média (60%)?</p>
            <span>{approvedByAverage}</span>
          </div>
          <div className={style.grade_Item}>
            <p>Aprovação pelo percentual total (70%)?</p>
            <span>{approvedByPercentage}</span>
          </div>
        </div>
      </div>
    );
  }
}
