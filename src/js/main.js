import Customizator from './customizator';
import sortText from "./test-tesks/sort-text";
import matrix from "./test-tesks/matrix";
import sortArr from "./test-tesks/sort-array";

window.addEventListener('DOMContentLoaded', () => {
    // matrix();
    // sortText();
    sortArr();
    const panel = new Customizator();
    panel.render();
});
