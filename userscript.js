// ==UserScript==
// @name         YouTube Link-Player
// @namespace    https://github.com/adeoladev/youtube-linkplayer
// @version      1.2.7
// @description  Open YouTube hyperlinks as embedded videos.
// @author       Adeola Boye
// @match        *://*/*
// @icon         https://addons.mozilla.org/user-media/addon_icons/2877/2877505-64.png
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('contextmenu', function(e) {
        var link = e.originalTarget.href;
        if(link.includes("youtube.com/watch")) {
        if(link.includes('&t=')) {
            var time = "?s=linkplayer&start="+link.substring(link.indexOf("t=") + 2);
            var seconds = time.slice(0, -1);
        } else {
            var seconds = '';
        }
        var id = link.substring(link.indexOf("=") + 1, link.indexOf("=") + 12);
        var randomNum = Math.random();
        e.originalTarget.insertAdjacentHTML('afterend', "<div id='button"+randomNum+"' style='display:inline;background-color:red;border-radius:4px;color:white;font-size:8px;text-align:center;padding-top: 1px;padding-left: 5px;padding-right: 5px;padding-bottom:2px;margin-left: 4px;height: fit-content;width: 10px;font-weight:bold;'>&#9658;</div>");
        var toggle = document.getElementById('button'+randomNum);
        toggle.addEventListener("click", function() {
            if(document.getElementById('frame'+id)){
            document.getElementById('frame'+id).remove();
            } else {
            toggle.insertAdjacentHTML('afterend','<iframe style="display: block;border-radius: 10px;margin-top: 5px;margin-bottom: 5px;" id="frame'+id+'" width="560" height="315" src="https://www.youtube.com/embed/'+id+seconds+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
            }
        });
    }
    });

        setTimeout(function () {
        if (!window.location.hostname.includes("youtube.com")) {
    var youtubeLinks = document.querySelectorAll('a[href*="youtube.com/watch"]');
    var miniYoutubeLinks = document.querySelectorAll('a[href*="https://youtu.be/"]');
    var youtubeShorts = document.querySelectorAll('a[href*="youtube.com/shorts"]');

    youtubeLinks.forEach(function(element){
        var children = Array.from(element.childNodes);
        let nodeTypes = children.map(el=>el.tagName);
        if(element.innerText || nodeTypes.includes(':header')) {
        var id = element.href.substring(element.href.indexOf("=") + 1, element.href.indexOf("=") + 12);
        var randomNum = Math.random();
        var button = "<div id='button"+randomNum+"' style='display:inline;background-color:red;border-radius:4px;color:white;font-size:8px;text-align:center;padding-top: 1px;padding-left: 5px;padding-right: 5px;padding-bottom:2px;margin-left: 4px;height: fit-content;width: 10px;font-weight:bold;'>&#9658;</div>";
        element.insertAdjacentHTML('afterend', button);
        var toggle = document.getElementById('button'+randomNum);
        toggle.addEventListener("click", function() {
            if(document.getElementById('frame'+id)){
            document.getElementById('frame'+id).remove();
            } else {
            toggle.insertAdjacentHTML('afterend','<iframe style="display: block;border-radius: 10px;margin-top: 5px;margin-bottom: 5px;" id="frame'+id+'" width="560" height="315" src="https://www.youtube.com/embed/'+id+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
            }
        });
        }
    });

    miniYoutubeLinks.forEach(function(element){
        var children = Array.from(element.childNodes);
        let nodeTypes = children.map(el=>el.tagName);
        if(element.innerText || nodeTypes.includes(':header')) {
        var id = element.href.substring(element.href.indexOf("e/") +2, 28);
        var randomNum = Math.random();
        var button = "<div id='button"+randomNum+"' style='display:inline;background-color:red;border-radius:4px;color:white;font-size:8px;text-align:center;padding-top: 1px;padding-left: 5px;padding-right: 5px;padding-bottom:2px;margin-left: 4px;height: fit-content;width: 10px;font-weight:bold;'>&#9658;</div>";
        element.insertAdjacentHTML('afterend', button);
        var toggle = document.getElementById('button'+randomNum);
        toggle.addEventListener("click", function() {
            if(document.getElementById('frame'+id)){
            document.getElementById('frame'+id).remove();
            } else {
            toggle.insertAdjacentHTML('afterend','<iframe style="display: block;border-radius: 10px;margin-top: 5px;margin-bottom: 5px;" id="frame'+id+'" width="560" height="315" src="https://www.youtube.com/embed/'+id+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
            }
        });
        }
    });

    youtubeShorts.forEach(function(element){
        var children = Array.from(element.childNodes);
        let nodeTypes = children.map(el=>el.tagName);
        if(element.innerText || nodeTypes.includes(':header')) {
        var id = element.href.substring(element.href.indexOf("s/") +2, element.href.indexOf("s/") + 13);
        var randomNum = Math.random();
        var button = "<div id='button"+randomNum+"' style='display:inline;background-color:red;border-radius:4px;color:white;font-size:8px;text-align:center;padding-top: 1px;padding-left: 5px;padding-right: 5px;padding-bottom:2px;margin-left: 4px;height: fit-content;width: 10px;font-weight:bold;'>&#9658;</div>";
        element.insertAdjacentHTML('afterend', button);
        var toggle = document.getElementById('button'+randomNum);
        toggle.addEventListener("click", function() {
            if(document.getElementById('frame'+id)){
            document.getElementById('frame'+id).remove();
            } else {
            toggle.insertAdjacentHTML('afterend','<iframe style="display: block;border-radius: 10px;margin-top: 5px;margin-bottom: 5px;" id="frame'+id+'" width="279" height="496" src="https://www.youtube.com/embed/'+id+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
            }
        });
        }
    });
        }
    }, 1000);
})();