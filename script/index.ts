
const btn = document.querySelectorAll('button') 
const visor = document.getElementById('visor') as HTMLInputElement
const results = document.getElementById('n=') 
const soma = document.getElementById('n+') as HTMLButtonElement
const sub = document.getElementById('n-') as HTMLButtonElement
const multiplicar = document.getElementById('nx') as HTMLButtonElement
const dividir = document.getElementById('n/') as HTMLButtonElement
const clear = document.getElementById('C') as HTMLButtonElement


let btns:string = ''
let armazenandoAcumulador:number = 0
let result:number;
let numeros:number;
let numero2:number;

let char:string = ''


btn.forEach((element)=>{
   try{
    element.addEventListener('click',(ev:Event)=>{
        const {target} = ev 
        if(target){
         const dado1 = (target as HTMLButtonElement).textContent 
         if(dado1){
            btns += dado1;
            numero2 = parseFloat(btns)
            visor.value = btns.toString()
 //O sinal recebido pelo btns altera o valor do resultado das expressões 
          
         }
        }
       
     })
   }catch(error){
     throw new Error("Erro de conversão")
   }

})
clear.addEventListener("click",()=>{
    if(btns.includes('c') || btns.includes('C')){
       btns = ''
       numeros = 0;
       numero2 = 0;
       result = 0;
       visor.value = '0'
    } 
  })  
    
soma.addEventListener('click',()=>{
  
   if(btns.includes("+")){
     numeros = parseFloat(btns)
     console.log(numeros,'vinda função +')
     console.log(btns,'btns')
     btns = ''
     char = '+'
   }else{
    visor.value = ''
   }
 })

 sub.addEventListener('click',()=>{
    if(btns.includes("-")){
        numeros = parseFloat(btns)
        console.log(numeros,'vinda função -')
        console.log(btns,'btns')
        btns = ''
        char = '-'
      }
 })








results?.addEventListener('click',()=>{
     if(btns.includes("=")){
   

        visor.value = ''
        if(char.includes('+') && btns.includes('')){
            result= numero2 + numeros 
            armazenandoAcumulador = result
           // if(char.includes('+') || btns != '') {
          //      console.log(armazenandoAcumulador)
           //     result = armazenandoAcumulador + numero2
           // } 
        }else if(char.includes('-') && btns.includes('')){
            result = numeros - numero2
        }
     } 
     
   console.log(numeros,'numero1')
   console.log(numero2,'numero2')
   console.log(result,'resultado')
   btns = ''
   visor.value = result.toString()
})   



   

 



 
    
 



