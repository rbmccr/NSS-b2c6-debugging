try {
    const domElement = document.getElementById("dynamicallyAddedElement");
    domElement.innerHTML = "I was added after the user clicked on a button.";
} catch (exception) {
    console.error("The dynamic element has not been added to the DOM yet.");
}
