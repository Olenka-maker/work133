//Recursion
const arr1 = [1, null, true, 11, 0]

for (let a = 0; a <= arr1.length - 1; a++) {
    console.log(arr1[a])
}

function RecursionArray(arr, i = 0) {
    //const rand = Math.random()
    //console.log(rand)

    //if(rand > 0.5){
    //   RecursionArray()}

    if (arr.length > i) {
        console.log(arr[i])
        RecursionArray(arr, ++i)
    }
}
console.log('__________________')
RecursionArray(arr1)
console.log('__________________')
RecursionArray([12, 655, 55, 55, 588])

function RecursionArray1(arr, i = 0) {
    if (arr.length < i) return

    console.log(arr[i]);
    RecursionArray(arr, ++i)
}

console.log('__________________')

//Closes
function stepper() {
    var num = 0
    function dec() {
        num++
    }
    function inc() {
        num--
    }

    function getNum(){
        return num
    }
    return {
        dec: dec,
        inc: inc,
        getNum: getNum
    }
}

//console.log(stepper())
//console.log(stepper().num)
//stepper().dec()
//console.log(stepper().num)

let objStepper = stepper()
console.log(objStepper)

objStepper.dec()
console.log(objStepper);

const a2 = stepper()
console.log(a2.getNum(), objStepper.getNum());

//Callback 
function clearHouse(isClean, cb){
    if(isClean){
        cb(500)
    } else{
        cb('Should cleaar before get money')
    }
}

function shop(money, cb){
    const priceOfJeans = 0

    if(money >= priceOfJeans){
        const rest = money - priceOfJeans
        cb(rest)
    }else{
        cb('Not enough money')
    }
}

function mac(money, cb){
    const priceOfBurger = 100
    if(money >= priceOfBurger){
        const rest = money - priceOfBurger
        cb(rest)
    }else{
        cb('Need more mone');
    }
}




clearHouse(true,(response) =>{
    if(typeof response === 'number'){
        console.log('Yraaaa, i got money!!!');
        shop(response, (restJeans)=> {
            if(typeof restJeans === 'number'){
                console.log('Yraaaa i bought jeans, i have rest: ', restJeans);
                mac(restJeans, (restBurger) => {
                    if(typeof restBurger === 'number'){
                        console.log('Yummy, Yummy!! I have ', restBurger);  
                    }else{
                        console.log('I was hungry all day');
                        
                    }
                })
            
            }else{
                console.log('Salary is too low');   
            }
        })
    }else{
        console.log('not lucky not lucky :( ');
        
    }
} )