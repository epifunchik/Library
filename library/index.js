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

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    span.classList.toggle('active');
    navMenu.classList.toggle('active');
    profileIcon.classList.toggle('active');
    if (navigation.classList.contains('active')){
        navigation.classList.remove('active');
        navigation.classList.toggle('hidden');
    }
    navigation.classList.add('active');
    navLink[0].classList.toggle('active');
    navLink[1].classList.toggle('active');
    navLink[2].classList.toggle('active');
    navLink[3].classList.toggle('active');
    navLink[4].classList.toggle('active');
   
    //navBurger.classList.toggle('hidden');
})

//navigation.addEventListener('click', function() {
//     menu.classList.toggle('active')
//     span.classList.toggle('active');
//     navigation.classList.add('hidden');
//     navLink[0].classList.toggle('active');
//     navLink[1].classList.toggle('active');
//     navLink[2].classList.toggle('active');
// })
console.log(navLink)
