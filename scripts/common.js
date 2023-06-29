/* global gsap */

export const common = {

  toggleNav() {
    document.querySelector('header').classList.toggle('expanded');
  },

  init() {
    window.scrollTo(0, 0);
    document.querySelector('header .menu').addEventListener('click', common.toggleNav);
    document.querySelector('header .inner').addEventListener('click', common.toggleNav);

    // hide loader, animate header
    setTimeout(() => {
      gsap.timeline(0).to('.loading', { duration: '0.4', opacity: 0 }).to('.loading', 0, { css: { display: 'none' } })
      gsap.to('#app', 0, { css: { visibility: 'visible' } });
      gsap.to('header', 0, { y: '-20rem', scaleY: 3 });
      gsap.to('#applynow', 0, { y: '20rem', easing: 'elastic' });
    }, 200);

    // disable current page in Nav
    document.querySelectorAll("header nav a").forEach(nav => {
      if (nav.href === document.location.href) {
        nav.classList.add("current");
      }
    })

    // Copy over these parameters...
    let redirect = "";

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    let loc = document.location.href;

    if(params.redirectTo) {
      redirect = params.redirectTo;

      redirect = decodeURI(redirect)
    }

    if(redirect) {
      const anchors = document.getElementsByTagName("a");
      for(let i=0; i<anchors.length; i++) {
        if(anchors[i].classList.contains('external')) continue; // Skip external links
        anchors[i].href = redirect;
      }

    }

  },

  showHeaderAndButton() {
    gsap
      .timeline(0)
      .to('header', {
        duration: 2,
        y: '0',
        scaleY: 1,
      })
      .to('.applynow', {
        duration: 1,
        ease: 'back',
        y: '0',
      });
  },



  /* Hide header on scroll */
  // let prevScrollpos = window.pageYOffset;
  // const headerEl = document.querySelector('header');
  // window.addEventListener(
  //   'scroll',
  //   () => {
  //     let currentScrollPos = window.pageYOffset;
  //     headerEl.style.top = prevScrollpos > currentScrollPos ? '0' : '-7rem';
  //     prevScrollpos = currentScrollPos;
  //   },
  //   false,
  // );

};
