var active = false;

function rotate() {
    if (!active) {
        document.getElementById("spin").classList.add("rotateScheet");
        active = true;
        setTimeout(() => {
            document.getElementById("spin").classList.remove("rotateScheet");
            active = false;
        }, 2000);
    }  
}