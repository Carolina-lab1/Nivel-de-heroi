document.getElementById("Submit").addEventListener("click", function(){
    const nome = document.getElementById("nome").value;
    const xp = parseInt(document.getElementById("quantidade").value);

    if(nome === "" || isNaN(xp)) {
        alert("Por favor, preencha seu nome e a quantidade de XP corretamente.");
        return;
    }

    let nivel = "";

    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    document.querySelector(".resultados").innerText = `O herói de nome ${nome} está no nível ${nivel}.`;
})
