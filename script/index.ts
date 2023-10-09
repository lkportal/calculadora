
const btn = document.querySelectorAll('button') 
const visor = document.getElementById('visor') as HTMLInputElement
const ptext = document.getElementById('p')
const results = document.getElementById('n=') 
const soma = document.getElementById('n+') as HTMLButtonElement
const sub = document.getElementById('n-') as HTMLButtonElement
const multiplicar = document.getElementById('nx') as HTMLButtonElement
const dividir = document.getElementById('n/') as HTMLButtonElement
let btns:string = ''
let result:number;
let operado:string
let numeros:number;
let numero2:number;
const regex = /[^\W]/gi


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
    if(result){
        numeros = result
    }
    numero2 = numeros
    operado = btns
    btns = '' 
 })


 sub.addEventListener('click', () =>{
    if(result){
        numeros = result
    }
    numero2 = numeros
    operado = btns
    btns = '' 
 })
 multiplicar.addEventListener('click',()=>{
    if(result){
        numeros = result
    }
    numero2 = numeros
    operado = btns
    btns = '' 
 })
 dividir.addEventListener('click',()=>{
    if(result){
        numeros = result
    }
    numero2 = numeros
    operado = btns
    btns = '' 
 })
results?.addEventListener('click',()=>{
    if(operado.includes('+')){
        result = numeros + numero2
    }else if(operado.includes('-')){
        numeros > numero2? result = numeros - numero2: result = numero2 - numeros
    }else if(operado.includes('x')){
        result = numero2 * numeros
    }else if(operado.includes('/')){
        result = numero2 / numeros
    }
    
    btns = ''
    visor.value = result.toString()
 
    
   
})


