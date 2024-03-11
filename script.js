
function navBar() {
    var menu = document.querySelector('.nav-res-container');
    var menuShow = document.querySelector('.nav-res-container.show')
    menu.classList.toggle('show');
    menuShow.style.maxHeight = menuShow.scrollHeight + "px";
}


// function hiddenNav() {
//     var navbar = document.querySelector('.nav-res-container')
//     if (window.innerWidth >= 780) {
//         console.log('d1')
//         if (navbar.style.display === 'block') {
//             console.log('d2')
//             navbar.style.display = 'none'
//         }
//     }
// }

// hiddenNav()