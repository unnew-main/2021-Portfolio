'use strict';

//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarBtn = document.querySelector('.navbar__toggle-btn')
const navbarHeight = navbar.getBoundingClientRect().height;
const navbarBtnHeight = navbarBtn.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    if(window.scrollY > navbarHeight/2){
        navbar.classList.add('navbar--dark');
        navbarBtn.classList.add('dark');
    }else{
        navbar.classList.remove('navbar--dark');
        navbarBtn.classList.remove('dark');
    }
});



const home = document.querySelector('.home__container');
const homeheight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    home.style.opacity = 1-window.scrollY/homeheight;
});




//handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
});


//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', ()=> {
    navbarMenu.classList.toggle('open');
});



//handle click on "contact me" button on home
const homecontactBtn = document.querySelector('.home__contact');
homecontactBtn.addEventListener('click', ()=>{
    scrollIntoView('#contact');
});

//scrollIntoView function
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

//arrowBtn scrolling
const arrowBtn = document.querySelector('.arrowBtn');
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeheight/2){
        arrowBtn.classList.add('dark');
    }else{
        arrowBtn.classList.remove('dark');
    }
});
arrowBtn.addEventListener('click', ()=>
    scrollIntoView('#home')
);


const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) return;

    //Remove Selection from the previous tiem and Select the new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');


    projectContainer.classList.add('anim-out');
    
    setTimeout(()=>{
        projects.forEach((project)=>{   //projects의 데이터들을 배열로 받음
            if(filter ==='*' || filter===project.dataset.type){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }
        });

        projectContainer.classList.remove('anim-out');
    },300);
});


