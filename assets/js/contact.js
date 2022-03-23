let sections = [];
let offsets = [];

const setScroll = (n) => {
    const offset = sections[n].offsetTop - sections[0].offsetTop;
    window.scrollTo(window.scrollX, offset);
}

const showDiffs = () => {
    const y = window.scrollY;
    const diffs = offsets.map(ofs => Math.abs(y - ofs));
    const idx = diffs.indexOf(Math.min(...diffs));
    if (y > offsets[3])
        return;
    setScroll(idx)
}

const onScroll = () => {
    window.removeEventListener('mouseup', showDiffs, false);
    window.addEventListener('mouseup', showDiffs, { one: true });
    window.removeEventListener('touchend', showDiffs, false);
    window.addEventListener('touchend', showDiffs, { one: true });
};

const calcOffsets = () => {
    const offset0 = sections[0].offsetTop;
    offsets = sections.map(el => el.offsetTop - offset0)
    console.log("Offsets:", offsets)
}

window.addEventListener('scroll', onScroll, false);

window.onresize = calcOffsets;

window.addEventListener("DOMContentLoaded", function () {
    sections = [].slice.call(document.getElementsByTagName('section'));
    const footer = document.getElementsByTagName('footer')[0];
    sections.push(footer);
    calcOffsets()
    
}, false);