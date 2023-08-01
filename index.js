const numbers = [];
let timer = "";
const getRandomCoin = () => {
  const random = Math.floor(Math.random() * 100);
  if (random > 0 && !numbers.includes(random)) {
    return random;
  } else {
    return getRandomCoin();
  }
};

const createNumList = (num) => {
  const ndiv = document.createElement("div");
  const nlist = document.getElementById("numlist");
  ndiv.innerHTML = num;
  ndiv.classList.add("circle");
  nlist.appendChild(ndiv);
};

const startgame = () => {
  const num = getRandomCoin();
  var msg = new SpeechSynthesisUtterance();
  msg.text = `coin number ${num}`;
  window.speechSynthesis.speak(msg);
  window.speechSynthesis.speak(msg);
  const celement = document.getElementById("cnum");
  celement.innerHTML = num;
  numbers.push(num);
  createNumList(num);
  timer = setTimeout(() => {
    if (numbers.length <= 99) {
      startgame();
    }
  }, [10000]);
};

const stopGame = () => {
  clearInterval(timer);
};
