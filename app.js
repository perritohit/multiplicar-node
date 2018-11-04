const argv = require('./config/yargs').argv;
const colors = require('colors');



const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];




switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);

        console.log('listar');
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        console.log('crear');

        break;
    default:
        console.log('Comando no reconociso');

}


//let base = '8';
//console.log(process.argv);

//let argv2 = process.argv;

/* let parametro = argv[2];
let base = parametro.split('=')[1] */


//console.log('limite', argv.limite);
//console.log(argv2);





/* crearArchivo(base)
    .then(archivo => console.log(`Archivo craedo: ${archivo}`))
    .catch(e => console.log(e)); */