/* **************************** MENU BURGER ************************************* */
var menu = document.getElementsByClassName('ouvrir')[0];
console.log(menu);
var maNav = document.getElementsByTagName('nav')[0];
console.log(maNav);


menu.addEventListener('click', afficheMenu);


function afficheMenu() {
    console.log('le click fonctionne');

    if (maNav.style.display == 'block') {
        maNav.style.display = 'none';
        menu.src = 'img/burger.png';
    } else {
        maNav.style.display = 'block';
        menu.src = 'img/close.png';
    }
}


/* **************************** HEADER QUI DEFILE  ************************************* */

//FONCTIONNE MAIS NE CHANGE PAS ... PEUT ETRE A CAUSE DU BACKGROUND IMAGE ...

/*var imgHeader = document.getElementsByTagName('header');
console.log(imgHeader);

var image = 0;


var temps = window.setInterval(changeImage, 2000);


function changeImage() {
    console.log('ça fonctionne')
    imgHeader.style.backgroundImage = 'img/background2.jpg';
}

*/



/* **************************** PETITE IMAGE ************************************* */

var imgs = document.getElementsByTagName('img')[3];
console.log(imgs);
var bt1 = document.getElementsByTagName('img')[2];
console.log(bt1);
var bt2 = document.getElementsByTagName('img')[4];
console.log(bt2);

var imgs2 = document.getElementsByTagName('img')[6];
console.log(imgs2);
var bt3 = document.getElementsByTagName('img')[5];
console.log(bt3);
var bt4 = document.getElementsByTagName('img')[7];
console.log(bt4);

var imgs3 = document.getElementsByTagName('img')[9];
console.log(imgs3);
var bt5 = document.getElementsByTagName('img')[8];
console.log(bt5);
var bt6 = document.getElementsByTagName('img')[10];
console.log(bt6);

var imgs4 = document.getElementsByTagName('img')[12];
console.log(imgs4);
var bt7 = document.getElementsByTagName('img')[11];
console.log(bt7);
var bt8 = document.getElementsByTagName('img')[13];
console.log(bt8);

var img = 1;



bt1.addEventListener('click', precedent);
bt2.addEventListener('click', suivant);
bt3.addEventListener('click', precedent1);
bt4.addEventListener('click', suivant1);
bt5.addEventListener('click', precedent2);
bt6.addEventListener('click', suivant2);
bt7.addEventListener('click', precedent3);
bt8.addEventListener('click', suivant3);



function suivant() {
    console.log('click et click');

        img += 1;

        if( img === 5 ){
                img = 1;
        }
        imgs.src = 'img/208/' + img + '.png';
    
}
function precedent() {
    console.log('click');
    img = img - 1;

    if( img === 0 ){
        img = 4;
    }

    imgs.src = 'img/208/' + img + '.png';
}


function suivant1() {
    console.log('click et click');

        img += 1;

        if( img === 5 ){
                img = 1;
        }
        imgs2.src = 'img/208/' + img + '.png';
    
}
function precedent1() {
    console.log('click');
    img = img - 1;

    if( img === 0 ){
        img = 4;
    }

    imgs2.src = 'img/208/' + img + '.png';
}


function suivant2() {
    console.log('click et click');

        img += 1;

        if( img === 5 ){
                img = 1;
        }
        imgs3.src = 'img/208/' + img + '.png';
    
}
function precedent2() {
    console.log('click');
    img = img - 1;

    if( img === 0 ){
        img = 4;
    }

    imgs3.src = 'img/208/' + img + '.png';
}


function suivant3() {
    console.log('click et click');

        img += 1;

        if( img === 5 ){
                img = 1;
        }
        imgs4.src = 'img/208/' + img + '.png';
    
}
function precedent3() {
    console.log('click');
    img = img - 1;

    if( img === 0 ){
        img = 4;
    }

    imgs4.src = 'img/208/' + img + '.png';
}
