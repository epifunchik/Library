//console.log('100: Вёрстка валидная +10\nВёрстка семантическая +16\nВёрстка соответствует макету +54\n(блок <header> +8\nсекция Welcome +4\nсекция About +6\nсекция Favorites +8\nсекция CoffeShop +6\nсекция Contacts +6\nсекция LibraryCard +8\nблок <footer> +8)\nОбщие требования к верстке +20')
1


//    menu burger


const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');
const profileIcon = document.querySelector('.profile-icon');
const navigation = document.querySelector('.nav-menu-sections');
const span = document.querySelector('span');
const navLink = document.querySelectorAll('.nav-menu-link');
const welcomeContainer = document.querySelector('.welcome-container');

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    span.classList.toggle('active');
    navMenu.classList.toggle('active');
    profileIcon.classList.toggle('active');
    navigation.classList.toggle('active');
    navLink[0].classList.toggle('active');
    navLink[1].classList.toggle('active');
    navLink[2].classList.toggle('active');
    navLink[3].classList.toggle('active');
    navLink[4].classList.toggle('active');
})

navigation.addEventListener('click', function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    span.classList.toggle('active');
    navMenu.classList.toggle('active');
    profileIcon.classList.toggle('active');
    navigation.classList.toggle('active');
    navLink[0].classList.toggle('active');
    navLink[1].classList.toggle('active');
    navLink[2].classList.toggle('active');
    navLink[3].classList.toggle('active');
    navLink[4].classList.toggle('active');
})

welcomeContainer.addEventListener('click', function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    span.classList.toggle('active');
    navMenu.classList.toggle('active');
    profileIcon.classList.toggle('active');
    navigation.classList.toggle('active');
    navLink[0].classList.toggle('active');
    navLink[1].classList.toggle('active');
    navLink[2].classList.toggle('active');
    navLink[3].classList.toggle('active');
    navLink[4].classList.toggle('active');
})



//      slider about


const sliderAboutBtnContainer = document.querySelector('.about-btn-container');
const sliderAboutBtn = document.querySelectorAll('.about-btn');
const sliderAboutBtnArea = document.querySelectorAll('.about-btn-area');
const sliderAboutImg = document.querySelector('.about-img-container');
const sliderAboutWrapper = document.querySelector('.about-img-btn-wrapper');
const sliderImgAbout = document.querySelectorAll('.about-img');
let width = document.documentElement.clientWidth;
let step = 0;
// console.log(width, sliderImgAbout, sliderAboutBtnArea);

if (width > 1410){
    sliderAboutBtn[1].addEventListener('click', function(){
        sliderAboutImg.style.left = 470 + 'px';
        sliderAboutBtn[1].disabled = !sliderAboutBtn[1].disabled;
        sliderAboutBtnArea[1].disabled = !sliderAboutBtn[1].disabled;
        sliderAboutBtn[1].classList.remove('hover');
        sliderAboutBtnArea[1].classList.remove('hover');
        for(let i = 1; i < 4; i++){
            if(sliderAboutBtn[i] !== sliderAboutBtn[1]){
                sliderAboutBtn[i].classList.add('hover');
                sliderAboutBtnArea[i].classList.add('hover');
                sliderAboutBtn[i].disabled = false;
                sliderAboutBtnArea[i].disabled = false;
            }
        }
    })
    // .animate(timeAnimate)

    sliderAboutBtn[2].addEventListener('click', function(){
        sliderAboutImg.style.left = step + 'px'
        sliderAboutBtn[2].disabled = !sliderAboutBtn[2].disabled;
        sliderAboutBtnArea[2].disabled = !sliderAboutBtn[2].disabled;
        sliderAboutBtn[2].classList.remove('hover');
        sliderAboutBtnArea[2].classList.remove('hover');
        for(let i = 1; i < 4; i++){
            if(sliderAboutBtn[i] !== sliderAboutBtn[2]){
                sliderAboutBtn[i].disabled = false;
                sliderAboutBtnArea[i].disabled = false;
                sliderAboutBtn[i].classList.add('hover');
                sliderAboutBtnArea[i].classList.add('hover');

            }
        }
    })
    sliderAboutBtn[3].addEventListener('click', function(){
        sliderAboutImg.style.left = -470 + 'px'
        sliderAboutBtn[3].disabled = !sliderAboutBtn[3].disabled;
        sliderAboutBtnArea[3].disabled = !sliderAboutBtn[3].disabled;
        sliderAboutBtn[3].classList.remove('hover');
        sliderAboutBtnArea[3].classList.remove('hover');
        for(let i = 1; i < 4; i++){
            if(sliderAboutBtn[i] !== sliderAboutBtn[3]){
                sliderAboutBtn[i].classList.add('hover');
                sliderAboutBtnArea[i].classList.add('hover');
                sliderAboutBtn[i].disabled = false;
                sliderAboutBtnArea[i].disabled = false;
            }
        }
    })
}

const sliderAboutBtnArrowNext = document.querySelector('.about-arrow.next');
const sliderAboutBtnArrowPrev = document.querySelector('.about-arrow.prev');

// console.log(sliderAboutBtnArrowNext,sliderAboutBtnArrowPrev)

let i = 0
const slideNextAbout = () =>  {
    if(step > 1410){
        step = 1880;
        sliderAboutBtnArrowNext.classList.add('not-active');
    } 
    else
    {
        step = step + 470;
        i = Math.floor(step / 470);
        sliderAboutImg.style.left = -step + 'px'; 
        sliderAboutBtn[i].disabled = !sliderAboutBtn[i].disabled;
        sliderAboutBtnArea[i].disabled = !sliderAboutBtn[i].disabled;
        for(let j = 0; j < 4; j++){
            if(sliderAboutBtn[j] !== sliderAboutBtn[i]){
                sliderAboutBtn[j].disabled = false;
                sliderAboutBtnArea[j].disabled = false;
            }
        }
        sliderAboutBtnArrowPrev.classList.remove('not-active')
    }
}

const slidePrevAbout = () => {
    if(step < 470){
        step = 0;
        sliderAboutBtnArrowPrev.classList.add('not-active')
    } else{
            step = step - 470;
            i = Math.floor(step / 470)
            sliderAboutImg.style.left = -step + 'px'; 
            sliderAboutBtn[i].disabled = !sliderAboutBtn[i].disabled;
            sliderAboutBtnArea[i].disabled = !sliderAboutBtn[i].disabled;
            for(let j = 0; j < 5; j++){
                if(sliderAboutBtn[j] !== sliderAboutBtn[i]){
                    sliderAboutBtn[j].disabled = false;
                    sliderAboutBtnArea[j].disabled = false;
                }
            }
            sliderAboutBtnArrowNext.classList.remove('not-active')
    }
}

if (width < 1411){
    sliderAboutBtn[0].disabled = !sliderAboutBtn[0].disabled;
    sliderAboutBtnArea[0].disabled = !sliderAboutBtn[0].disabled;
    let i = 0
    sliderAboutBtnArrowNext.addEventListener('click', slideNextAbout)
    sliderAboutBtnArrowPrev.addEventListener('click', slidePrevAbout)
        console.log(step)
}

//    slider favorite

const sliderBtnFavorite = document.querySelectorAll('.favorite-season-choice-btn');
const sliderFavoriteBooksContainer = document.querySelectorAll('.favorite-books-container');
const booksWinter = [sliderFavoriteBooksContainer[0], sliderFavoriteBooksContainer[1], sliderFavoriteBooksContainer[2], sliderFavoriteBooksContainer[3]];
const booksSpring = [sliderFavoriteBooksContainer[4], sliderFavoriteBooksContainer[5], sliderFavoriteBooksContainer[6], sliderFavoriteBooksContainer[7]];
const booksSummer = [sliderFavoriteBooksContainer[8], sliderFavoriteBooksContainer[9], sliderFavoriteBooksContainer[10], sliderFavoriteBooksContainer[11]];
const booksAutumn = [sliderFavoriteBooksContainer[12], sliderFavoriteBooksContainer[13], sliderFavoriteBooksContainer[14], sliderFavoriteBooksContainer[15]];
// console.log(sliderBtnFavorite, sliderFavoriteBooksContainer, booksWinter)

const fadeIn = (el, timeout) => {
    for(let i = 0; i < el.length; i++){
        el[i].style.opacity = 1;
        el[i].style.transition = `opacity ${timeout}ms`;
    }
    setTimeout(() => {
        for(let i = 0; i < el.length; i++){
            el[i].style.display = 'block'
        }
    }, timeout);
  };

const fadeOut = (el, el1, el2, timeout) => {
    for(let i = 0; i < el.length; i++){
        el[i].style.opacity = 1;
        el[i].style.transition = `opacity ${timeout}ms`;
        el[i].style.opacity = 0;
        el1[i].style.opacity = 1;
        el1[i].style.transition = `opacity ${timeout}ms`;
        el1[i].style.opacity = 0;
        el2[i].style.opacity = 1;
        el2[i].style.transition = `opacity ${timeout}ms`;
        el2[i].style.opacity = 0;
    }
    setTimeout(() => {
        for(let i = 0; i < el.length; i++){
        el[i].style.display = 'none';
        el[i].style.transition = `opacity ${timeout}ms`;
        el1[i].style.display = 'none';
        el1[i].style.transition = `opacity ${timeout}ms`;
        el2[i].style.display = 'none';
        el2[i].style.transition = `opacity ${timeout}ms`;
        }
    }, timeout);
  };


let flag = false;

sliderBtnFavorite[1].addEventListener('click', (e) => {
 if (!flag) {
    fadeIn(booksSpring, 2000);
    flag = true;
  }
   else {
    fadeOut(booksAutumn, booksWinter, booksSummer, 2000);
    flag = false;
  }
});

sliderBtnFavorite[0].addEventListener('click', (e) => {
    if (!flag) {
      fadeIn(booksWinter, 2000);
      flag = true;
    }
     else {
      fadeOut(booksSpring, booksAutumn, booksSummer, 2000);
      flag = false;
    }
  });

  sliderBtnFavorite[2].addEventListener('click', (e) => {
    if (!flag) {
      fadeIn(booksSummer, 2000);
      flag = true;
    }
     else {
      fadeOut(booksSpring, booksAutumn, booksWinter, 2000);
      flag = false;
    }
  });

  sliderBtnFavorite[3].addEventListener('click', (e) => {
    if (!flag) {
      fadeIn(booksAutumn, 2000);
      flag = true;
    }
     else {
      fadeOut(booksSpring, booksWinter, booksSummer, 2000);
      flag = false;
    }
  });
  