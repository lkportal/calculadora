
const btn = document.querySelectorAll('button') 
const visor = document.getElementById('visor') as HTMLInputElement
const ptext = document.getElementById('p')
const results = document.getElementById('n=') 
const soma = document.getElementById('n+') as HTMLButtonElement
let btns:string = ''
let result:number;

let numeros:number;
let numero2:number;
let caracteres:string;
let nums:number[];
let operadores:string|null = null;

btn.forEach((element)=>{
    element.addEventListener('click',(ev:Event)=>{
       const {target} = ev 
       if(target){
        const dado1 = (target as HTMLButtonElement).textContent    
        if(dado1){
           btns += dado1;
           numeros = parseFloat(btns)
          
        }

     
       }
     
      
       
       
    
    visor.value = btns.toString()
})
   

})


 soma.addEventListener('click',()=>{
    
    btns = ''
    numero2 = numeros
    result = numeros + numero2
   
   
 })

results?.addEventListener('click',()=>{
    btns = ''

     console.log(operadores)
    console.log('numero1' , numeros)
    console.log('numero2',numero2)
    console.log(result)
    if(numero2 !== null && result){
        numeros = 0
        numero2 =0;
        result = 0
    }
    visor.value = result.toString()
    
})


