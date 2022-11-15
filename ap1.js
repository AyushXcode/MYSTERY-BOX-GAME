const cds = document.querySelectorAll(".crd");

let matched = 0;
let cd1, cd2;
let dsblDk = false;

function FlpCrd({ target: clkdcrd }) {
    if (cd1 !== clkdcrd && !dsblDk) {
        clkdcrd.classList.add("flip");
        if (!cd1) {
            return cd1 = clkdcrd;
        }
        cd2 = clkdcrd;
        dsblDk = true;
        let crd1img = cd1.querySelector(".back-view img").src,
            crd2img = cd2.querySelector(".back-view img").src;
        matchCrds(crd1img, crd2img);
    }
}