let motik = './images/motik.jpg'
let ormon = './images/ormon.jpg'
let qush = './images/qush.jpg'
let the = './images/the.jpg'
let yulbars = './images/yulbars.jpg'
let yurak = './images/yurak.jpg'

let arr = [motik, ormon, qush, the, yulbars, yurak]

let colors = arr[Math.floor(Math.random() * arr.length)]

let images = document.querySelector('.images') 
images.src= (colors)

let btnback = document.querySelector('#btnback')
let btnforward = document.querySelector('#btnforward')
let btnrandom = document.querySelector('#btnrandom')
btnrandom.addEventListener ('click', function (){
    clickMe()
})
let number = 6
btnback.addEventListener ('click', function (){
    number -- 
        images.src= (arr[number])
        if(number == 0 ){
            number = 6
        }
})

btnforward.addEventListener ('click', function (){
    if(number == arr.length ){
        if(undefined === images.src){
            images.src = 0
        }
        number = 0
        images.src= (arr[number])
    }
    number ++
        images.src= (arr[number])  
})

function clickMe(){
    let arr = [motik, ormon, qush, the, yulbars, yurak]

    let colors = arr[Math.floor(Math.random() * arr.length)]
    
    let images = document.querySelector('.images') 
    
    images.src= (colors)
    
}
