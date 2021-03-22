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
Button.Url = document.currentScript.src;
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
        "bottom: 10px; right: "+Button.Margins.right+"px;";
    Button.Margins.right += label.length * Button.MarginPerTextLength + Button.MarginPerButton;
    document.body.appendChild(button);
};