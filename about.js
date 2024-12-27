const navicon=
Document. get Elementbyid('nav-icon')
const screensizeThreshold=768;
Window. addEventListener ('resize;()=>{ 
    if (window.innerWidth <= screensizeThreshold){
        navicon.classList.add('nav-icon-small-screen');
    } eles{
        navicon.classList.remove('nav-icon-small-screen');
    }
});