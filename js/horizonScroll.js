/*========== HORUZON SCROLL ==========*/
const scrollContainer = document.querySelector(".main__scroller");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});
