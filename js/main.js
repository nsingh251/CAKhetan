//Disclaimer Alert
function customAlert(message, title) {
  // Get the custom alert box
  var alertBox = document.getElementById("custom-alert");

  // Get the alert title and message elements
  var alertTitle = alertBox.querySelector(".alert-title");
  var alertMessage = alertBox.querySelector(".alert-message");

  // Set the alert title and message
  alertTitle.innerHTML = title || "Alert";
  alertMessage.innerHTML = message;

  // Show the alert box
  alertBox.style.display = "block";

  // Get the OK button element
  var okBtn = alertBox.querySelector(".main-btn");

  // Add a click event listener to the OK button
  okBtn.addEventListener("click", function () {
    alertBox.style.display = "none";
  });
}

// check if popup has already been shown this session
if (!sessionStorage.getItem('popupShown')) {
  // show the popup

  customAlert("The Institue of Chartered Accountants of India does not permit advertisement or solicitation by" +
    " practicing chartered accountants in any form or manner. By accessing this website, www.cakhetan.com, you" +
    " acknowledge and confirm that you are seeking information relating to Khetan Rajesh Kumar & Co. of your own" +
    " accord and that there has been no form of solicitation, advertisement or inducement by Khetan Rajesh Kumar & Co." +
    " or its team. The content of this website is for informational purposes only and should not be interpreted as" +
    " soliciting or advertisement. No material/information provided on this website should be construed as legal advice." +
    " Khetan Rajesh Kumar & Co. shall not be liable for consequences of any action taken by relying on the material/information" +
    " provided on this website. The contents of this website are the intellectual property of Khetan Rajesh Kumar & Co.", "Disclaimer");

  // set the flag variable to indicate that the popup has been shown
  sessionStorage.setItem('popupShown', 'true');
}


//Counter JS
(function (e) { "use strict"; e.fn.counterUp = function (t) { var n = e.extend({ time: 400, delay: 10 }, t); return this.each(function () { var t = e(this), r = n, i = function () { var e = [], n = r.time / r.delay, i = t.text(), s = /[0-9]+,[0-9]+/.test(i); i = i.replace(/,/g, ""); var o = /^[0-9]+$/.test(i), u = /^[0-9]+\.[0-9]+$/.test(i), a = u ? (i.split(".")[1] || []).length : 0; for (var f = n; f >= 1; f--) { var l = parseInt(i / n * f); u && (l = parseFloat(i / n * f).toFixed(a)); if (s) while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2"); e.unshift(l) } t.data("counterup-nums", e); t.text("0"); var c = function () { t.text(t.data("counterup-nums").shift()); if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay); else { delete t.data("counterup-nums"); t.data("counterup-nums", null); t.data("counterup-func", null) } }; t.data("counterup-func", c); setTimeout(t.data("counterup-func"), r.delay) }; t.waypoint(i, { offset: "100%", triggerOnce: !0 }) }) } })(jQuery); jQuery(document).ready(function ($) {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});


//Times visited JS
function websiteVisits(response) {
  document.querySelector("#visits").textContent = response.value;
}
