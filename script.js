let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let icon = document.querySelector(".icon");

function gap() {
  fetch(`https://api.adviceslip.com/advice`)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
      h1.textContent = '"' + data.slip.advice + "👍" + '"';
      yoz(data.slip);
    });

  function yoz(data) {
    let sum = `Advice # ${data.id}`;
    p.textContent = sum;
  }
}

function aylan(i) {
  document.querySelector(".dice").style.transform = `rotate(${i * 180}deg)`;
  document.querySelector(".dice").style.transition = "all 1s";
  console.log(i);
}
let i = 0;
icon.onclick = function () {
  i++;
  gap();
  aylan(i);
};

gap();
