pos = function(pos) {
    this.posp = pos;
    this.getpos = function() {
        return this.posp;
    }
    this.setpos = function(pos) {
        this.posp = pos;
        // body...
    }
}
p = new pos();


function zoom(multiplier) {
    if (document.body.style.fontSize == "") {
        document.body.style.fontSize = "1.4em";

    }
    // if (document.body.style.fontSize ==0.8em){document.getElementsById("btnmenoszoom").disabled=true}
    // 	else{document.getElementsById("btnmenoszoom")}.disabled=false}
    // if (document.body.style.fontSize ==3.0em){document.getElementsById("btnmaszoom").disabled=true}
    // 	else{document.getElementsById("btnmaszoom").disabled=false}
    // 	}
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
    // console.log(document.body.style.fontSize)
}


// console.log(document.querySelector(".lista li"))
function oculto(element) {
    //document.getElementsByClassName('sidenav')[0].style.display='none'
    document.getElementsByClassName('sidenav')[0].classList.toggle("oculto")
    element.getElementsByClassName("glyphicon")[0].classList.toggle("glyphicon-triangle-left")
    element.getElementsByClassName("glyphicon")[0].classList.toggle("glyphicon-triangle-right")
    setTimeout(tiempo, 400)
    document.getElementsByClassName("expandir")[0].classList.toggle("col-sm-11")
}

function tiempo() {

    document.getElementsByClassName("expandir")[0].classList.toggle("col-sm-9")
}


function activo(element) {
    var lista = document.getElementsByTagName("li")
    for (var i = 0; i < lista.length; i++) {
        // lista.item(i).className.replace(/(?:^|\s)active(?!\S)/g, '')

        lista.item(i).classList.remove("active")
    }
    this.className += " active";


}

window.onload = function() {
    var lista = document.getElementsByTagName("li")


    if (lista.length > 0) {
        for (var i = 0; i < lista.length; i++) {

            lista.item(i).addEventListener('click', activo)
        }
        // }
        lista.item(0).click();
    }
}






function iframe(archivo, element) {
    document.querySelector("iframe").src = archivo

    var lista = ["iframe('b001.html')", "iframe('b002.html')", "iframe('b003.html')", "iframe('b004.html')"]
        // console.log(element)
        // p.setpos(element.getAttribute("data-index"))
    p.setpos(element)

    // document.getElementsByClassName("active")[0].classList.toggle("active")
    // p.getpos()[0].classList.toggle("active")
    //     activo(element)
}


function pagina(element) {
    console.log(p.getpos())
    var lista = document.getElementsByTagName("li")
    if (element.classList.contains("anterior")) {
        // p.getpos().previousElementSibling.click();


        if (p.getpos().previousElementSibling == null) {
           element.getElementsByClassName("anterior").disabled = false;
        } else {
            element.getElementsByClassName("anterior").disabled = true;
            p.getpos().previousElementSibling.click();

        }
    }
    if (element.classList.contains("siguiente")) {
        if (p.getpos().nextElementSibling == null) {
            element.getElementsByClassName("siguiente").disabled = false;
        } else {
            element.getElementsByClassName("siguiente").disabled = true;
            p.getpos().nextElementSibling.click();
            // console.log(p.getpos().getAttribute("data-index") + " siguiente 2else")

        }
    }
}

// function pagina(element) {
//     // console.log(p.getpos())
//     console.log(document.getAttribute("data-index")[p])
//     // console.log(document.getElementsByClassName('lista')[0].querySelector("[data-index='0']"))
//     if (element.classList.contains("anterior")) {
//         if (element.getAttribute("data-index")[p.getpos()] >= 0) {
//             // element.previousElementSibling.click();
//             p.getpos().previousElementSibling.click();

//             element.getAttribute("data-index")[p.getpos()].classList.toggle("active")
//             element.getAttribute("data-index")[p.getpos() + 1].classList.toggle("active")
//         } else {}

//     } else {}
//     if (element.classList.contains("siguiente")) {
//         (element.getAttribute("data-index")[p.getpos()] <= 0) 
//             // element.nextElementSibling.click();
//             p.getpos().nextElementSibling.click();

//             // console.log(typeof element.classList.contains("anterior"))
//             // console.log(element) 
//             document.getElementsByClassName("active")[0]
//             element.getAttribute("data-index")[p.getpos()].classList.toggle("active")
//             element.getAttribute("data-index")[p.getpos() - 1].classList.toggle("active")
/////////////////////
// var y=x.getElementsByTagName("li");
// var z = getElementsByClassName("active").value;
// } else {}

// }



// document.getElementsByClassName("active")[0].click();

// if (element.classList.contains("anterior")) {
//     element.previousElementSibling.click();
// } else {
//     element.nextElementSibling.click();
// }


//Para calcular el ultimo elemento del array arr.lastIndexOf(searchElement[, fromIndex = arr.length - 1])