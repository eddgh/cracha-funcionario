function printCard(){
    (function() {
      var element = document.getElementById("principal");
      var btnPrint = document.getElementById("print");
      var container = document.getElementById("card");
      
      var beforePrint = function() {
          console.log('Antes de imprimir...');
          btnPrint.classList.add("hide");
          element.classList.remove("center");
          element.classList.add("margin");
          document.body.classList.remove("beauty");
          container.classList.remove("box-shadow");
      };
  
      var afterPrint = function() {
          console.log('Depois de imprimir...');
          btnPrint.classList.remove("hide");
          element.classList.add("center");
          element.classList.remove("margin");
          document.body.classList.add("beauty");
          container.classList.add("box-shadow");
      };
  
      if (window.matchMedia) {
          var mediaQueryList = window.matchMedia('print');
          mediaQueryList.addListener(function(mql) {
              if (mql.matches) {
                  beforePrint();
              } else {
                  afterPrint();
              }
          });
      }
  
      window.onbeforeprint = beforePrint;
      window.onafterprint = afterPrint;  
  }());
    print();
}

function removeDashed(){
  var label = document.getElementById("label__picture");
    label.classList.remove("border");
}

// picture //
const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Escolha uma imagem";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
const inputTarget = e.target;
const file = inputTarget.files[0];

if (file) {
const reader = new FileReader();

reader.addEventListener("load", function (e) {
const readerTarget = e.target;

const img = document.createElement("img");
img.src = readerTarget.result;
img.classList.add("picture__img");

pictureImage.innerHTML = "";
pictureImage.appendChild(img);
});

reader.readAsDataURL(file);
} else {
pictureImage.innerHTML = pictureImageTxt;
}
});