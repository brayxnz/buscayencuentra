let o = 1;
    function vObjetivo(x) {
        var objetivos = ["Creeper", "Oveja", "Gallina", "Cerdo" ,"Murciélago"];
        var oActual = objetivos[o];
        if (x === o) {
            if (o < 5) {
                document.getElementById("message").innerText = "Ahora encuentra: " + oActual;
            } else {
                document.getElementById("message").innerText = "Felicidades";
            }
            o++;
        } else {
            rJuego();
        }
    }

    function rJuego() {
        alert("Eres una nub");
        o = 1;
        document.getElementById("message").innerText = "Encuentra el creeper";
    }