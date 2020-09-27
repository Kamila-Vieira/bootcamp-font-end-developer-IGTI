"use strict";
// Variaveis de estado
let cardListContainer = null;
let onSelectRadioAnd = null;
let onSelectRadioOr = null;
let onSelectCheckJava = null;
let onSelectCheckJavascript = null;
let onSelectCheckPython = null;
let allDevs = [];
let languages = [];
let countDevs = 0;

window.addEventListener("load", async () => {
  await getDevsList();

  filterDevs();
  searchDevs();
});

const getDevsList = async () => {
  const res = await fetch("http://localhost:3001/devs");
  const json = await res.json();
  //console.log(json);
  allDevs = json.map((dev) => {
    const { id, name, picture, programmingLanguages } = dev;
    return {
      id,
      name,
      picture,
      languages: programmingLanguages,
    };
  });
  createDevCard();
};

const createDevCard = () => {
  cardListContainer = document.querySelector("#cards-container");
  let devsHTML = "<div class='devs'>";

  allDevs.forEach((dev) => {
    const { id, name, picture, languages } = dev;
    languages.forEach((lang) => {
      const { language } = lang;
      function selectLanguage(devLanguage) {
        switch (devLanguage) {
          case "Java":
            return "./assets/img/language/java.png";
          case "JavaScript":
            return "./assets/img/language/javascript.png";
          case "Python":
            return "./assets/img/language/python.png";
          default:
            return "Linguagem não encontrada!";
        }
      }
      const selectedLanguage = selectLanguage(language);
      const cardHTML = `
      <div id="${id}" class="dev">
        <img src='${picture}' alt="${name}" class="avatar">  
        <div class="language-container">
          <h6>${name}</h6>
          <div class="language">
            <p></p>
            <img src=${selectedLanguage} alt="java">
          </div>
        </div>
      </div>
    `;
      devsHTML += cardHTML;
    });
  });
  cardListContainer.innerHTML = devsHTML;
};

function checkedLanguages() {
  selectLanguage(language);
}

const filterDevs = () => {
  const filterDevsByLanguage = allDevs.filter((dev) => {
    const { id, name, picture, languages } = dev;
    onSelectCheckJava = document.querySelector("#java");
    onSelectCheckJavascript = document.querySelector("#javascript");
    onSelectCheckPython = document.querySelector("#python");
    onSelectRadioAnd = document.querySelector("#and");
    onSelectRadioOr = document.querySelector("#or");

    //onSelectCheckJava.addEventListener("checked", listener);
  });

  const totalDevs = () => {
    countDevs = document.querySelector("#count-devs");
    countDevs.textContent = filterDevsByLanguage.length || "0";
  };
  totalDevs();
};

const searchDevs = (name) => {
  //allDevs.find((dev) => dev.toLowerCase().indexOf(name.toLowerCase()) > -1);
};
