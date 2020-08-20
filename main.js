'use strict';

const section_2 = document.getElementById('section_2');

for(let i=1; i<10; i++){
    let img = document.createElement('img');
    img.className = 'images';
    img.src = `images/image${i}.png`;
    section_2.appendChild(img);
}

const images = document.getElementsByClassName('images');
const main_image = document.getElementById('main_image');
main_image.width = window.innerWidth/2;
main_image.height = window.innerHeight*2/3;

for(let i=0; i<9; i++){
    images[i].addEventListener('click', ()=>{
        if(main_image.src != images[i].src){
            main_image.src = images[i].src;
        }
    })
}
