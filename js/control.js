// Some code thanks to @chrisgannon

//var records_hide = ["SK1"]
var records_hide = []


function hideFunction(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {

  records_hide.forEach(async (element) => {
    hideFunction(element);
  });
});



