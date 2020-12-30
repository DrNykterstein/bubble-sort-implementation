let numero = [2,1,4,5];
function bubbleSort(numero){
    let flag;
    let ordenado = false;
    while(!(ordenado)){
        ordenado = true;
        for(let i = 0; i < numero.length; i++){
            for(let j = 0; j < numero.length; j++){
                if(numero[j] > numero[j+1]){
                flag = numero[j];
                numero[j] = numero[j+1];
                numero[j+1] = flag;
                }
            }
        }
    }
    
}
function viewArray(numero){
    for(let k = 0; k < numero.length; k++){
        console.log(numero[k]);
    }
}
bubbleSort(numero);
console.log("El arreglo ordenado es:");
viewArray(numero);
