const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandParent.addEventListener("click", () => {
    alert("grandParent");
})

parent.addEventListener("click", () => {
    alert("parent");
})

child.addEventListener("click", (e) => {
    e.stopPropagation(); //  it stops the event from bubbling up to its parent elements
    alert("child");
})