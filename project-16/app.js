const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (event){
    moveCursor(event.pageX, event.pageY);
});
const moveCursor = function(pageX,pageY){
    cursor.computedStyleMap.left = pageX + "px";
    cursor.computedStyleMap.top = pageY + "px";
};