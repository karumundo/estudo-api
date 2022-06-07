function recuperarPsicologoId (){
    const idPsicologo = document.getElementById("id").value;
    console.log("Id recuperado = "+ id);

    fetch ("http://localhost:3000/psicologos+id")
        .then (res => console.log(tratarResposta))
        .catch(erro => alert ("Impossível Recuperar"));
};

function tratarResposta (res) {
    if (res.status == 200) {
        alert("Psicólogo localizado")
        res.json().then(Psicologo => preencheDadosPsicologo(psicologo))
    }
    else{
        alert("Psicólogo não localizado")
    }
}

function preencheDadosPsicologo (psicologo){
    let strPsicologo = `<h2>Psicólogo ${psicologo.nome_psicologo} </h2>
                        <strong>e-mail ${psicologo.email}</strong><br>
                        <strong>Apresentação ${psicologo.apresentacao}</strong>`;
    document.getElementById("dadosPsicologos").innerHTML=strPsicologo;

}