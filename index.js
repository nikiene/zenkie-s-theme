/**
 * Zenkie's Theme
 * @name Zenkie's Theme
 * @description A minimalistic theme for League of Legends client.
 * @version 0.0.1 Alpha
 * @license MIT
 * @author Zenkie
 * @source https://github.com/nikiene/zenkie-s-theme.git
 */

/**
 * Imports the CSS file for the theme.
 * 
 * @module Zenkie's Theme
 */
import "./styles/style.css";

/**
 * The path of the CSS file for the theme.
 * 
 * @type {string}
 */
const theme = "./styles/style.css";

/**
 * Applies a CSS file as a stylesheet to the document.
 * 
 * @param {string} filename - The path or URL of the CSS file.
 * @returns {void}
 */
function applyStyle(filename) {
    const style = document.createElement('link');

    style.href = filename;
    style.type = 'text/css';
    style.rel = 'stylesheet';

    document.head.appendChild(style);
}

window.addEventListener('load', () => {
    applyStyle(theme);
});