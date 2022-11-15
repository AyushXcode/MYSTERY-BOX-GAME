function sflcrd() {
    matched = 0;
    dsblDk = false;
    cd1 = cd2 = "";
    let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    Arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cds.forEach((crd, i) => {
        crd.classList.remove("flip");
        let imgTag = crd.querySelector(".back-view img");
        imgTag.src = `images/img-${Arr[i]}.png`;
        crd.addEventListener("click", FlpCrd);
    });
}
