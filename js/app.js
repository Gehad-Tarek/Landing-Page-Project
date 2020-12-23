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

/**
 * Define Global Variables
 * 
 */
const Page_Sections = document.querySelectorAll("section"),
    Nav_Links = document.getElementById("navbar__list");
let documentFragment = document.createDocumentFragment();
/**
 * End Global Variables
 *
 */


// build the nav
Page_Sections.forEach(section => {
    let linkText = section.getAttribute('data-nav'),
        textNode = document.createTextNode(linkText),
        anchorLink = document.createElement('a'),
        li = document.createElement('li');

    anchorLink.appendChild(textNode);
    li.appendChild(anchorLink);
    documentFragment.appendChild(li);

    li.addEventListener("click", moveToSection);

    function moveToSection() {
        section.scrollIntoView({ behavior: "smooth" });
    }
});
Nav_Links.appendChild(documentFragment);


// Add class 'Your-active-class' to section when near top of viewport
document.addEventListener("scroll", addActiveClass);

function addActiveClass() {
    Page_Sections.forEach((section) => {
        let rect = section.getBoundingClientRect();

        if (rect.top >= 0 && rect.top <= 450) {
            section.classList.add('your-active-class');

            //put ul(Nav_links) into an object nodelist to loop over it
            let links = Nav_Links.querySelectorAll("li");

            // Add class 'Your-active-link' to link that related with the active section
            links.forEach((link) => {
                if (link.textContent === section.getAttribute('data-nav')) {
                    link.classList.add('Your-active-link');
                } else {
                    link.classList.remove('Your-active-link');
                }
            });

        } else {
            section.classList.remove('your-active-class')
        };

    })
}