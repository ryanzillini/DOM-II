import "./less/index.less";

// Your code goes here!

window.onload = function (evt) {
  console.log(`event ${evt.type} fired and ready to go`);
  const heading = document.querySelector("h1");
  heading.textContent = "READY TO GO";

  window.addEventListener("copy", () => {
    navigator.clipboard.readText().then((text) => {
      console.log(text);
    });
  });
};

document.body.addEventListener("click", (evt) => {
  evt.target.classList.toggle("mirror");
});

document.body.addEventListener("dblclick", (evt) => {
  evt.target.outerHTML = "";
});

const destinations = document.querySelectorAll(".destination");
for (let destination of destinations) {
  destination.addEventListener("mouseenter", (evt) => {
    destination.style.fontWeight = "bold";
  });
  destination.addEventListener("mouseleave", (evt) => {
    destination.style.fontWeight = "";
  });
}

window.addEventListener("load", (evt) => {
  console.log(`hello, you are using ${evt.type}`);
});

const h2Headings = document.querySelectorAll("h2");
for (let headings of h2Headings) {
  headings.addEventListener("mouseover", (evt) => {
    headings.style.fontFamily = "Times New Roman";
  });
  headings.addEventListener("mouseleave", (evt) => {
    headings.style.fontFamily = "";
  });
}
window.addEventListener("resize", reportWindowSize);

const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}
