window.onload = function(){
  var bg = [
    "/images/gopher_ramen.png",
    "/images/gopher_niwaka.png"
  ];
  var r = Math.floor(Math.random() * bg.length);
  var el = document.getElementById("random");
  el.style.backgroundImage = "url(" + bg[r] + ")";
};
