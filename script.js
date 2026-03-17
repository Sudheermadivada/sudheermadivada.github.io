const timelineItems = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {

timelineItems.forEach(item => {

const position = item.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.3;

if(position < screenPosition){
item.classList.add("show");
}

});

});
