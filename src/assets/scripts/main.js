/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import { gsap } from "gsap";
import '@fortawesome/fontawesome-free/css/all.min.css';

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector('.site-header__toggle');
  const nav = document.querySelector('.site-header__nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('is-active');
    });
  }

  const overlayElements = document.querySelectorAll('.poster__overlay > *');
  if (overlayElements.length > 0) {
    gsap.from(overlayElements, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      delay: 0.5,
    });
  }

  gsap.to(".poster__logo img", {
    scale: 1.15,
    duration: 2.5,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  });

  gsap.to(".site-header__logo-img", {
    scale: 1.1,
    duration: 2.5,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  });

  const form = document.querySelector(".contact__form");
  if (form) {
    gsap.from(form, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from(".contact__form > *", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.4
    });
  }

});


