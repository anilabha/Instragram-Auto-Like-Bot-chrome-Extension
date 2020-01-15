// setInterval(() => {
//     let heart = document.getElementsByClassName('glyphsSpriteHeart__outline__24__grey_9'),
//         arrow = document.querySelector('a.coreSpriteRightPaginationArrow');
//     if (heart[0]) {
//         heart = heart[0].parentElement;
//         heart.click();
//     }
//     arrow.click();
// }, 1000);

setInterval(() => {
    let like = document.querySelector('article span.glyphsSpriteHeart__outline__24__grey_9'),
        arrow = document.querySelector('a.coreSpriteRightPaginationArrow');
    if (like) {
        like.click();
    }
    arrow.click();
}, 1000);