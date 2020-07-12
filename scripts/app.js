var modal = document.querySelector('#modal');
var buttonAbrir = document.querySelector('a.buttonW');
var newLink = document.querySelector('a.newLink');
var inputN = document.querySelector('input[type=number]');
var inputMessenger = document.querySelector('input[name=mensagem]');
var inputResult = document.getElementById("result");
var buttonCriar = document.querySelector('a#criar');

//Ativar modal ou aviso
buttonCriar.addEventListener('click', () =>{
    if (inputN.value == ""){
        let aviso = document.querySelector('div#aviso');
        aviso.classList.remove("hide")
        setTimeout(() =>{aviso.classList.add("hide")}, 3000)
    }else{
        modal.classList.toggle("hide")
        gerar()
    }
})

function avisoRemove(){
    let aviso = document.querySelector('div#aviso');
    aviso.classList.add("hide")
}

newLink.addEventListener('click', () =>{
    modal.classList.add("modalslideDown");

    setTimeout(()=> {inputN.value = "";
    inputMessenger.value = "";
    modal.classList.add("hide");
    modal.classList.remove("modalslideDown")
    }, 600)
})

//Copiar
function copy(){
    let copyIcon = document.querySelector('a#copiar');
    let svgIcon = document.querySelector('a#copiar svg');
    svgIcon.style.display = "none"

    let check_Icon = document.querySelector('a#copiar i');
    check_Icon.classList.add("check_icon");
    copyIcon.style.backgroundColor = "#23D49F"

    setTimeout(() =>{
    check_Icon.classList.remove("check_icon");
    copyIcon.removeAttribute("style");
    svgIcon.removeAttribute("style");
    }, 2500)
    
    inputResult.removeAttribute("disabled");
    inputResult.select();
    document.execCommand("copy");
    
    return inputResult.setAttribute("disabled", "disabled");
}


