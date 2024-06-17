// const grandParent = document.querySelector(".grandParent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

//Bubbling and Capturing
// grandParent.addEventListener("click", () => {
//     alert("grandParent");
// },{capture:true})

// parent.addEventListener("click", () => {
//     alert("parent");
// })

// child.addEventListener("click", () => {

//     alert("child");
// })

// Event Delegation
const optionContainer = document.querySelector(".option");
optionContainer.addEventListener("click", openFromOption);

function openFromOption(event) {
    if (event.target && event.target.tagName === "DIV") {
        console.log("Clicked:", event.target.textContent);
    }
}