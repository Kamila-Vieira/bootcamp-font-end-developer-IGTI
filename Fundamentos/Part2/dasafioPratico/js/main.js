window.addEventListener("load", () => {
  mappedDevs();
  createDevsCards();
  createStatistics();
});

const mapsDevs = () => {
  createDevsCards();
};

const filterDevs = () => {};

const searchDevs = () => {};

const createDevsCards = () => {
  const cardListContainer = document.querySelector("#cards-container");
  const cardList = document.createElement("ul");
  cardList.setAttribute("class", "card-list");
  const cardItem = document.createElement("li");
  cardItem.setAttribute("class", "card-item");

  cardListContainer.appendChild(cardList);
  cardList.appendChild(cardItem);
};

const createStatistics = () => {
  const statisticListContainer = document.querySelector(
    "#statistics-container"
  );
  const statisticList = document.createElement("ul");
  statisticList.setAttribute("class", "statistic-list");
  const statisticItem = document.createElement("li");
  statisticItem.setAttribute("class", "statistic-item");

  statisticListContainer.appendChild(statisticList);
  statisticList.appendChild(statisticItem);
};
