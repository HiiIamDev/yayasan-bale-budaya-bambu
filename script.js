const navBar = () => {
    var menu = document.querySelector('.nav-res-container');
    menu.classList.toggle('show');
}

function change(args) {
    var btn_1 = document.querySelector('.btn-1')
    var btn_2 = document.querySelector('.btn-2')
    var firstComponentGallery = document.querySelector('.gallery-list-1')
    var secComponentGallery = document.querySelector('.gallery-list-2')
    var componentActive = 1;

    if (args === '1') {
        btn_1.classList.add('act')
        btn_2.classList.remove('act')

        firstComponentGallery.classList.add('act')
        secComponentGallery.classList.remove('act')
        componentActive = 1;
    } else if (args === '2') {
        btn_2.classList.add('act')
        btn_1.classList.remove('act')

        firstComponentGallery.classList.remove('act')
        secComponentGallery.classList.add('act')
        componentActive = 2;
    }

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