function printCard() {
  (function () {
    var element = document.getElementById("principal");
    var btnPrint = document.getElementById("print");
    const container = document.querySelector("#card");
    var boxes = document.querySelectorAll(".box");

    var beforePrint = function () {
      console.log("Antes de imprimir...");
      btnPrint.classList.add("hide");
      element.classList.remove("center");
      element.classList.add("margin");
      document.body.classList.remove("beauty");
      container.classList.remove("box-shadow");

      boxes.forEach(box => {
        box.classList.add("printer");
      });
    };

    var afterPrint = function () {
      console.log("Depois de imprimir...");
      btnPrint.classList.remove("hide");
      element.classList.add("center");
      element.classList.remove("margin");
      document.body.classList.add("beauty");
      container.classList.add("box-shadow");

      boxes.forEach(box => {
        box.classList.remove("printer");
      });
    };

    if (window.matchMedia) {
      var mediaQueryList = window.matchMedia("print");
      mediaQueryList.addListener(function (mql) {
        if (mql.matches) {
          beforePrint();
        } else {
          afterPrint();
        }
      });
    }

    window.onbeforeprint = beforePrint;
    window.onafterprint = afterPrint;
  })();
  print();
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
    document.getElementById("label__picture").classList.remove("border");
  } else {
    reader.readAsDataURL(file);
    pictureImage.innerHTML = pictureImageTxt;
  }
});
