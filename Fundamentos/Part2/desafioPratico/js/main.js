"use strict";
// Variaveis de estado
let cardListContainer = null;
let onSelectRadioAnd = null;
let onSelectRadioOr = null;
let onSelectCheckJava = null;
let onSelectCheckJavascript = null;
let onSelectCheckPython = null;
let inputSearch = null;
let buttonSearch = null;
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
    const { language } = languages;
    const selectLanguage = () => {
      for (let i = 0; i < languages.length; i++) {
        return (languages[
          i
        ] = `<img src="./assets/img/language/${language}.png" alt="${language}">`);
      }
    };

    const selectedLanguage = selectLanguage(language);
    console.log(selectedLanguage);
    const cardHTML = `
      <div id="${id}" class="dev">
        <img src='${picture}' alt="${name}" class="avatar">  
        <div class="language-container">
          <h6>${name}</h6>
          <div class="language">
            ${selectedLanguage}
          </div>
        </div>
      </div>
    `;
    devsHTML += cardHTML;
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
  inputSearch = document.querySelector(".input-search");
  buttonSearch = document.querySelector(".button-search");
  let nameLowerCase = [];
  allDevs = allDevs.find((dev) => {
    const { name } = dev;
    nameLowerCase = name.toLowerCase().indexOf(name.toLowerCase()) > -1;
    function onButtonPress() {
      inputSearch.addEventListener("click");
      if (inputSearch.value === nameLowerCase) {
        return devsHTML;
      }
      return (countDevs.textContent = "0");
    }
    buttonSearch.addEventListener("press", onButtonPress);
  });
  console.log(nameLowerCase);
};
