var imageSearchWindow;

function searchWord(info, tab) {
    console.log("Word " + info.selectionText + " was clicked.");
    var url = "https://www.google.com/search?site=&tbm=isch&source=hp&biw=1245&bih=782&q=" + info.selectionText +
         "&oq=" + info.selectionText + "&gs_l=img.3..0l10.4168.4277.0.4597.3.3.0.0.0.0.167.348.1j2.3.0.msedr...0...1ac.1.64.img..0.3.348.ZhYpHFCUMys";
    if (imageSearchWindow) {
        imageSearchWindow.close(); // LOL no idea what this does -- it doesn't close the window but allows us to open a new window
    }
    imageSearchWindow = window.open(url, "image_search_window", "width=1000,height=1000,status=yes,scrollbars=yes,resizable=yes");
}

chrome.contextMenus.create ({
    title: "Find all the images for me",
    contexts: ["selection"],
    onclick: searchWord,
});