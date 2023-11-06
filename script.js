
//esto agrega a la pantalla el valor de las teclas
function agregar(valor){
    document.getElementById('pantalla').value += valor
}

function borrar(){
    document.getElementById('pantalla').value = ''
}

function calcular(params) {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
    
}