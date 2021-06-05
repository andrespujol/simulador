let interesMensual = 0.037
class prestamo {
    constructor(valor, plazo, valorCuota) {
        this.valor = valor
        this.plazo = plazo
        this.valorCuota = valorCuota
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

function mostrarResultados () {
    $('.resultados').css({ 
        display: "block" 
    })
    $('.registros').css({ 
        display: "block" 
    })
}
let formato = new Intl.NumberFormat('de-DE')
localStorage.clear ()
$('.btnPrestamos').on('click', function(){
    const valor = $('.valor').val()
    $('.valor').val("")
    const plazo = $('.plazo').val()
    $('.plazo').val("")
    let interes = valor *interesMensual * plazo
    let cuota = valor/plazo
    let valorCuota = Math.round( (interes / plazo) + cuota)
    let total = valorCuota * plazo
    if (valor == "" || plazo == null ) {
        $('.mensaje').show()
    }else  {
        mostrarResultados ()
        let simulador = JSON.parse(localStorage.getItem('simulador'))
        $('.mostrarConsultas').prepend(`<li id="consulta">Simulaste: $${formato.format(valor)} <br> En ${plazo} cuotas fijas de $ ${formato.format(valorCuota)}<br></li>`)
        $('#cantidad').text(formato.format(valor))
        cuotas.innerHTML = plazo
        valorDeLaCuota.innerHTML = formato.format(valorCuota)
        totalAPagar.innerHTML = formato.format(total)
        if(simulador != null) {
            const nuevoSimulador = new prestamo (formato.format(valor), plazo, formato.format(valorCuota))
            simulador.push(nuevoSimulador)
            localStorage.setItem('simulador', JSON.stringify (simulador))
            }else {
                const nuevoSimulador = new prestamo (formato.format(valor), plazo, formato.format(valorCuota))
                create (nuevoSimulador)
                historialSimuladores.push(nuevoSimulador)
                localStorage.setItem('simulador', JSON.stringify (historialSimuladores))
    }
}})
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
    $('#cantidad').empty()
    $('#cuotas').empty()
    $('#valorDeLaCuota').empty()
    $('#totalAPagar').empty()
}
})
$('.valor').on('click', function(){
    $('.datosDeContacto').show()
    $('.infoResultados').show()
    $('.mensajeContacto').show()
    $('#mensajeContacto-final').remove()
    $('#nombre').val('')
    $('#email').val('')
    $('.mensaje').hide()
})

