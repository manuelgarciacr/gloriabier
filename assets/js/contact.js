let sections = [];
let offsets = [];
let wheeling;

// Offsets
//
const calcOffsets = () => {
    const offset0 = sections[0].offsetTop;
    offsets = sections.map(el => el.offsetTop - offset0)
}

window.onresize = calcOffsets;
//
// End Offsets

// Scroll
//
const setScroll = (n) => {
    const offset = sections[n].offsetTop - sections[0].offsetTop;
    window.scrollTo(window.scrollX, offset);
}

const setDiffs = () => {
    const y = window.scrollY;
    const diffs = offsets.map(ofs => Math.abs(y - ofs));
    const idx = diffs.indexOf(Math.min(...diffs));
    if (y > offsets[3])
        return;
    setScroll(idx)
}

const onScroll = () => {
    window.removeEventListener('mouseup', setDiffs, false);
    window.addEventListener('mouseup', setDiffs, { one: true });
    window.removeEventListener('touchend', setDiffs, false);
    window.addEventListener('touchend', setDiffs, { one: true });
};

window.onscroll = onScroll;
//
// End Scroll

// Wheel
//
window.onwheel = (e) => {

    clearTimeout(wheeling);

    wheeling = setTimeout(() => {

        wheeling = undefined;

        setDiffs()
    }, 250);
};
//
// End Wheel

window.addEventListener("DOMContentLoaded", function () {
    sections = [].slice.call(document.getElementsByTagName('section'));
    const footer = document.getElementsByTagName('footer')[0];
    
    sections.push(footer);

    calcOffsets()
    
}, false);