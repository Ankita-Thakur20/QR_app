let form = document.querySelector("form");
let input = document.querySelector("input");
let select = document.querySelector("select");
let img = document.querySelector("img");

const getQr = async (e) => {
  e.preventDefault();
  const response = await fetch(
    `https://api.qrserver.com/v1/create-qr-code/?size=${select.value}&data=${input.value}`
  );
  img.setAttribute("src", response.url);
};

form.addEventListener("submit", getQr);
