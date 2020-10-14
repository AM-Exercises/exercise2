/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


const navElements = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');


function setElement(){
    for (let i = 0; i<navElements.length; ++i){
        setNavElement(i);

   }

}

//Helper funcion for setting the nav element

function setNavElement(i){
    let element = document.createElement('li');
    element.innerHTML="<button id=section_nav"+(i+1)+">Section "+(i+1)+"</button>";
    element.addEventListener("click", ()=> {
        let elementToScrollTo = document.getElementById('section'+(i+1));
        elementToScrollTo.scrollIntoView({ block: 'start',  behavior: 'smooth' });
        
      });
    navList.appendChild(element);
}


setElement();
