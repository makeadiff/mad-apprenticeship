var RM = (window.RM = window.RM || {});

window.RM.config = {
  root: "/apprenticeship/",
  pushState: true,
};

window.chunkURL = "/apprenticeship/dist/";

const customInit = function () {
  // Copy over these parameters...
  let redirect = "";

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  let loc = document.location.href;

  if (params.redirectTo) {
    redirect = params.redirectTo;

    redirect = decodeURI(redirect);
    Object.keys(params)?.forEach((key) => {
      if (!key?.includes("redirectTo")) {
        redirect = redirect + "&" + key + "=" + params[key];
      }
    });
  }

  if (redirect) {
    const anchors = document.getElementsByTagName("a");
    for (let i = 0; i < anchors.length; i++) {
      if (anchors[i].href.includes("/apprenticeship/")) {
        anchors[i].href = anchors[i].href + "?redirectTo=" + redirect;
        anchors[i].classList.remove("maglink");
      } else {
        anchors[i].href = redirect;
      }
    }
  }
};

window.addEventListener(
  "load",
  function () {
    setTimeout(() => {
      customInit();
    }, 500);
  },
  false
);
