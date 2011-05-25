document.addEventListener("keyup", function(key){
    if (key.keyCode == 120) {
        var elements = document.querySelectorAll('link[rel=stylesheet][href]');
        for (var i = 0; i < elements.length; ++i) {
            var element = elements[i];
            var querystring = '?reload=' + new Date().getTime();
            element.href = element.href.replace(/\?.*|$/, querystring);
        }
    }
}, true);

