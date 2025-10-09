"use strict";
console.log('JavaScript is running.');

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

/**menu.classList.add('hidden');
let header = document.querySelector('header');
let menu = document.querySelector('menu');
let menuToggle = document.createElement('nav-button');

menu.setAttribute('Aria-hidden', 'true');
menu.setAttribute('aria-labbelledby', 'menu-toggle');

menuToggle.classList.add('nav-button');
menuToggle.setAttribute('id', 'menu-toggle');

menuToggle.innerHTML = 'Dropdown navigation';
menuToggle.setAttribute('aria-label', 'Main menu');
menuToggle.setAttribute('aria-controls', 'menu');
menuToggle.setAttribute('aria-expanded', 'false');

header.insertBefore(menuToggle, menu);

menuToggle.addEventListener('click', function() {
  console.log('MenuToggle has been clicked');
  if (menu.classList.contains('hidden')) {
    console.log('Menu is hidden, showing the menu');
    menu.classList.remove('hidden');
    menu.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    this.innerHTML = 'Close dropdown';
  }

  else {
    console.log('Menu is shown, hiding the menu');
    menu.classList.add('hidden');
    menu.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    this.innerHTML = 'Dropdown navigation';
  }
})**/

hamburger.setAttribute('aria-label', 'hamburger-icon');
hamburger.setAttribute('aria-controls', 'menu');
hamburger.setAttribute('aria-expanded', 'false');

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  
  if (hamburger.classList.contains('active')) {
    console.log('Hamburger menu is active');
    navMenu.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-hidden','false');
    hamburger.setAttribute('aria-expanded', 'true');
  }

  else {
    console.log('Hamburger menu is closed');
    navMenu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
  }
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
  console.log('Hamburger menu is closed');
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  navMenu.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
}))

const buttons = document.querySelectorAll("[data-slider-button]")

buttons.forEach(button => {
  button.addEventListener("click", () =>{
    const offset = button.dataset.sliderButton === "next" ? 1  :-1
    
    const slides = button
      .closest("[data-slider]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset

    if (newIndex < 0) newIndex = slides.children.length -1

    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

  