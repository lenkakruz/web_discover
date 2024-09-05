

const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");
const slider = document.querySelector(".slider");
const image_gallery = document.querySelector(".column")
const gallery = document.querySelector(".gallery")

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;
let gallery_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    slider.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    /*content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;*/
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top)}px)`;
    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;

    image_gallery.style.opacity = scroll / (header_height / 2) + 1;
    image_container.style.transform = `translateY(${scroll / (gallery_height + galleryY.top)}px)`;
})






















function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}



