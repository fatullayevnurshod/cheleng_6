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

icon.onclick = function () {
  gap();
};

gap();
