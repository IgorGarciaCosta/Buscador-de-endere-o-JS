function consultaCep() {
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json";
    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            console.log(response);
            $("#img").hide();
            $("#logradouro").html(response.logradouro!=''?response.logradouro:'Dado não disponível');
            $("#bairro").html(response.bairro!=''?response.bairro:'Dado não disponível');
            $("#localidade").html(response.localidade!=''?response.localidade:'Dado não disponível');
            $("#uf").html(response.uf!=''?response.uf:'Dado não disponível');
            $("#titulo_cep").html("CEP "+response.cep);
            $(".barra-progresso").hide();
            $(".cep").show();

            

        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
    $("#img").show();
})
