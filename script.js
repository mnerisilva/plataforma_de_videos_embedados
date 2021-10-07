import { midia } from './api.js';

const iframe = document.querySelector('.right-side iframe');

let lista_lateral = document.querySelector('.left-side');

let _src = '';

let _tag = '';

midia.forEach(function(_midia){
    //let midia_title = document.querySelector('.left-side ul');
    let elementUL = document.createElement('ul');      
    let elementLI = document.createElement('li');
    let elementH3 = document.createElement('h3');
    if(_tag != _midia.tag){
        //tag.textContent = _midia.tag;
        elementH3.textContent = _midia.tag;
        lista_lateral.append(elementH3);
        _tag = _midia.tag
    } else {
        console.log('igual')
    }
    elementLI.setAttribute('data-id',_midia.id);
    elementLI.addEventListener('click', function(){
        const _this = this;
        console.log(this.dataset.id);
            _src = `https://www.youtube.com/embed/${ _midia.videos_playlist[0] }?playlist=${ _midia.videos_playlist.toString()}&enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer&amp;showinfo=0&amp;modestbranding=1&amp;fs=0&amp;cc_load_policy=1;showinfo=0;autohide=1;rel=0`;
        iframe.setAttribute('src', _src)
    });
    elementLI.innerHTML = _midia.title;
    lista_lateral.append(elementUL);
    lista_lateral.append(elementLI);
    
});

_src = `https://www.youtube.com/embed/${ midia[0].videos_playlist[0] }?playlist=${ midia[0].videos_playlist[0] }&enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer&amp;showinfo=0&amp;modestbranding=1&amp;fs=0&amp;cc_load_policy=1;showinfo=0;autohide=1;rel=0`;

iframe.setAttribute('src', _src)
//midia_title.innerHTML =  `<li>${midia[0].title}</li>`;

console.log(midia);

