//Nathan Allen
//Assignment 2 - Prime Spiral
//

const HEIGHT = 500
const WIDTH = 500
let scaler = .5

let isPrime = function(num){
    //for each integer from 2 to the square root of the number
    for (let i=2; i<=sqrt(num); i++){
        //if the integer divides into the number evenly (no remainder)
        if (num%i == 0){
            //the number is not prime
            return false
        }
    }
    //if none of the numbers divide evenly, the number is prime
    return true
}


function setup() {
    //set up the canvas
    createCanvas(HEIGHT, WIDTH);  
    //draw static backgroun
    background(220);
}

function draw() {
    //for each integer up to the size of the canvas
    for(let i=1; i<=(HEIGHT/2)/scaler; i++){
        //if the number is prime
        if(isPrime(i)){
            //move to the center of the canvas
            translate(WIDTH/2, HEIGHT/2)
            //rotate the canvas by i radians
            rotate(i*scaler)
            //draw a point, distance = i
            point(i*scaler,0)
            //reset the translation matrix
            resetMatrix()
        }
    }

}