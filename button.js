!function(a,b,c,d){function e(c){b.push.apply(this,c&&c.nodeType?[c]:""+c===c?a.querySelectorAll(c):d)}$$=function(b){return/^f/.test(typeof b)?/c/.test(a.readyState)?b():$$(a).on("DOMContentLoaded",b):new e(b)},$$[c]=e[c]=$$.fn=e.fn={length:0,on:function(a,b){return this.each(function(c){c.addEventListener(a,b)})},off:function(a,b){return this.each(function(c){c.removeEventListener(a,b)})},each:function(a,c){return b.forEach.call(this,a,c),this},splice:b.splice}}(document,[],"prototype");
$$.prototype.append = function (a) {
    for (let i = 0; i < this.length; i++) { this[i].appendChild(a); }
};

class Button {
}
Button.MarginPerTextLength = 7;
Button.MarginPerButton = 30;
Button.Margins = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
};
Button.Floating = (label, onClick) => {
    let button = document.createElement("button");
    button.innerText = label;
    button.onclick = onClick;
    button.style = "position: fixed;" +
        "background: linear-gradient(#51c2ff, #006da0);"+
        "border: none;"+
        "border-radius: 5px;"+
        "padding: 5px 10px;"+
        "cursor: pointer;"+
        "color: white;"+
        "z-index: 10000;"+
        "bottom: 10px; right: "+Button.Margins.right+"px;";
    Button.Margins.right += label.length * Button.MarginPerTextLength + Button.MarginPerButton;
    document.body.appendChild(button);
};

Button.Append = (id, label, onClick, interval) => {
    if (interval != null) {
        setInterval(() => { Button.Append(id, label, onClick); }, interval);
        return;
    }
    let elements = $$(id);
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let tag = element.getAttribute("button.js");
        if (tag === "1") {
            continue;
        }
        element.setAttribute("button.js", "1");
        let button = document.createElement("button");
        button.innerText = label;
        button.onclick = () => onClick(element);
        button.style = "background: linear-gradient(#51c2ff, #006da0);"+
            "border: none;"+
            "border-radius: 5px;"+
            "padding: 5px 10px;"+
            "margin: 5px 10px;"+
            "cursor: pointer;"+
            "color: white;";
        element.appendChild(button);
    }
};