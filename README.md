# PachaConf

This project is the event page for PachaConf where you can buy your tickets :)

# Investigacion UX
1. Users of this project are enviromental activists who want to attend a global conference in order to celebrate the international day of planet earth.
2. This project is meant to help to register the attendants in the virtual event.
3. First prototype
4. Feedback I have gotten
5. Image of final prototype

## TO DO
- [ ] Write tests
- [ ] Change innerHTML for textContent when not html needed.
- [ ] Check if inputs on the checkout view are filled, they are REQUIRED.
- [x] Validation form -> GET First Name, email, card encrypted.
- [ ] Center some elements.
- [ ] Enter Promo Code Interactivity.
- [x] Un título con el nombre de tu proyecto.
- [x] Un resumen de 1 o 2 líneas de qué se trata tu proyecto.
- [ ] La imagen final de tu proyecto.
- [ ] Investigación UX:
  - [x] Explicar quiénes son los usuarios y los objetivos en relación con el
    producto.
  - [x] Explicar cómo el producto soluciona los problemas/necesidades de dichos
    usuarios.
  - [ ] Luego colocarás la foto de tu primer prototipo en papel.
  - [ ] Agregar un resumen del feedback recibido indicando las mejoras a realizar.
  - [x] Imagen del prototipo final.

## Topics to check
- Is it responsive?
- Can we create the cart animation increase in numbers?
- Name vs Id wich one to use in forms
- min lenght 
- Card Generators (create a good one!)
- Section or Div?
- Where do I learn CSS? Udacity has a good starting point for responsiveness
- How do they create that small icon card to show in the input for card number
- Why do they not use the word function?
- JS events https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events (onclick vs addeventlistener)
- Why do they not use this keyword, why is not allowed in laboratoria?
- BIND concept in JS https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/

## New things learned
- Clear the float whenever you need to get a new line after a float:left
- If working with a forked repository you will probably want to add a new remote
  - git remote add upstream ULR_GIT_REPO
- If you need to list your remotes use:
  - git remote -v 
- TODO comments only work in programming languages (JS) and not for HTML (markup language)
- Chrome browser will recognize a credit card input if you use the the attribute name="cardNumber" or placeholder="Card Number*"
- Input pattern attribute only suggest when you over an input and wrote another thing to write the requested format.
- HTML5 discourages the use of type=text/javascript https://stackoverflow.com/questions/51418964/script-type-text-javascript-vs-script-type-module
- onclick is a bad practice https://www.simonewebdesign.it/onclick-vs-addeventlistener/
- repeat and slice methods for strings!

## Test with credit cards generated
bestccgen.com/bulkcardgenerator-result.php?network=visa&noc=20