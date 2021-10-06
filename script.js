import { midia } from './api.js';

const iframe = document.querySelector('.right-side iframe');


midia.forEach(function(_midia){
    let midia_title = document.querySelector('.left-side ul a li');    
    let _innerHTML = midia_title.innerHTML;
    midia_title.innerHTML = _innerHTML + `<a href=""><li>${_midia.title}</li></a>`;
});

let _src = `https://www.youtube.com/embed/Ds1n6aHchRU?playlist=${ midia[0].videos_midia[0] }&enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer&amp;showinfo=0&amp;modestbranding=1&amp;fs=0&amp;cc_load_policy=1;showinfo=0;autohide=1;rel=0`;

iframe.setAttribute('src', _src)
//midia_title.innerHTML =  `<a href=""><li>${midia[0].title}</li></a>`;

console.log(midia);

