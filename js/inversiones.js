const url= "https://api.bluelytics.com.ar/v2/latest"
fetch(url)
.then(response => response.json()) 
.then(data => {
    $('#venta').append(`<p>$${data.oficial.value_sell}</p>`)
    $('#compra').append(`<p>$${data.oficial.value_buy}</p>`)
    $('#ventaB').append(`<p>$${data.blue.value_sell}</p>`)
    $('#compraB').append(`<p>$${data.blue.value_buy}</p>`)
    $('#ventaE').append(`<p>$${data.oficial_euro.value_sell}</p>`)
    $('#compraE').append(`<p>$${data.oficial_euro.value_buy}</p>`)
    $('#ventaEB').append(`<p>$${data.blue_euro.value_sell}</p>`)
    $('#compraEB').append(`<p>$${data.blue_euro.value_buy}</p>`)
})
.catch(error => 
    $('.errorApi').prepend(`error 500 - Error inesperado, vuelva a intentar en un momento
    `));
let currentdate = new Date(); 
    let datetime =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " - "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes();
$('.fechaActualizacion').text(datetime);

function fechaAcreditacion(days){
        fecha=new Date();
        day=fecha.getDate();
        month=fecha.getMonth()+1;
        year=fecha.getFullYear();
        tiempo=fecha.getTime();
        milisegundos=parseInt(days*24*60*60*1000);
        total=fecha.setTime(tiempo+milisegundos);
        day=fecha.getDate();
        month=fecha.getMonth()+1;
        year=fecha.getFullYear();
    $('#fechaAcreditacion').text(""+day+"/"+month+"/"+year);
    }
    let formato = new Intl.NumberFormat('de-DE')
$('#plazoFijo_vencimiento_1').on('click', function(){
    if ($('#montoPlazoFijo').val() == "") {
        $('.mensaje').show()
    }else {
        let interesGanado = Math.round($('#montoPlazoFijo').val()*(0.37*30/365),2)
        let total = Number( $('#montoPlazoFijo').val() ) + interesGanado
        fechaAcreditacion()
        $('#resultadoTotal').prepend(formato.format(total))
        $('#interesGanado').prepend(formato.format(interesGanado))
        $('#fechaAcreditacion').prepend(fechaAcreditacion(30))
        $('#montoPlazoFijo').val("")
    }
})
$('#plazoFijo_vencimiento_2').on('click', function(){
    if ($('#montoPlazoFijo').val() == "") {
        $('.mensaje').show()
    }else {
    let interesGanado = Math.round($('#montoPlazoFijo').val()*(0.37*60/365),2)
    let total = Number( $('#montoPlazoFijo').val() ) + interesGanado
    fechaAcreditacion()
    $('#resultadoTotal').prepend(formato.format(total))
    $('#interesGanado').prepend(formato.format(interesGanado))
    $('#fechaAcreditacion').prepend(fechaAcreditacion(60))
    $('#montoPlazoFijo').val("")
}
})
$('#plazoFijo_vencimiento_3').on('click', function(){
    if ($('#montoPlazoFijo').val() == "") {
        $('.mensaje').show()
    }else {
    let interesGanado = Math.round($('#montoPlazoFijo').val()*(0.37*90/365),2)
    let total = Number( $('#montoPlazoFijo').val() ) + interesGanado
    fechaAcreditacion()
    $('#resultadoTotal').prepend(formato.format(total))
    $('#interesGanado').prepend(formato.format(interesGanado))
    $('#fechaAcreditacion').prepend(fechaAcreditacion(90))
    $('#montoPlazoFijo').val("")
}
})
$('#plazoFijo_vencimiento_4').on('click', function(){
    if ($('#montoPlazoFijo').val() == "") {
        $('.mensaje').show()
    }else {
    let interesGanado = Math.round($('#montoPlazoFijo').val()*(0.37*120/365),2)
    let total = Number( $('#montoPlazoFijo').val() ) + interesGanado
    fechaAcreditacion()
    $('#resultadoTotal').prepend(formato.format(total))
    $('#interesGanado').prepend(formato.format(interesGanado))
    $('#fechaAcreditacion').prepend(fechaAcreditacion(120))
    $('#montoPlazoFijo').val("")
}
})
$('#montoPlazoFijo').on('click', function(){
    $('#resultadoTotal').empty()
    $('#interesGanado').empty()
    $('#fechaAcreditacion').empty()
    $('.mensaje').hide()
})
