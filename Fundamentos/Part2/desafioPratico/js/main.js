"use strict";
// Variaveis de estado
let cardListContainer = null;
let radioElements = null;
let radioElementsChecked = null;
let checkboxesElements = null;
let inputElement = null;
let allDevs = [];
let languages = [];
let countDevs = 0;
let filteredLanguages = [];
let valueToSearch = "";

window.addEventListener("load", async () => {
  getFilterElements();
  await fetchDevs();
  addEvent();
});

function getFilterElements() {
  inputElement = document.querySelector(".input-search");
  radioElements = document.querySelectorAll("[name=radio-option]");
  checkboxesElements = document.querySelectorAll("[name=language-types]");
  radioElementsChecked = document.querySelectorAll(
    "[name=language-types]:checked"
  ).id;
  checkboxesElements.forEach((language) =>
    language.checked ? filteredLanguages.push(language.id) : null
  );
}

function removeAccentsAndSpaces(name) {
  return name.normalize("NFD").replace(/[^a-zA-Zs]/g, "");
}

const fetchDevs = async () => {
  const res = await fetch("http://localhost:3001/devs");
  const json = await res.json();
  allDevs = json.map((dev) => {
    const { id, name, picture, programmingLanguages } = dev;
    const nameLowerCase = name.toLowerCase();
    const nameToSearch = removeAccentsAndSpaces(nameLowerCase);
    return {
      id,
      name,
      nameToSearch,
      picture,
      programmingLanguages,
    };
  });

  allDevs = allDevs.map((dev) => {
    const { id, name, nameToSearch, picture, programmingLanguages } = dev;
    const languagesTypes = [];
    const programmingLanguageIcons = [];
    programmingLanguages.forEach((languages) => {
      const { language, experience, id } = languages;
      const idLowerCase = id.toLowerCase();
      languagesTypes.push(language.toLowerCase());
      switch (language) {
        case "Java":
          programmingLanguageIcons.push({
            idLowerCase,
            language,
            experience,
            icon: "./assets/img/language/java.png",
          });
          break;
        case "JavaScript":
          programmingLanguageIcons.push({
            idLowerCase,
            language,
            experience,
            icon: "./assets/img/language/javascript.png",
          });
          break;
        case "Python":
          programmingLanguageIcons.push({
            idLowerCase,
            language,
            experience,
            icon: "./assets/img/language/python.png",
          });
          break;
        default:
          break;
      }
    });
    return {
      id,
      name,
      nameToSearch,
      picture,
      languagesTypes,
      programmingLanguageIcons,
    };
  });
  createDevCard(allDevs);
};

const createDevCard = (devCard) => {
  cardListContainer = document.querySelector("#cards-container");
  let devsHTML = "<div class='devs'>";
  countDevs = document.querySelector("#count-devs");

  if (devCard === null) {
    countDevs.textContent = "0";
  } else {
    devCard.forEach((dev) => {
      const { id, name, picture, programmingLanguageIcons } = dev;
      let languages = "";
      programmingLanguageIcons.forEach(({ icon, language }) => {
        languages = `${languages} <img class='language-icon' src="${icon}" alt="${language}"></img>`;
      });
      const cardHTML = `
        <div id="${id}" class="dev">
          <img src='${picture}' alt="${name}" class="avatar">  
          <div class="language-container">
            <h6>${name}</h6>
            <div class="language">
              ${languages}
            </div>
          </div>
        </div>
      `;
      devsHTML += cardHTML;
    });
    cardListContainer.innerHTML = devsHTML;
    countDevs.textContent = devCard.length;
  }
};

function addEvent() {
  inputElement.addEventListener("input", handleKeyUp);
  checkboxesElements.forEach((checkBoxElement) => {
    checkBoxElement.addEventListener("input", checkedLanguages);
  });
  radioElements.forEach((radioElement) => {
    radioElement.addEventListener("input", checkedRadios);
  });
}

const filterDevs = () => {
  let filteredDevs = [];
  const filterTextLowerCase = valueToSearch.toLocaleLowerCase();
  filteredDevs = allDevs.filter((dev) => {
    return dev.nameToSearch.includes(filterTextLowerCase);
  });
  filteredDevs = filteredDevs.filter((dev) => {
    return radioElementsChecked === "or"
      ? filteredLanguages.some((item) => dev.languagesTypes.includes(item))
      : dev.languagesTypes.join("") === filteredLanguages.join("");
  });
  createDevCard(filteredDevs);
};

function handleKeyUp(event) {
  valueToSearch = event.target.value;
  filterDevs();
}

function checkedLanguages() {
  filteredLanguages = [];
  const checkboxesElementsCheck = document.querySelectorAll(
    "[name=language-types]:checked"
  );
  checkboxesElementsCheck.forEach(({ id }) => {
    filteredLanguages.push(id);
  });
  filterDevs();
}

function checkedRadios(event) {
  radioElementsChecked = event.target.id;
  filterDevs();
}
