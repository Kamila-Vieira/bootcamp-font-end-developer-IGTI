import React, { Component } from "react";
import style from "./style/style.module.css";
import {
  calculateTotalAverageGrades,
  formatPercent,
} from "../../helpers/calculateGrades";
export default class Notas extends Component {
  render() {
    const { allModules, totalGrades, averagePercentage } = this.props;
    return (
      <div>
        <div className={style.main}>
          <div className={style.grades_container}>
            <div className={style.grade_Item}>
              <p>Nota total: </p>
              <span>{totalGrades}</span>
            </div>
            <div className={style.grade_Item}>
              <p>Percentual total:</p>
              <span>
                {formatPercent(
                  calculateTotalAverageGrades(totalGrades, allModules.length) /
                    100
                )}
              </span>
            </div>
            <div className={style.grade_Item}>
              <p>Aprovado pela média (60%)?</p>
              <span>
                {averagePercentage ? (
                  <span className={style.approved}>Sim</span>
                ) : (
                  <span className={style.disapproved}>Não</span>
                )}
              </span>
            </div>
            <div className={style.grade_Item}>
              <p>Aprovação pelo percentual total (70%)?</p>
              <span>
                {calculateTotalAverageGrades(totalGrades, allModules.length) >=
                70 ? (
                  <span className={style.approved}>Sim</span>
                ) : (
                  <span className={style.disapproved}>Não</span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
