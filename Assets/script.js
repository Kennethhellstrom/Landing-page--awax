slide = document.querySelector('.sliders');
point1 = document.querySelector('.pointer1');
point2 = document.querySelector('.pointer2');
point3 = document.querySelector('.pointer3');
function passslide1 (){
    slide.style.animationName = 'none' ;
    slide.style.marginLeft = "0";
    point2.classList.remove('on');
    point3.classList.remove('on');
    point1.classList.add('on');
}



function passslide2 (){
    slide.style.animationName = " " ;
    slide.style.marginLeft = "-101.25%";
    point3.classList.remove('on');
    point1.classList.remove('on');
    point2.classList.add('on');

}

function passslide3 (){
    slide.style.animationName = " " ;
    slide.style.marginLeft = "-202.62%";
    point2.classList.remove('on');
    point2.classList.remove('on');
    point3.classList.add('on');
}