function changeText() {
    var element = document.getElementById("demo");
    if (element) { // Check if the element exists
        element.innerHTML = "Text changed by JavaScript!";
    } else {
        console.error("Element with id 'demo' not found.");
    }
}