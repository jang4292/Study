'use strict';
let start = () => {
    window.preloaderStartListener = null;
    start = null;
};
try {
    FB;
} catch (e) {
    window.preloaderStartListener = start;
    return;
}
start();