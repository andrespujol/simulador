let interesMensual = 0.032
class prestamo {
    constructor(valor, plazo) {
        this.valor = valor
        this.plazo = plazo
    }
}
let simulador = JSON.parse(localStorage.getItem('prestamo'))
if (!simulador) {
    simulador = []
}
const create = (nuevoSimulador) => {
    simulador.push(nuevoSimulador)
}
let historialSimuladores = []

function personal () {
    claseDePrestamo.style.display = 'none'
    prestamoPersonal.style.display = 'block'
    requisitosPersonales.style.display = 'block'
} 
function hipotecario () {
    claseDePrestamo.style.display = 'none'
    prestamoHipotecario.style.display = 'block'
    requisitosHipotecario.style.display = 'block'
}
function mostrarResultados () {
    $('.main__resultados').css({ 
        display: "block" 
    })
    $('#registros').css({ 
        display: "block" 
    })
}
function calcular () {
    let interes = valor *interesMensual * plazo
    let cuota = valor/plazo
    let valorCuota = Math.round( (interes / plazo) + cuota)
    let total = valorCuota * plazo
}
$('#btnTipo').click(function(){
    if($('#tipoDePrestamo').val() === "personal"){
        personal()
    }else {
        hipotecario ()
    }
})

$('#btnPersonal').click(function(){
    const valor = $('#valorP').val()
    $('#valorP').val("")
    const plazo = $('#plazoP').val()
    $('#plazoP').val("")
    let interes = valor *interesMensual * plazo
    let cuota = valor/plazo
    let valorCuota = Math.round( (interes / plazo) + cuota)
    let total = valorCuota * plazo
    if (valor == "" ) {
        $('.mensaje').show()
    }else  {
        mostrarResultados ()
        $('.mostrarConsultas').prepend(`<li id="consulta">Importe: ${valor} - Cuotas: ${plazo} <br></li>`)
        for (i = 1 ; i<=plazo+1 ; i++) {
            if(i<=plazo){
                cantidad.innerHTML = valor
                cuotas.innerHTML = plazo
                valorDeLaCuota.innerHTML = valorCuota
                totalAPagar.innerHTML = total
                const nuevoSimulador = new prestamo (valor, plazo)
                create (nuevoSimulador)
                localStorage.setItem('simulador', JSON.stringify (nuevoSimulador))
            }else {
            }

    }}
})

$('#prestamoHipotecario').click(function(){
    const valor = $('#valorH').val()
    $('#valorH').val("")
    const plazo = $('#plazoH').val()
    $('#plazoH').val("")
    let interes = valor *interesMensual * plazo
    let cuota = valor/plazo
    let valorCuota = Math.round( (interes / plazo) + cuota)
    let total = valorCuota * plazo

    if (valor == "") {
        $(".mensaje").slideDown("fast")
    }else {
        mostrarResultados ()
        $('.mostrarConsultas').prepend(`<li id="consulta">Importe: ${valor} - Cuotas: ${plazo} <br></li>`)

    for (i = 1 ; i<=plazo+1 ; i++) {
        if(i<=plazo){
            cantidad.innerHTML = valor
            cuotas.innerHTML = plazo
            valorDeLaCuota.innerHTML = valorCuota
            totalAPagar.innerHTML = total
            const nuevoSimulador = new prestamo (valor, plazo)
            create (nuevoSimulador)
            localStorage.setItem('simulador', JSON.stringify (nuevoSimulador))
            historialSimuladores.push(nuevoSimulador)
        }else {
        }
    }}
})

const usuarios = [{}]

$('#btnDatos').click(()=>{
    if ($('#nombre').val() == ''  || $('#email').val() == ''){
        $(".mensajeDatos").slideDown("fast")
    }else  {
    $('.datosDeContacto').css({
        display: "none"
    })    
    $('.infoResultados').css({
        display: "none"
    })
    $('.mensajeContacto').css({
        display: "block"
    })
    $('.mensajeContacto').prepend(`<p id="mensajeContacto-final">Perfecto ${$('#nombre').val()}, en menos de 24 hs. nos pondremos en contacto con vos.</p>`)
    usuarios.push({
        name: $('#nombre').val(),
        email: $('#email').val()
    })
    console.log(usuarios)
}
})
$('#mostrarConsultas').click(function(){
    $('#consulta').css({
        display: 'none'
    })
})
