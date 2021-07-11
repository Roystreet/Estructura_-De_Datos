// Recursividad
// Aplicando un metodo que utilice otro de manera normal

let metodo = ()=>{ console.log("hola mundo ")};

let metodo2 = ()=>{ metodo()};

// Aca tenemos una funcion que llama a otra 

function metodoRecursivo(){

    metodoRecursivo()
}

// aca tenemos un metodo que se llama asi mismo acortamos codigos de manera sustancial 

// Realiza una funcion que sume los numeros consecutivos 

// La suma de los n  primeros numeros enteros positivos analizamos primoer
// casos aefectuar
// f(1)=1
// f(2)=3

function sumaEnteros(numero){

    if(numero==1){ // comprobamos la condicion  dada 
        return 1
    }
    return  numero + sumaEnteros( numero - 1) 

}

// Crear una funcion que sume numeros pares consecutivos 

function sumarNumerosParesConsecutivos(){

}
