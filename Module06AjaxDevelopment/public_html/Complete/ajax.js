let ajax =  (function() {
    let dataLoadedCallback;

    function send(path, verb, callback) {
        console.log("send(path, verb, callback) called");
        
        dataLoadedCallback = callback;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = xhrStateChanged;
        xhr.open(verb, path);
        xhr.send();
    }
    
    function xhrStateChanged() {
        console.log("xhrStateChanged() called");
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            dataLoadedCallback(JSON.parse(this.responseText));
        }
    }

    return { send: send }
}());