const datosformulario = {
    cantidad: '',
    categoria: ''
};

var categoria;
datosformulario.categoria = 'estudiante';

const cantidad = document.querySelector('#cantidad');
categoria = document.querySelector('#categoria');
const totalAPagar = document.querySelector('#totalAPagar');
const btnResumen = document.querySelector('.btnResumen');
const btnBorrar = document.querySelector('.btnBorrar');

cantidad.addEventListener('input', function(event){
    datosformulario.cantidad = event.target.value;
    console.log("Cantidad: " + event.target.value + " guardada");
});

categoria.addEventListener('change', function(event){
    datosformulario.categoria = event.target.value;
    console.log("Categoria: " + event.target.value + " guardada");
});

btnResumen.addEventListener('click' , function(event){
    event.preventDefault();
    const {cantidad, categoria} = datosformulario;
    var resultado = 0;    
    var indice = 0;
    indice = totalAPagar.textContent.indexOf('$');
    totalAPagar.textContent = totalAPagar.textContent.substring(0, indice+1);
    if(categoria == 'estudiante'){
        resultado = (200*cantidad)*0.2;
        console.log("La categoria seleccionada es: " + categoria);
    } 
    else if(categoria == 'trainee'){
        resultado = (200*cantidad)*0.5;
        console.log("La categoria seleccionada es: " + categoria);
    }
    else if(categoria == 'junior'){
        resultado = (200*cantidad)*0.85;
        console.log("La categoria seleccionada es: " + categoria);
    }
    totalAPagar.textContent += resultado;
    return;
});

btnBorrar.addEventListener('click' , function(event){
    event.preventDefault();
    var indice = 0;
    indice = totalAPagar.textContent.indexOf('$');
    totalAPagar.textContent = totalAPagar.textContent.substring(0, indice+1);
    formulario.reset();
    return;
});