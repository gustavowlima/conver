function gerar(){
    var link
    if (inputMessenger.value == ""){
    link = `https://api.whatsapp.com/send?phone=+55${inputN.value}`
    } else{
    link = `https://api.whatsapp.com/send?phone=+55${inputN.value}text=${inputMessenger.value}`
    }

    buttonAbrir.setAttribute('href', link)
    return inputResult.value = link;
}