var iframes = document.querySelectorAll('iframe');
for (var i = 0; i < iframes.length; i++) {
    iframes[i].setAttribute('allowfullscreen', 'true');
    iframes[i].setAttribute('webkitallowfullscreen', 'true');
    iframes[i].setAttribute('mozallowfullscreen', 'true');
    // Refresh the iframe src to apply the new permission
    iframes[i].src = iframes[i].src; 
}