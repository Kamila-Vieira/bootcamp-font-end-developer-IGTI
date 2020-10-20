window.addEventListener("load", start);

var clickArray = [];

function start() {
  const button = document.querySelector("#clickButton");
  button.addEventListener("click", handleButtonClick);
}

function handleButtonClick() {
  var itemFormated = formatedDate();
  clickArray.push(itemFormated);
  showList(itemFormated);
}

function showList(itemFormated) {
  var list = document.querySelector("#listContainer");
  var listItem = document.createElement("li");
  listItem.textContent = itemFormated;
  list.appendChild(listItem);
  document.title = clickArray.length;
}

function letPad(value, count = 2, char = "0") {
  var stringValue = value.toString();
  var newValue = value;
  if (stringValue.length < count) {
    for (var i = 0; i < count - stringValue.length; i++) {
      newValue = char + stringValue;
    }
  }
  return newValue;
}

function formatedDate() {
  var now = new Date();
  var result = "";
  result += letPad(now.getDate());
  result += "/";
  result += letPad(now.getMonth() + 1);
  result += "/";
  result += now.getFullYear();
  result += " ";
  result += letPad(now.getHours());
  result += ":";
  result += letPad(now.getMinutes());
  result += ":";
  result += letPad(now.getSeconds());
  result += ".";
  result += letPad(now.getMilliseconds(), 3);

  return result;
}
