function consultaCep(){
    $.ajax({
        url:"https://viacep.com.br/ws/48700000/json",
        type:"GET",
        success: function(response){
            console.log(response);
        }
    })
}
//https://viacep.com.br/ws/48700000/json