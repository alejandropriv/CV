// Some code thanks to @chrisgannon

var records_hide = ["C1","C2","C3",0,0,0]


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
  //hideFunction("cm3p")
});



