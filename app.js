const express = require( 'express' );
const morgan = require('morgan');
const app = express(); 


app.listen(3000, () => {
    console.debug('App listening on :3000');
    console.log('Hello')
});


// app.get('./')
// app.use(function (req, res, next) {

//     // hacé tu logueo acá.
//     // llamá a `next`. Sino tu app recibirá pedidos 
//     // pero no responderá adecuadamente.
// })

// app.use([[función acá]]) 
// app.use([algún path en string: '/special']], [[función acá]]) 