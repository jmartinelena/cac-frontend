function checkMenu() {
    if (document.getElementById("menu-check").checked) {
        document.getElementById("navbar").style.display = "none";
        document.getElementById("menu-cerrar").style.display = "none";
        document.getElementById("menu-abrir").style.display = "inline";
    }
    else 
    {
        document.getElementById("navbar").style.display = "grid";
        document.getElementById("menu-cerrar").style.display = "inline";
        document.getElementById("menu-abrir").style.display = "none";
    }  
}

function mostrarNavbar() {
    let ancho = document.documentElement.clientWidth;
    //console.log(ancho);
    if (ancho <= 600) {
        document.getElementById("menu-cerrar").style.display = "none";
        document.getElementById("menu-abrir").style.display = "inline";
        document.getElementById("navbar").style.display = "none";
        document.getElementById("menu-check").checked = true;
    }
    if (ancho >600) {
        document.getElementById("menu-cerrar").style.display = "inline";
        document.getElementById("menu-abrir").style.display = "none";
        document.getElementById("navbar").style.display = "grid";
        document.getElementById("menu-check").checked = false;
    }
}

window.addEventListener('resize', mostrarNavbar);