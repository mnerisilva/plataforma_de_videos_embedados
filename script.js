import { midia } from './api.js';

const iframe = document.querySelector('.right-side iframe');

const right_side_h4 = document.querySelector('.right-side h4');

let lista_lateral = document.querySelector('.left-side');

let _src = '';

let _tag = '';

midia.forEach(function(_midia){
    let elementUL = document.createElement('ul');      
    let elementLI = document.createElement('li');
    let elementH3 = document.createElement('h3');
    if(_tag != _midia.tag){
        elementH3.textContent = _midia.tag;
        lista_lateral.append(elementH3);
        _tag = _midia.tag
    } else {
        console.log('igual')
    }
    elementLI.setAttribute('data-id',_midia.id);
    elementLI.addEventListener('click', function(){
        let todas_li = document.querySelectorAll('.left-side li');
        todas_li.forEach(li => li.classList.remove('active'));
        const _this = this;
        _this.classList.add('active');
        console.log(this.dataset.id);
            _src = `https://www.youtube.com/embed/${ _midia.videos_playlist[0] }?playlist=${ _midia.videos_playlist.toString()}&enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer&amp;showinfo=0&amp;modestbranding=1&amp;fs=0&amp;cc_load_policy=1;showinfo=0;autohide=1;rel=0`;
        right_side_h4.textContent = _midia.title;
        iframe.setAttribute('src', _src)
    });
    elementLI.innerHTML = _midia.title;
    lista_lateral.append(elementUL);
    lista_lateral = document.querySelector('.left-side ul:last-child');
    lista_lateral.append(elementLI);
    
});

_src = `https://www.youtube.com/embed/${ midia[0].videos_playlist[0] }?playlist=${ midia[0].videos_playlist[0] }&enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer&amp;showinfo=0&amp;modestbranding=1&amp;fs=0&amp;cc_load_policy=1;showinfo=0;autohide=1;rel=0`;

iframe.setAttribute('src', _src)

console.log(midia);

