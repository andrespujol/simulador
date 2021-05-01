let interesMensualPersonal = 0.032
let interesMensualHipotecario = 0.030
let btnTipo = document.getElementById('btnTipo')
let btnPersonal = document.getElementById('btnPersonal')
let btnHipotecario = document.getElementById('btnHipotecario')
let mostrarValores = document.getElementById('main__resultados')
let prestamoPersonal = document.getElementById ('prestamoPersonal')
let prestamoHipotecario = document.getElementById('prestamoHipotecario')
let cantidad = document.getElementById('cantidad')
let cuotas = document.getElementById('cuotas')
let valorDeLaCuota = document.getElementById('valorDeLaCuota')
let totalAPagar = document.getElementById('totalAPagar')
let requisitosPersonales = document.getElementById('requisitosPersonales')
let requisitosHipotecario = document.getElementById('requisitosHipotecario')
let registros = document.getElementById('registros')

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

btnTipo.addEventListener('click', function() {
    let tipoDePrestamo = document.getElementById('tipoDePrestamo')
    if (tipoDePrestamo.value == 'personal') {
        personal () 
        
        btnPersonal.addEventListener('click', function(){
            let valor = document.getElementById('valorP').value;
            let plazo = document.getElementById('plazoP').value
            let mostrarValores = document.getElementById('main__resultados')
            mostrarValores.style.display = 'block'
            registros.style.display = 'block'
            
            let nuevoPrestamo = document.createElement('li')
            nuevoPrestamo.textContent = 'Importe: $'+valor+' Plazos:  '+plazo +' cuotas';
            registros.appendChild(nuevoPrestamo) 

            nuevoPrestamo.addEventListener('click', function(event){
                nuevoPrestamo.style.display = 'none'
            }) 
            let interes = valor *interesMensualPersonal * plazo
            let cuota = valor/plazo
            let valorCuota = Math.round( (interes / plazo) + cuota)
            let total = valorCuota * plazo

            if (valor == "" ) {
                alert ('ops, no nos dijiste cuanto necesitas')
                mostrarValores.style.display = 'none'
                registros.style.display = 'none'
            }else  {
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
    }else if (tipoDePrestamo.value == 'hipotecario') {
        hipotecario ()

        btnHipotecario.addEventListener('click', function(){
            let valor = document.getElementById('valorH').value;
            let plazo = document.getElementById('plazoH').value
            let mostrarValores = document.getElementById('main__resultados')
            cantidad.innerHTML += valor
            cuotas.innerHTML = plazo
            mostrarValores.style.display = 'block'
            registros.style.display = 'block'

            let nuevoPrestamo = document.createElement('li')
            nuevoPrestamo.textContent = 'Importe: $'+valor+' Plazos:  '+plazo +' cuotas';
            registros.appendChild(nuevoPrestamo) 

            nuevoPrestamo.addEventListener('click', function(event){
                nuevoPrestamo.style.display = 'none'
            }) 

            let interesH = valor *interesMensualHipotecario * plazo
            let cuotaH = valor/plazo
            let valorCuotaH = Math.round( (interesH / plazo) + cuotaH)
            let totalH = valorCuotaH * plazo
            if (valor == "") {
                alert ('ops, no nos dijiste cuanto necesitas')
                mostrarValores.style.display = 'none'
            }else {
            for (i = 1 ; i<=plazo+1 ; i++) {
                if(i<=plazo){
                    cantidad.innerHTML = valor
                    cuotas.innerHTML = plazo
                    valorDeLaCuota.innerHTML = valorCuotaH
                    totalAPagar.innerHTML = totalH
                    const nuevoSimulador = new prestamo (valor, plazo)
                    create (nuevoSimulador)
                    localStorage.setItem('simulador', JSON.stringify (nuevoSimulador))
                }else {
                }
            }}
        })
    }
    })
