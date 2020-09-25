"use strict";
// Variaveis de estado
let cardListContainer = null;
let counttotalDevs = null;
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
    const { id, name, picture } = dev;
    return {
      id,
      name,
      picture,
      language,
    };
  });

  /* languages = json.programmingLanguages.map((eachLanguage) => {
    const { language } = eachLanguage;
    return { language };
  }); */
  createDevCard();
  totalDevs();
  console.log(allDevs);
};

const createDevCard = () => {
  cardListContainer = document.querySelector("#cards-container");
  let devsHTML = "<div class='devs'>";

  allDevs.forEach((dev) => {
    const { id, name, picture } = dev;

    //console.log(programmingLanguages);
    //let language = programmingLanguages.join(", ");

    /* const languages = (language) => {
      if (language === "java") {
        return "./assets/img/language/java.png";
      }
      if (language === "javascript") {
        return "./assets/img/language/javascript.png";
      }
      if (language === "python") {
        return "./assets/img/language/python.png";
      }
    }; */

    const cardHTML = `
      <div id="${id}">
        <img src='${picture}' alt="${name}">  
        <h6>${name}</h6>
        </div>`;
    devsHTML += cardHTML;
    //<img src"${languages(language)}" alt="linguagem">
  });
  cardListContainer.innerHTML = devsHTML;
};

const totalDevs = () => {
  counttotalDevs = document.querySelector("#total-devs");
  countDevs = document.querySelector("#count-devs");
};

const filterDevs = () => {
  allDevs.filter((dev) => {
    const { id, name, picture, programmingLanguages } = dev;
  });
};

const searchDevs = () => {
  allDevs.find((dev) => {
    const { id, name } = dev;
  });
};
