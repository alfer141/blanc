// hooks/useScrollCards.ts
'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function useScrollCards() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray<HTMLElement>('.scroll-card');

    ScrollTrigger.matchMedia({
      '(min-width: 768px)': function () {
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: '.scrolling-wrapper',
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => `+=${document.querySelector('.scrolling-wrapper')?.scrollWidth}`,
          },
        });
      },
    });
  }, []);
}
