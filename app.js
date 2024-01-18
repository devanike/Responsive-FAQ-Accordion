const icon = document.querySelectorAll('.icons');
const accordionHeaders = document.querySelectorAll('.question');

Array.prototype.forEach.call(accordionHeaders, accordionHeader => {
    let target = accordionHeader.nextElementSibling;
    let svg1 = accordionHeader.querySelector('.svg1');
    let svg2 = accordionHeader.querySelector('.svg2');

    accordionHeader.onclick = () => {
        let expanded = accordionHeader.getAttribute('aria-expanded') === 'true';
        accordionHeader.setAttribute('aria-expanded', !expanded);
        target.hidden = expanded;

        if (expanded) {
            svg1.classList.add("show");
            svg1.classList.remove("hide");
            svg2.classList.add("hide");
            svg2.classList.remove("show");
        } else {
            svg1.classList.remove("show");
            svg1.classList.add("hide");
            svg2.classList.add("show");
            svg2.classList.remove("hide");
        }
    }
})
