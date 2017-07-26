/*
 * FileName:  Complete/01EventDrivenJavaScript.js
 * Topics: 
 *      Event-Driven JavaScript
 */
console.log("FileName:  Complete/01EventDrivenJavaScript.js");

/* 
 * Topic:  Event-Driven JavaScript
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  Event-Driven JavaScript");
console.log("****************************************************************");

// https://developer.mozilla.org/en-US/docs/Web/Events

let body = document.getElementsByTagName("body")[0];
for (let i =0; i < 3; i++) {
    let button = document.createElement("button");
    button.appendChild(document.createTextNode("Button " + i));
    body.appendChild(button);
    
    // addEventListener - supports multiple EventHandlers
    button.addEventListener("click", buttonClick_EventHandler);
//    button.addEventListener("click", buttonClick_EventHandlerEvent);

    // onEvent - supports only one EventHandler at a time
//    button.onclick = buttonClick_EventHandler;
//    button.onclick = buttonClick_EventHandlerEvent;
}

function buttonClick_EventHandler() {
    console.log("buttonClick_EventHandler(event)");
}

function buttonClick_EventHandlerEvent(event) {
    console.log("buttonClick_EventHandlerEvent(event)");
    console.log(event);
    console.log(event.target);
    console.log(event.target.nodeName);
    console.log(event.target.textContent);
    
    //event.target.removeEventListener("click", buttonClick_EventHandler);
    //event.target.onclick = null;
}