let header = document.body.querySelector('header')


function movingHeader(event){

    if(event.taget != header) console.log('move');

    header.style.backgroundPositionX = (event.clientX - (header.clientWidth /2) ) /120 + 'px';
    header.style.backgroundPositionY = (event.clientY - (header.clientHeight /2) ) /120 + 'px';
}




document.body.onmousemove = movingHeader;