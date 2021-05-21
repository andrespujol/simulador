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


