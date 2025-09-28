import { showSidebar } from './hamburgerMenu.js';
import { typeAnimation } from './typeAnimation.js';
import { intersectionObserver } from './intersectionObserver.js';
import { parallaxHero } from './parallaxHero.js';
import { cursor } from './cursor.js';
import './sendEmail.js';
import './animations.js';
import { load } from "./load.js";

async function main() {
  cursor();
  showSidebar();
  intersectionObserver();
  parallaxHero();
  window.emailjs.init('wWnGuI2THTyGsNtYt');
  await load()
  typeAnimation();
}

main();
