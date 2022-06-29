let frise1 = document.querySelector('.frise1');
let frise2 = document.querySelector('.frise2');



frise1.addEventListener('scroll', function(e) {
    frise1.style.transfrom = 'translateX(45%)';
    console.log(frise1);
});

frise2.addEventListener('scroll', function(e) {
    frise2.style.transform = 'translateX(-45%)';
    console.log(frise2);
});


// pour entrer le chiffre du nombre de place : Attention O ou +

// Attention : 