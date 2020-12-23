# Landing Page Project

## About Project:
#### this project is a multi-section landing page,with a dynamically updating navigational menu based on the amount of content that is added to the page.

## Project Features:
* Navigation is built dynamically as an unordered list.
* The section that is in an active state is being viewed while scrolling through the page.
* When clicking an item from the navigation menu, the link should scroll to the appropriate section.

## About Code:
### Build the Nav:
#### to build the navbar i Make the following steps:
* use foreach to loop over all sections in my page, then 
* get the data-nav by using getAttribute method, 
* then create the following:
  - textNode by using createTextNode method to carry the linkText.
  - acnchor link by using createElement('a') to carry the textNode.
  - li by using createElement('li') to carry the anchor link.
* after the previous steps i append textNode to anchor link , then appending anchor link to li , then appending li to documentFragment , then appending documentFragment to the navbar list outside forEach because i declare documentFragment as a global Variable.
* after all of that we can see a dynamical navbar in the top of our page.

#### to move to any section by clicking on li related with it:
* I use ScrollIntoView to move the speccific section. 
* I use addEventListener to li to execute moveToSection once i click on li. 

#### to add active class to section and nav links:
* I use addEventListener to execute addActiveClass function on scroll.
* In addActiveClass Function:
  - use foreach to loop over all sections in my page.
  - use getBoundingClientRect method to get the top, bottom, right and left of each element , but in this i used top only.
  - then use if statement to check that if top of each section is between 2 specific values ,add active class to this section ,else remove it from all sections.
  - also in the same if statement I used querySelectorAll menthod to get all navbar links.
  - then check if navbar link is the same value of data-nav of section, add active class to link , else remove it from all sections.
