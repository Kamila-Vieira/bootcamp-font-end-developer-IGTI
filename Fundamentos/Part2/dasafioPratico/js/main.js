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
    const { id, name, picture, programmingLanguages } = dev;
    return {
      id,
      name,
      picture,
      languages: programmingLanguages,
    };
  });
  //console.log(languages);
  createDevCard();
};

const createDevCard = () => {
  cardListContainer = document.querySelector("#cards-container");
  let devsHTML = "<div class='devs'>";

  allDevs.forEach((dev) => {
    const { id, name, picture, languages } = dev;
    languages.forEach((lang) => {
      const { language } = lang;
    });
    //const { language } = languages;
    // const languageList = languages.id.join(", ");

    const cardHTML = `
      <div id="${id}" class="dev">
        <img src='${picture}' alt="${name}">  
        <div class="language-container">
          <h6>${name}</h6>
          <div class="language">
            <img src="./assets/img/language/java.png" alt="java">
            <img src="./assets/img/language/javascript.png" alt="javascript">
            <img src="./assets/img/language/python.png" alt="python">
          </div>
        </div>
      </div>
    `;
    devsHTML += cardHTML;
  });
  cardListContainer.innerHTML = devsHTML;
};

const filterDevs = () => {
  const filterAllDevs = allDevs.filter((dev) => {
    const { id, name, picture, languages } = dev;
    //console.log("filterDevs", languages);
  });

  const totalDevs = () => {
    counttotalDevs = document.querySelector("#total-devs");
    countDevs = document.querySelector("#count-devs");
    countDevs.textContent = filterAllDevs.length;
  };
  totalDevs();
};

const searchDevs = () => {
  allDevs.find((dev) => {
    const { id, name } = dev;
  });
};
