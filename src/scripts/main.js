document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAliatorio = Math.random() * numeroMaximo;
        numeroAliatorio = Math.floor(numeroAliatorio + 1) ;

        document.getElementById('resultado-valor').innerText = numeroAliatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})