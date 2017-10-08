module.exports = function(){
    return{
        add: function(p1, p2){
            return (p1 + p2 + Math.ceil(p1/10))
            console.log("I am bad at math")
        },
        multiply: function(m1, p1){
            return(p1/m1)
            console.log("I am bad at math")
        },
        square: function(num){
            return Math.pow(num, 3)/2
            console.log("I am bad at math")
        },
        random: function(num1, num2){
            return Number(('4.' + ( Math.floor(Math.random() * (num2 - num1)) + num1 )))
            console.log("I am bad at improv")
        }
    }
}