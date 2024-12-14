setTimeout(function () {
var youtubeLinks = document.querySelectorAll('a[href*="youtube.com/watch"]');
var miniYoutubeLinks = document.querySelectorAll('a[href*="https://youtu.be/"]');
var youtubeShorts = document.querySelectorAll('a[href*="youtube.com/shorts"]');

var toggle1Image = chrome.runtime.getURL("images/toggle.png");

youtubeLinks.forEach(function(element){
    if(element.childElementCount == 0) {
    var id = element.href.substring(element.href.indexOf("=") + 1, element.href.indexOf("=") + 12);
    var randomNum = Math.random();
    element.insertAdjacentHTML('afterend',"<img id='button"+randomNum+"' style='margin-left:3px;display: inline;width:20px;' src='"+toggle1Image+"'>");
    var toggle = document.getElementById('button'+randomNum);
    toggle.addEventListener("click", function() {
        if(document.getElementById('frame'+id)){
        document.getElementById('frame'+id).remove();
        } else {
        toggle.insertAdjacentHTML('afterend','<iframe style="display:block" id="frame'+id+'" width="560" height="315" src="https://www.youtube.com/embed/'+id+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
        }  
    }); 
    }
});

miniYoutubeLinks.forEach(function(element){
    if(element.childElementCount == 0) {
    var id = element.href.substring(element.href.indexOf("e/") +2, 28);
    var randomNum = Math.random();
    element.insertAdjacentHTML('afterend',"<img id='button"+randomNum+"' style='margin-left:3px;display: inline;width:20px;' src='"+toggle1Image+"'>");
    var toggle = document.getElementById('button'+randomNum);
    toggle.addEventListener("click", function() {
        if(document.getElementById('frame'+id)){
        document.getElementById('frame'+id).remove();
        } else {
        toggle.insertAdjacentHTML('afterend','<iframe style="display:block" id="frame'+id+'" width="560" height="315" src="https://www.youtube.com/embed/'+id+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
        }  
    }); 
    }
});

youtubeShorts.forEach(function(element){
    if(element.childElementCount == 0) {
    var id = element.href.substring(element.href.indexOf("s/") +2, element.href.indexOf("s/") + 13);
    var randomNum = Math.random();
    element.insertAdjacentHTML('afterend',"<img id='button"+randomNum+"' style='margin-left:3px;display: inline;width:20px;' src='"+toggle1Image+"'>");
    var toggle = document.getElementById('button'+randomNum);
    toggle.addEventListener("click", function() {
        if(document.getElementById('frame'+id)){
        document.getElementById('frame'+id).remove();
        } else {
        toggle.insertAdjacentHTML('afterend','<iframe style="display:block" id="frame'+id+'" width="279" height="496" src="https://www.youtube.com/embed/'+id+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
        }  
    }); 
    }
});
}, 1000);

var clickedEl = null;

document.addEventListener("contextmenu", function(event){
    clickedEl = event.target;
}, true);

browser.runtime.onMessage.addListener(function(message) {
    if (message.message === "LINKPLAYER") {
        var div = document.createElement('div');
        div.innerHTML = '<iframe style="display:block" id="frame'+message.videoId+'" width="560" height="315" src="https://www.youtube.com/embed/'+message.videoId+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        clickedEl.appendChild(div);
    } else if (message.message === "LINKPLAYER ERROR") {
       alert("That is not a valid YouTube URL");
    }
});
