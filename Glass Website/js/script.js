let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
    sideBar.classList.toggle('active');
    searchBtn.classList.remove('active');
}

document.querySelector('#time').onclick = () =>{
sideBar.classList.remove('active');
}

let searchBtn = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchBtn.classList.toggle('active');
    sideBar.classList.remove('active');
}

window.onscroll = () => {
    searchBtn.classList.remove('active');
    sideBar.classList.remove('active');
}
