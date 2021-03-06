import { midia } from './api.js';

const iframe = document.querySelector('.right-side iframe');

const right_side_h4 = document.querySelector('.right-side h4');

let lista_lateral = document.querySelector('.left-side');

let instrucao = document.querySelector('.instrucao');

let _src = '';

let _tag = '';

let todas_li = '';

midia.forEach(function(_midia){
    let elementUL = document.createElement('ul');      
    let elementLI = document.createElement('li');
    let elementH4 = document.createElement('h4');
    if(_tag != _midia.tag){
        lista_lateral = document.querySelector('.left-side');
        elementH4.textContent = _midia.tag;
        lista_lateral.append(elementH4);       
        elementUL.append(elementLI);
        lista_lateral.append(elementUL);
        _tag = _midia.tag
    } else {
        lista_lateral = document.querySelector('.left-side ul:last-child');        
        lista_lateral.append(elementLI);
        console.log('igual')
    }
    elementLI.setAttribute('data-id',_midia.id);
    elementLI.innerHTML = _midia.title;
    elementLI.addEventListener('click', function(){
        todas_li = document.querySelectorAll('.left-side li');
        todas_li.forEach(li => li.classList.remove('active'));
        const _this = this;
        _this.classList.add('active');
        console.log(this.dataset.id);
            _src = `https://www.youtube.com/embed/${ _midia.videos_playlist[0] }?playlist=${ _midia.videos_playlist.toString()}&enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer&amp;showinfo=0&amp;modestbranding=1&amp;fs=0&amp;cc_load_policy=1;showinfo=0;autohide=1;rel=0`;
        right_side_h4.textContent = _midia.title;
        iframe.setAttribute('src', _src)
    });    
});

todas_li = document.querySelectorAll('.left-side li');
todas_li[0].classList.add('active');

_src = `https://www.youtube.com/embed/${ midia[0].videos_playlist[0] }?playlist=${ midia[0].videos_playlist.toString() }&enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer&amp;showinfo=0&amp;modestbranding=1&amp;fs=0&amp;cc_load_policy=1;showinfo=0;autohide=1;rel=0`;

iframe.setAttribute('src', _src)

let _instrucao = '';

console.log('xx: ' + midia[0].videos_playlist.length);
if(midia[0].videos_playlist.length > 1){
    instrucao.style.display = 'block';
    midia[0].videos_playlist.forEach(function(item){
        _instrucao = _instrucao + `<li><a href="">${item}</a></li>`
        instrucao.innerHTML = _instrucao;
    });   
}
console.log(midia);

