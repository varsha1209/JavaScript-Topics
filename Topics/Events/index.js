const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandParent.addEventListener("click", (e) => {
    e.stopPropagation(); //  it stops the event from capturing up to its parent elements
    alert("grandParent");
},{
    capture: true
})

parent.addEventListener("click", () => {
    alert("parent");
}, {
    capture: true
})

child.addEventListener("click", (e) => {
    //e.stopPropagation(); //  it stops the event from bubbling up to its parent elements
    alert("child");
},{
    capture: true
})