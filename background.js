browser.runtime.onInstalled.addListener(function(details) {
    browser.menus.create({
        id: "youtube-linkplayer",
        title: "YouTube Link-Player",
        contexts: ["link"],
        targetUrlPatterns: ["https://www.youtube.com/watch?v=*","https://youtu.be/*","https://youtube.com/shorts/*"]
    });

    browser.menus.create({
        id: "youtube-linkplayer-selection",
        title: "YouTube Link-Player",
        contexts: ["selection"]
    });
});

browser.menus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "youtube-linkplayer") {
        if (info.linkUrl.includes('youtube.com/watch')) {
            var id = info.linkUrl.substring(info.linkUrl.indexOf("=") + 1, info.linkUrl.indexOf("=") + 12);
            browser.tabs.sendMessage(tab.id, {message: "LINKPLAYER", videoId: id});
        } 
        
        if (info.linkUrl.includes('https://youtu.be/')) {
            var id = info.linkUrl.substring(info.linkUrl.indexOf("e/") +2, 28);
            browser.tabs.sendMessage(tab.id, {message: "LINKPLAYER", videoId: id});
        }
        
        if (info.linkUrl.includes('https://youtube.com/shorts')) {
            var id = info.linkUrl.substring(info.linkUrl.indexOf("s/") +2, info.linkUrl.indexOf("s/") + 13);
            browser.tabs.sendMessage(tab.id, {message: "LINKPLAYER", videoId: id});
        }
    }

    if (info.menuItemId == "youtube-linkplayer-selection") {
        if (info.selectionText.includes('youtube.com/watch')) {
            var id = info.selectionText.substring(info.selectionText.indexOf("=") + 1, info.selectionText.indexOf("=") + 12);
            browser.tabs.sendMessage(tab.id, {message: "LINKPLAYER", videoId: id});
        } else if (info.selectionText.includes('https://youtu.be/')) {
            var id = info.selectionText.substring(info.selectionText.indexOf("e/") +2, 28);
            browser.tabs.sendMessage(tab.id, {message: "LINKPLAYER", videoId: id});
        } else if (info.selectionText.includes('https://youtube.com/shorts')) {
            var id = info.selectionText.substring(info.selectionText.indexOf("s/") +2, info.selectionText.indexOf("s/") + 13);
            browser.tabs.sendMessage(tab.id, {message: "LINKPLAYER", videoId: id});
        } else {
            browser.tabs.sendMessage(tab.id, {message: "LINKPLAYER ERROR"});
        }
    }
});
