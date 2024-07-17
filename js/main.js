const numbers = [...document.querySelectorAll(".num")]
const display = document.querySelector('.display')
const signs = [...document.querySelectorAll('.simb')]
const dot = document.querySelector('.dot')
const clear = document.querySelector( ".c")
const del = document.querySelector('.d')
const equal = document.querySelector(".calc") 
const timeSkrolerTime = document.querySelector('.time-skroler-time')
const header_logo = document.querySelector('.header-logo')
const titleTem =  document.querySelector(".title-tem")
const titleTime =[...document.querySelectorAll(".title-time")]
const site = document.querySelector("body")
const dis_calculator = document.querySelector('.calculator')
const calcBtns = document.querySelector('.calc-btns')
const btnDefs = [...document.querySelectorAll(".btn-def")]
const timeSkrolerBord = document.querySelector(".time-skroler-bord")
let scrol_num = 1; 
timeSkrolerTime.addEventListener("click" , ()=> {
    if (scrol_num == 1) {
        timeSkrolerTime.classList.remove("align-items-start")
        timeSkrolerTime.classList.add('align-items-center')
        header_logo.classList.add('light-logo')
        titleTem.classList.add('ligth-title-tem')
        timeSkrolerTime.classList.add('light-time-skroler-time')
        display.classList.add('light-display')
        dis_calculator.classList.add('light-bag-color')
        site.classList.add('light-bag-color')
        for (const titleTim of titleTime) {
            titleTim.classList.add('light-time-title')
        }
        for (const btnDef of btnDefs) {
            btnDef.classList.add('light-btn-def')
        }
        calcBtns.classList.add('light-calc-btns')
        del.classList.add('light-delet')
        clear.classList.add('light-clear')
        scrol_num++
    }else if(scrol_num == 2){
        timeSkrolerTime.classList.remove("align-items-center")
        timeSkrolerTime.classList.add('align-items-end')
        header_logo.classList.remove('light-logo')
        titleTem.classList.remove('ligth-title-tem')
        timeSkrolerTime.classList.remove('light-time-skroler-time')
        display.classList.remove('light-display')
        dis_calculator.classList.remove('light-bag-color')
        site.classList.remove('light-bag-color')
        for (const titleTim of titleTime) {
            titleTim.classList.remove('light-time-title')
        }
        for (const btnDef of btnDefs) {
            btnDef.classList.remove('light-btn-def')
        }
        calcBtns.classList.remove('light-calc-btns')
        del.classList.remove('light-delet')
        clear.classList.remove('light-clear')
        header_logo.classList.add('dark-logo')
        titleTem.classList.add('dark-title-tem')
        timeSkrolerTime.classList.add('dark-time-skroler-time')
        display.classList.add('dark-display')
        dis_calculator.classList.add('dark-bag-color')
        site.classList.add('dark-bag-color')
        for (const titleTim of titleTime) {
            titleTim.classList.add('dark-time-title')
        }
        for (const btnDef of btnDefs) {
            btnDef.classList.add('dark-btn-def')
        }
        calcBtns.classList.add('dark-calc-btns')
        del.classList.add('dark-delet')
        clear.classList.add('dark-clear')
        equal.classList.add('dark-calc')
        timeSkrolerBord.classList.add('dark-time-skroler-bord')
        scrol_num++
    }else if(scrol_num == 3){
        timeSkrolerTime.classList.remove("align-items-end")
        timeSkrolerTime.classList.add('align-items-start')
        header_logo.classList.remove('dark-logo')
        titleTem.classList.remove('dark-title-tem')
        timeSkrolerTime.classList.remove('dark-time-skroler-time')
        display.classList.remove('dark-display')
        dis_calculator.classList.remove('dark-bag-color')
        site.classList.remove('dark-bag-color')
        for (const titleTim of titleTime) {
            titleTim.classList.remove('dark-time-title')
        }
        for (const btnDef of btnDefs) {
            btnDef.classList.remove('dark-btn-def')
        }
        calcBtns.classList.remove('dark-calc-btns')
        del.classList.remove('dark-delet')
        clear.classList.remove('dark-clear')
        equal.classList.remove('dark-calc')
        timeSkrolerBord.classList.remove('dark-time-skroler-bord')
        scrol_num = 1
    }
})


















class Calculyator {
    display
    signViev 
    segnOperator
    operators = ["+","-","%","x"] 
    get firstValue () {
        return display.value[0]
    }

    get LastValue () {
        return display.value[display.value.length - 1]
    }

    setDisplay (value) {
        display.value = display.value + value
    }

    numbers (event) {

        const num = event.target.textContent
        if (this.LastValue == 0 && display.value.length == 1)return display.value = num
        // console.log(event.target.textContent) 
        if (this.LastValue == 0 && this.signViev) return display.value = display.value.slice(0,-1) + num          
    
        this.setDisplay(num)
    }

    signs (event){ 
        // this.segnOperator = null
        // this.signViev = null
        const signViev = event.target.textContent
        const segnOperator = event.target.dataset.sign

        this.segnOperator = segnOperator
        this.signViev = signViev
        if (this.operators.includes(this.LastValue)) return display.value = display.value.slice(0,-1) + signViev
        if (!this.display || this.LastValue == "." || this.segnOperator) return 

        this.setDisplay(signViev)
    }
    dot(event){
        if (
            !display.value || 
            this.operators.includes(this.LastValue)
        )return display.value = display.value + "0."

        if(
            this.LastValue == "." 
        )return

        const dotw = event.target.textContent
        this.setDisplay(dotw)
    }
    dele () {
         let deleted = display.value.split("")
         let newVal = deleted.slice(0,-1).join("")
         display.value = newVal
    }
    clear (){
        display.value = null
    }
    equal () {
        const [num1,num2] = display.value.split(this.signViev)
        display.value = eval(num1 + this.segnOperator + num2)

        this.segnOperator = null
        this.signViev = null
    }
}

const calc = new Calculyator();

for (const number of numbers) {
    number.addEventListener('click',(event)=>{
      return calc.numbers(event)
    })
}
for (const sign of signs) {
    sign.addEventListener("click",(event)=>{
        return calc.signs(event)
    })
}
dot.addEventListener("click",(event)=>{
    return calc.dot(event)
})
clear.addEventListener("click",()=>{
    return calc.clear()
})
del.addEventListener('click',()=>{
    calc.dele()
})
equal.addEventListener("click" , () => {
    calc.equal()
})