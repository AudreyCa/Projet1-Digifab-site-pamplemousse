// Animation de la frise

const percentLabel = document.querySelector("#percent");
const originalTitle = document.title;
const frise = document.querySelector(".frise");
let oldpercentage = 0;
let translation = -.1;

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = scrollTop / (docHeight - winHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);

  if (oldpercentage > scrollPercentRounded) {
    console.log(scrollPercentRounded, translation, frise);

    translation++;
    frise.setAttribute("style", "transform:translateX(" + translation + "%);");
  }

  if (oldpercentage < scrollPercentRounded) {
    console.log(scrollPercentRounded, translation, frise);

    translation--;
    frise.setAttribute("style", "transform:translateX(" + translation + "%);");
  }

  oldpercentage = scrollPercentRounded;
});

// Animation paiment

let moins = document.querySelector(".moins");
let plus = document.querySelector(".plus");
let nombrePlaceInput = document.querySelector(".number");
let prixTotalInput = document.querySelector(".total");
let nombrePlace = 0;
let prixTotal = 0;

moins.addEventListener("click", function (e) {
  if (nombrePlace != 0) {
    nombrePlace--;
    nombrePlaceInput.value = nombrePlace;
    prixTotal -= 10;
    prixTotalInput.value = prixTotal;
  }
});

plus.addEventListener("click", function (e) {
  nombrePlace++;
  nombrePlaceInput.value = nombrePlace;
  prixTotal += 10;
  prixTotalInput.value = prixTotal;
});

// loupe

let search = document.querySelector(".loupe");
let loupe = document.querySelector(".loupe button");
let searchInput = document.querySelector(".loupe input");

loupe.onclick = function () {
  search.classList.toggle("active");
  searchInput.classList.toggle("active");
};

// Formulaire

let spanFormName = document.querySelector(".nom span");
let inputFormName = document.querySelector(".nom input");

inputFormName.onclick = function () {
  spanFormName.classList.add("active");
};

let spanFormMail = document.querySelector(".adMail span");
let inputFormMail = document.querySelector(".adMail input");

inputFormMail.onclick = function () {
  spanFormMail.classList.add("active");
};

let spanFormObjet = document.querySelector(".obj span");
let inputFormObjet = document.querySelector(".obj input");

inputFormObjet.onclick = function () {
  spanFormObjet.classList.add("active");
};

let spanFormMessage = document.querySelector(".msg span");
let inputFormMessage = document.querySelector(".msg textarea");

inputFormMessage.onclick = function () {
  spanFormMessage.classList.add("active");
};
