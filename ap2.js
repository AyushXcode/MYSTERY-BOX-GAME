function matchCrds(img1, img2) {
    if (img1 === img2) {
        matched++;
        if (matched == 8) {
            setTimeout(() => {
                return sflcrd();
            }, 1000);
        }
        cd1.removeEventListener("click", FlpCrd);
        cd2.removeEventListener("click", FlpCrd);
        cd1 = cd2 = "";
        return dsblDk = false;
    }
    setTimeout(() => {
        cd1.classList.add("shake");
        cd2.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cd1.classList.remove("shake", "flip");
        cd2.classList.remove("shake", "flip");
        cd1 = cd2 = "";
        dsblDk = false;
    }, 1200);
}
