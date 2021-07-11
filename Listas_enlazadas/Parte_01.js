// Listas enlazadas
// son una estructura de datos donde se ordena la informacion uno detras de otro, donde cada parte de de la lista se vuelve un nodo

// Primero que nada Crearemos una clase  nodo que ira dentro  de la lista
function nodo(valor){

    this.dato=valor; //  dato sera donde guardaremos la informacion en cada nodo
    this.apuntador=null;// es el apuntador o la direccion del siguiente nodo
}

function Lista(){

    this.cabeza=null;// esta sera el inicio de nuestra lista
    this.len= 0// esta es la direccion al siguiente nodo

}

Lista.prototype.agregar=function(valor){

    let nuevoNodo=  new nodo(valor);
    if(this.cabeza==null){
        
        this.cabeza= nuevoNodo
        this.len++
    }else{
    let nodoActual= this.cabeza; // obtenemos el nodo actual donde nos encontramos actualmente
    
    while(nodoActual.apuntador){ // recorremos hast encontrar un valor valio

    nodoActual= nodoActual.apuntador;

     }


     nodoActual.apuntador= nuevoNodo   
     this.len++
    }
}