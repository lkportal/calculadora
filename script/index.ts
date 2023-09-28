
const btn = document.querySelectorAll('button')
const visor = document.getElementById('visor') as HTMLInputElement
const ptext = document.getElementById('p')
const results = document.getElementById('n=') 
let btns:string = ''
let result:number;
let numbs1:string[]
let sum2:number;
btn.forEach((element)=>{
    element.addEventListener('click',(ev:Event)=>{
       const {target} = ev 
       if(target){
        const dado1 = (target as HTMLButtonElement).textContent    
         dado1? btns +=dado1:'erro'
         if(dado1 == '+' ){
            numbs1 = btns.split('')
            btns = ''
        }else if(dado1 == '='){
            btns = ''
        }
       
        results?.addEventListener('click',(event:Event)=>{
             console.log(numbs1)
          
        })
            


         visor.value = btns.toString()
    }
})
})
