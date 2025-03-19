let boton = document.getElementById('boton')
let imgchange = document.getElementById('imgchange')
let abajo = document.getElementById('ab1')
let arriba = document.getElementById('ar1')
let derecha = document.getElementById('der1')
let izquierda = document.getElementById('iz1')

let secuenciaCorrecta = []
let secuenciaUsuario = []

const estratagemas = {
    1: {    //jetpack
        imagen: "https://helldivers.wiki.gg/images/f/f5/Jump_Pack_Stratagem_Icon.png",
        secuencia: ["ArrowLeft", "ArrowUp", "ArrowDown", "ArrowRight"],
        flechas: {
            izquierda: "https://helldivers.wiki.gg/images/4/4e/Left_Arrow.png",
            arriba: "https://helldivers.wiki.gg/images/5/51/Up_Arrow.png",
            abajo: "https://helldivers.wiki.gg/images/1/13/Down_Arrow.png",
            derecha: "https://helldivers.wiki.gg/images/3/3c/Right_Arrow.png"
        }
    },
    2: {    //Águila
        imagen: "https://helldivers.wiki.gg/images/7/72/Eagle_Airstrike_Stratagem_Icon.png",
        secuencia: ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        flechas: {
            izquierda: "https://helldivers.wiki.gg/images/5/51/Up_Arrow.png",
            arriba: "https://helldivers.wiki.gg/images/1/13/Down_Arrow.png",
            abajo: "https://helldivers.wiki.gg/images/4/4e/Left_Arrow.png",
            derecha: "https://helldivers.wiki.gg/images/3/3c/Right_Arrow.png"
        }
    },
    3: {    //Mochila Hell
        imagen: "https://helldivers.wiki.gg/images/a/aa/Portable_Hellbomb_Stratagem_Icon.png",
        secuencia: ["ArrowLeft", "ArrowDown", "ArrowRight", "ArrowUp"],
        flechas: {
            izquierda: "https://helldivers.wiki.gg/images/4/4e/Left_Arrow.png",
            arriba: "https://helldivers.wiki.gg/images/1/13/Down_Arrow.png",
            abajo: "https://helldivers.wiki.gg/images/3/3c/Right_Arrow.png",
            derecha: "https://helldivers.wiki.gg/images/5/51/Up_Arrow.png"
        }
    },
    4: {    //Mochila balas
        imagen: "https://helldivers.wiki.gg/images/6/61/Supply_Pack_Stratagem_Icon.png",
        secuencia: ["ArrowDown", "ArrowRight", "ArrowLeft", "ArrowUp"],
        flechas: {
            izquierda: "https://helldivers.wiki.gg/images/1/13/Down_Arrow.png",
            arriba: "https://helldivers.wiki.gg/images/3/3c/Right_Arrow.png",
            abajo: "https://helldivers.wiki.gg/images/4/4e/Left_Arrow.png",
            derecha: "https://helldivers.wiki.gg/images/5/51/Up_Arrow.png"
        }
    },
    5: {    //Saúl
        imagen: "https://helldivers.wiki.gg/images/5/5c/Reinforce_Stratagem_Icon.png",
        secuencia: ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
        flechas: {
            izquierda: "https://helldivers.wiki.gg/images/3/3c/Right_Arrow.png",
            arriba: "https://helldivers.wiki.gg/images/4/4e/Left_Arrow.png",
            abajo: "https://helldivers.wiki.gg/images/5/51/Up_Arrow.png",
            derecha: "https://helldivers.wiki.gg/images/1/13/Down_Arrow.png"
        }
    },
    6: {    //Hell
        imagen: "https://helldivers.wiki.gg/images/a/a0/Hellbomb_Stratagem_Icon.png",
        secuencia: ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"],
        flechas: {
            izquierda: "https://helldivers.wiki.gg/images/3/3c/Right_Arrow.png",
            arriba: "https://helldivers.wiki.gg/images/1/13/Down_Arrow.png",
            abajo: "https://helldivers.wiki.gg/images/4/4e/Left_Arrow.png",
            derecha: "https://helldivers.wiki.gg/images/5/51/Up_Arrow.png"
        }
    }
}

function reiniciar() {
    let numero = Math.floor(Math.random() * 6) + 1
    let estratagema = estratagemas[numero]
    imgchange.src = estratagema.imagen
    izquierda.src = estratagema.flechas.izquierda
    arriba.src = estratagema.flechas.arriba
    abajo.src = estratagema.flechas.abajo
    derecha.src = estratagema.flechas.derecha
    secuenciaCorrecta = estratagema.secuencia
    secuenciaUsuario = []

    document.removeEventListener('keydown', tecla);
    document.addEventListener('keydown', tecla);
}


function tecla(event) {
    let valor = event.key;
    if (["ArrowLeft", "ArrowUp", "ArrowDown", "ArrowRight"].includes(valor)) {
        secuenciaUsuario.push(valor);
        if (secuenciaUsuario.length == secuenciaCorrecta.length) {
            if (comprobarSecuencia()) {
                alert("Bien, Helldiver");
                izquierda.src="fijo.webp"
                arriba.src="fijo.webp"
                abajo.src="fijo.webp"
                derecha.src="fijo.webp"
            } else {
                alert("AVISTADO TRAIDOR, ALERTANDO A LOS HELLDIVERS");
                izquierda.src="automatons.webp"
                arriba.src="automatons.webp"
                abajo.src="automatons.webp"
                derecha.src="automatons.webp"
            }
            secuenciaUsuario = [];
        }
    }
}



function comprobarSecuencia() {
    for (let i = 0; i < secuenciaCorrecta.length; i++) {
        if (secuenciaUsuario[i] !== secuenciaCorrecta[i]) {
            return false;
        }
    }
    return true;
}

boton.onclick = reiniciar