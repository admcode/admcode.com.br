var html = document.querySelector("html");
html.className = html.className.replace(/\bno-js\b/, "js");
var wow = new WOW({
  boxClass: "animate-block",
  animateClass: "active",
  offset: 1,
  mobile: !0,
  live: !0
});
wow.init();
