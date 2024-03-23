document.addEventListener("DOMContentLoaded", function() {
    // Selecting the color-box and change-color-btn elements
    var colorBox = document.getElementById("color-box");
    var changeColorBtn = document.getElementById("change-color-btn");

    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Adding event listener to change-color-btn
    changeColorBtn.addEventListener("click", function() {
        // Changing the background color of color-box to a random color
        colorBox.style.backgroundColor = getRandomColor();
    });
});
