'use strict';
const documentReady = () => {

    const iconSearch = document.getElementById('iconSearch');
    const inputSearch = document.getElementById('inputSearch');
    const logoContainer = document.getElementById('logoContainer');
    const header = document.getElementById('header');
    const itemGallery = [...document.querySelectorAll('.gallery__item')];
    
    const windowScroll = () => {
    header.classList.toggle('header--scroll', window.scrollY > 0);
    };
    window.addEventListener('scroll', windowScroll);

    const inputOn = () => {
        inputSearch.classList.toggle('input--on');
    }
    
    iconSearch.addEventListener('click',inputOn);

    window.onresize = () => {
        logoContainer.classList.toggle('logo--off', window.innerWidth < 700);
    }

    const inputItemGallery = (input, observe)=> {
        input.forEach(input => {
            if(input.isIntersecting){
                input.target.classList.add('gallery__item--input');
            }
        });
    }
    const observer = new IntersectionObserver(inputItemGallery, {
        root:null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.1
    });

    itemGallery.forEach(element => {
        observer.observe(element);
    })

    
}
document.addEventListener('DOMContentLoaded', documentReady);
