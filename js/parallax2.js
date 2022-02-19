/*========== PARALLAX ==========*/
document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/200
        const Y = (window.innerHeight - e.pageY*speed)/250

        layer.style.transform = `translateX(${x}px) translateY(${Y}px)`
    });
}