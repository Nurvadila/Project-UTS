function changeBackgroundColor(element) {
    var inputColor = document.getElementById("inputColor").value;
    element.style.backgroundColor = inputColor;
}

function addNewColorToList() {
    var rightColumn = document.querySelector(".right-column");
    var newColorBox = document.createElement("div");
    newColorBox.className = "color-box";
    newColorBox.textContent = ""; // Ganti teks sesuai kebutuhan
    newColorBox.onclick = function() {
        changeBackgroundColor(this);
    };
    rightColumn.appendChild(newColorBox);
}

function addFooter() {
    var leftColumn = document.querySelector(".left-column");
    var footer = document.createElement("div");
    footer.textContent = "Footer Content";
    leftColumn.appendChild(footer);
}

function setListBackcolor() {
    var inputColor = document.getElementById("inputColor").value;
    // Ubah latar belakang seluruh kotak warna di sebelah kanan
    var colorBoxes = document.querySelectorAll(".right-column .color-box");
    colorBoxes.forEach(function(box) {
        box.style.backgroundColor = inputColor;
    });
}