// ==UserScript==
// @name         Masque Tip2
// @namespace    http://tampermonkey.net/
// @version      2026-06-25
// @description  try to take over the world!
// @author       chfo
// @match        https://tip2.sbb.ch/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {

    const $ = document.querySelector.bind(document);
    setTimeout(() => {
        $('body').insertAdjacentHTML('afterbegin', init_css() );
    },1500);

})();
function init_css(){
    return `
        <div id="disTestDiv">.</div>
        <style>
            #disTestDiv{z-index:99999999;position:fixed;top:290px;left:0px;width:50px;height:500px;background-color:#FFFFFF}
        </style>
        `;
}

document.head.append(Object.assign(document.createElement("style"), {
    type: "text/css",
    textContent: `.tip2-main-container-background > .py-3 {
        display:none;
        }
        .flex > .flex-col {

        }
        `
}))
