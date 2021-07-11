// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.
class Nodo {
    constructor(valor){
        this.dato= valor;
        this.next= null;
    }
}



class Lista {
    constructor(){
        this.head=null;
        this.len=0;

    }
    
    add(valor){
        let newNodo= new Nodo(valor)
        if(this.head==null){
            this.head = newNodo
            this.len++
        }else {
        let current=this.head;
        while(current.next){
            current=current.next;
        }
        current.next= newNodo;
        this.len++
    }
    }
    remove(){
        if(this.head==null){
            return 1;
        }else{
        this.len--
        let current=this.head;
        while(current.next){
            current= current.next
        }
        let removido= current.dato  

        let current2=this.head
        
        for( let i=1; i<=this.len; i++){
            current2= current2.next

        }
        current.next= null;
        return removido 


    }

}}