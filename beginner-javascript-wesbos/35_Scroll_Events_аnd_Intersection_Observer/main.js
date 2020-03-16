(function scrollToAccept() {
    const terms = document.querySelector('.terms-and-conditions');
    if (!terms) { return; }
    const button = document.querySelector('.accept');
    const ob = new IntersectionObserver(obCallback, {
        root: terms,
        threshold: 1,
    });
    ob.observe(terms.lastElementChild);

    function obCallback(payload) {
        if (payload[0].intersectionRatio === 1) {
            button.disabled = false;
            ob.unobserve(terms.lastElementChild);
        }
    }
})();