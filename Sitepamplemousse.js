// Animation de la frise

const percentLabel = document.querySelector("#percent");
const originalTitle = document.title;
const frise = document.querySelector(".frise");
let oldpercentage=0;
let translation = -0.1;

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = scrollTop / (docHeight - winHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);

  if (oldpercentage > scrollPercentRounded){
  console.log(scrollPercentRounded,translation,frise);

  translation ++;
  frise.setAttribute('style','transform:translateX('+translation+'%);') ;
  } 

  if (oldpercentage < scrollPercentRounded){
    console.log(scrollPercentRounded,translation,frise);
  
    translation --;
    frise.setAttribute('style','transform:translateX('+translation+'%);') ;
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



moins.addEventListener('click', function(e) {
    if (nombrePlace != 0) {
      nombrePlace --;
      nombrePlaceInput.value = nombrePlace;
      prixTotal -= 10;
      prixTotalInput.value = prixTotal;
    }
});

plus.addEventListener('click', function(e) {
  nombrePlace ++;
  nombrePlaceInput.value = nombrePlace;
  prixTotal += 10;
  prixTotalInput.value = prixTotal;
});

