/* global gsap */

import { common } from './common.js';

function handleResponse(ret) {
  document.querySelector("#loading").style.display = 'none';
  if (ret.status === "fail") {
    document.querySelector("#form").style.display = 'block';
    var message = "<h3>Some issues were encountered when trying to add you to our database...</h3><ul>";
    for (var i in ret.data) {
      message += "<li>" + ret.data[i] + "</li>";
    }
    message += "</ul>";
    document.querySelector("#result").innerHTML = message;
  } else if (ret.status == "success") {
    document.querySelector("#result").innerHTML = "<h3>You have been added to our database!</h3><p>You are one step closer to becoming a MADster! </p><p>The journey starts here. Your next step is to participate in a 4 day MAD trivia to get to know MAD better. This will hit your inbox starting tomorrow. Watch out and participate! All the best. </p><p>We look forward to having you as a part of our family.</p>";
    document.querySelector("#sticky-apply-now").style.display = 'none';
  }
  document.querySelector("#result").scrollIntoView();
}

function submitForm(e) {
  e.preventDefault();
  document.querySelector("#loading").style.display = 'block';
  document.querySelector("#form").style.display = 'none';

  const formData = new FormData(e.target);
  console.log(formData);

  const formDataJson = JSON.stringify(Object.fromEntries(formData));
  console.log(formDataJson);

  const API = 'https://mad2020.free.beeceptor.com/success'; // success case
  // const API = 'https://mad2020.free.beeceptor.com/fail'; // fail case
  // const API =  e.target.action; // production

  fetch(API, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: formDataJson
  })
    .then(response => response.json())
    .then(data => handleResponse(data));
};




/* Show page when ready */
function onReady() {
  var campaign_id = "";
  var loc = document.location.href;
  if (loc.match(/\?c=/)) {
    campaign_id = loc.replace(/.+\?c=(.+)/, "$1");
  }
  if (campaign_id) {
    document.querySelector("#campaign").value = campaign_id;
  }

  document.getElementById('form').addEventListener('submit', submitForm);
  common.init();
  common.showHeaderAndButton();
}

window.onload = function () {
  onReady();
};

