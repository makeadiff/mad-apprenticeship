var RM = (window.RM = window.RM || {});

window.RM.config = {
  root: '/apprenticeship/',
  pushState: true,
};

window.chunkURL = '/apprenticeship/dist/';

// Update all the Apply Now links to the URL specified in the query parameter `redirectTo`
const updateLinks = function () {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  if (params.redirectTo) {
    document.querySelectorAll('a.external-link').forEach((link) => {
      link.href = params.redirectTo;
    });
  }
};

const customInit = function () {
  updateLinks();

  // Add event listeners to all links with class 'maglink'(header links) to update links after navigation
  document.querySelectorAll('a.maglink').forEach((link) => {
    link.addEventListener('click', (e) => {
      setTimeout(() => {
        updateLinks();
      }, 200);
    });
  });
};

window.addEventListener(
  'load',
  function () {
    setTimeout(() => {
      customInit();
    }, 500);
  },
  false,
);
