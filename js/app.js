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


/* Set Nav element with click event listener*/

function setElement(){
    for (let i = 0; i<navElements.length; ++i){
        setNavElement(i);
   }
}

/* Set section element to active when scroll to*/

function setScroll(){
    window.addEventListener("scroll", ()=> {
      
        for (let i=0; i<navElements.length; ++i){
            let elementScroll = document.getElementById('section'+(i+1));
            let buttonNav = document.getElementById("section_nav"+(i+1));
            if (isScrolledIntoView(elementScroll) ){
                elementScroll.classList.add("active");
                buttonNav.style.background = "orange";
               
            }
            else{
                elementScroll.classList.remove("active");
                buttonNav.style.background = "white";
            }
      
        }
      });
}

/*Helper funcion for setting the nav element*/

function setNavElement(i){
    let element = document.createElement('li');
    element.innerHTML="<button id=section_nav"+(i+1)+">Section "+(i+1)+"</button>";
    element.addEventListener("click", ()=> {
        let elementToScrollTo = document.getElementById('section'+(i+1));
        elementToScrollTo.scrollIntoView({ block: 'start',  behavior: 'smooth' });
        
      });
    navList.appendChild(element);
}

/* Function to check if the element is in view*/

function isScrolledIntoView(el){
    
        var rect = el.getBoundingClientRect();
    
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
        );
    
}



setElement();
setScroll();