// Primero
// Crea una clase que llamaremos Camion. Sus atributos serán:
// * capacidad: número máximo de pasajeros
// * pasajeros: número de pasajeros (inicialmente 0)
// * conductor: objeto conductor.
// Sus métodos
// * subir(pasajeros): aumenta el numero de pasajeros
// * bajar(pasajeros): disminuye el número de pasajeros
// * conductor: asigna un objeto conductor.
// El objeto conductor es de una clase (Conductor) cuyos atributos son:
// * nombre: nombre del conductor
// * licencia: un número que identifica al conductor.
// Al crear el objeto se asigna también el conductor
// No pueden subir más pasajeros que los máximos admitidos y no pueden bajar más de los que hay.


class Camion{
    constructor(capacidad,conductor){
        this.capacidad=capacidad
        this.pasajeros=0
        this.conductor={
            nombre:conductor.nombre,
            licencia:conductor.licencia
        }
    }
    subir(){
        if(this.capacidad>this.pasajeros){
            this.pasajeros=this.pasajeros+1

        }else{
            alert("No puedes subir mas")
        }
        return this.pasajeros
    }
    bajar(){
        if(this.pasajeros>0){
            this.pasajeros=this.pasajeros-1
            
        }else{
            alert("no puedes bajar por que ya no tienses")
        }
        return this.pasajeros
    }
    
}

const test= new Camion(5,{nombre:"Nestor",licencia:12354})



//Reto 2

// En esta ocasión tienes una lista de clientes, cada cliente es un objeto con atributos: nombre, email, telefono.
// Se quiere crear una clase Factura para gestionar las facturas emitidas a los clientes. Las propiedades de esta clase son
// * idCliente: número de cliente (su lugar en la lista de clientes)
// * total: número con el importe total de la factura
// * estado: pagada o pendiente
// Los métodos serán
// * cobrar(): pone el estado en pagada.
// * imprimir(): imprime los datos de la factura
// Para probar crea tres clientes y al menos una factura.

const clientes=[
    {
        nombre:"Javier",
        email:"Javier@gmail.com",
        telefono:7923843,
        key:1
    },
    {
        nombre:"Nacho",
        email:"Nacho@gmail.com",
        telefono:56544,
        key:2
    },
    {
        nombre:"Antonio",
        email:"Antonio@gmail.com",
        telefono:5176716871554,
        key:3
    },
]
class Factura{
    constructor(idCliente,total){
        this.idCliente=idCliente
        this.total=total
        this.estado="Pendiente"
    }
    cobrar(){
        if(this.estado==="Pagada"){
            alert("Ya se encuentra cobrada")
        }else{

            this.estado="Pagada"
        }
    }
    imprimir(){
        console.log(`
        Su factura se encuentra en estado ${this.estado}
        Con los siguientes datos
        ID CLIENTE:  ${this.idCliente.key}
        NOMBRE: ${this.idCliente.nombre} 
        CORREO: ${this.idCliente.email} 
        TELEFONO: ${this.idCliente.telefono} 
        Por una cantidad de: $ ${this.total} mas IVA

        `)
    }
}
const testClient= new Factura(clientes[1],542343,)
testClient.imprimir()
testClient.cobrar()
testClient.imprimir()
testClient.cobrar()




//Reto  3
// En este reto tienes que diseñar una función que compruebe si un array está ordenado en orden ascendente de sus componentes, es decir, que cada elemento es superior o igual al anterior e inferior o igual al siguiente, o si solo tiene un elemento
// La función tiene como único argumento la lista a comprobar y devolverá true si está ordenada o false en caso contrario.
function ordenAsc(arr){
    const compareArr=arr.slice("");
    compareArr.sort(function(a, b) {
        return a - b;
      });
    for (let i = 0; i < compareArr.length; i++) {
        if(compareArr[i]!==arr[i]){
            return false
        }
    }
    return true
}
console.log(ordenAsc([1,2]))
console.log(ordenAsc([1,2,3,6,7,19]))   //true
console.log(ordenAsc([12,2,9,6,7,19]))    //false
console.log(ordenAsc([4]))                //true