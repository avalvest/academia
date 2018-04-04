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



// console.log(document.querySelector(".lista li"))
function oculto(element) {
    //document.getElementsByClassName('sidenav')[0].style.display='none'
    document.getElementsByClassName('sidenav')[0].classList.toggle("oculto")
    element.getElementsByClassName("glyphicon")[0].classList.toggle("glyphicon-triangle-left")
    element.getElementsByClassName("glyphicon")[0].classList.toggle("glyphicon-triangle-right")
}


function iframe(archivo, element) {
    document.querySelector("iframe").src = archivo



    var lista = ["iframe('b001.html')", "iframe('b002.html')", "iframe('b003.html')", "iframe('b004.html')"]
        // console.log(element)
        // p.setpos(element.getAttribute("data-index"))
    p.setpos(element)
    // console.log(p.getpos())
}

function pagina(element){
if (element.classList.contains("anterior")){
	p.getpos().previousElementSibling.click();
}
if (element.classList.contains("siguiente")){
	p.getpos().nextElementSibling.click();
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

  