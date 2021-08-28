// const accessKey = XDrt9AWBaLVKnJ4ncHbkLOIJxR1RYB-onCdFkL8qZ_g;
// const image = document.querySelector("")
const nav = () => {
  const burger = document.querySelector(".burger");
  const navbar = document.querySelector(".nav-links");
  const navlinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    navbar.classList.toggle("nav-active");

    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navlinkfade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    burger.classList.toggle("tog");
  });
};

nav();

// var searchItem;
// function SearchPhotos() {
//   searchItem = document.getElementById("search").value;
//   let url =
//     "https://api.unsplash.com/search/photos/?client_id=XDrt9AWBaLVKnJ4ncHbkLOIJxR1RYB-onCdFkL8qZ_g" +
//     "&query=" +
//     searchItem +
//     "smartphone";
//   console.log(url);
//   //making request
//   fetch(url)
//     .then(function (data) {
//       return data.json();
//     })
//     .then(function (data) {
//       let index = Math.floor(Math.random() * 10);
//       console.log(data);
//       document.querySelector(".setcar").src = data.results[index].urls.regular;
//     });
// }

// SearchPhotos();
// document.querySelector(".SearchPhotos").addEventListener("click", SearchPhotos);

function imageGallery() {
  const highlight = document.querySelector(".gallery-highlight");
  const previews = document.querySelectorAll(".image-preview img");
  const imageGallery = document.querySelector(".image-gallery");
  previews.forEach((preview) => {
    preview.addEventListener("click", function () {
      //for image-change
      const smallSrc = this.src;
      const largeSrc = smallSrc.replace("small", "small");
      highlight.src = largeSrc;
      imageGallery.style.backgroundColor = preview.dataset.bg;
      previews.forEach((preview) => {
        preview.classList.remove("image-active");
      });
      preview.classList.add("image-active");
      //for description change
      let className = preview.dataset.desc;
      console.log(className);

      const parachange = document.querySelector(`${className}`);
      previews.forEach((preview) => {
        let className = preview.dataset.desc;
        document.querySelector(`${className}`).classList.remove("active");
      });
      parachange.classList.add("active");
      parachange.style.color = `${preview.dataset.color}`;
    });
  });
}

imageGallery();
