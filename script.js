async function displayResult() {
    let userName = document.getElementById("userName").value;
    let userLikes = document.getElementById("userLikes").value;
    let displayArea = document.getElementById("displayArea");
    displayArea.innerText = "Your name is " + userName + " and you like " + userLikes;
}
