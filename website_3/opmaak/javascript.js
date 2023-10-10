var water = true;
function changeBackground() {
    if (water) {
        document.getElementById("test").style.backgroundImage = "url(afbeeldingen/zonsondergang.jpg)";
        water = false;
    } else {
        document.getElementById("test").style.backgroundImage = "url(afbeeldingen/water.jpg)";
        water = true;
    }
}