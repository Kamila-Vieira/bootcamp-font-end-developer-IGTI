import React, { Component } from "react";
import Input from "./components/Input/Input";
import Notas from "./components/Notas/Notas";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allModules: [
        {
          id: 1,
          description: "Módulo 01 - Fundamentos (0 - 100)",
          grades: 100,
        },
        {
          id: 2,
          description: "Módulo 02 - Angular (0 - 100)",
          grades: 100,
        },
        {
          id: 3,
          description: "Módulo 03 - React (0 - 100)",
          grades: 100,
        },
        {
          id: 4,
          description: "Módulo 04 - Vue (0 - 100)",
          grades: 100,
        },
        {
          id: 5,
          description: "Módulo 05 - Desafio Final (0 - 100)",
          grades: 100,
        },
      ],
      totalGrades: 0,
      averagePercentage: true,
    };
  }

  componentDidMount() {
    this.calculatedGrades();
  }

  handleChangeGrade = (grade, index) => {
    const { allModules } = this.state;
    allModules.map((eachModule) => {
      if (eachModule.id === index) {
        eachModule.grades = grade;
      }
      return eachModule;
    });
    this.calculatedGrades();
  };

  calculatedGrades = () => {
    const { allModules } = this.state;
    let totalGrades = allModules.reduce((acc, cur) => {
      return acc + cur.grades;
    }, 0);
    let validateAveragePercentage = allModules.find((item) => {
      return item.grades < 60;
    });
    this.setState({
      totalGrades,
      averagePercentage: validateAveragePercentage ? false : true,
    });
  };

  render() {
    const { allModules, totalGrades, averagePercentage } = this.state;
    return (
      <>
        <h4>Notas BootCamp</h4>
        <div className="main_app">
          <div>
            {allModules.map((currentGrades) => {
              const { id, description } = currentGrades;
              return (
                <div key={id}>
                  <Input
                    labelName={description}
                    currentGrades={currentGrades}
                    onGradeChange={this.handleChangeGrade}
                  />
                </div>
              );
            })}
          </div>
          <Notas
            allModules={allModules}
            totalGrades={totalGrades}
            averagePercentage={averagePercentage}
          />
        </div>
      </>
    );
  }
}
