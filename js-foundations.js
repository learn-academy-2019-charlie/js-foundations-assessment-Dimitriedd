// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
console.log("1.")
var multipleOf3 =  function(num){
    if(num%3===0){
        console.log(`${num} is divisible by three`)
    }else{
        console.log(`${num} is not divisible by three`)
    }
}
multipleOf3(3)
multipleOf3(7)
multipleOf3(12)

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
console.log("2.")
var helloMe={
    first_name:"Dimitri",
    last_name:"Collas",
    fav_color:"blue",
    fav_food:"pizza",
    returnData: function(){
        return(`First name: ${this.first_name} | Last name: ${this.last_name} | Favorite color: ${this.fav_color} | Favorite food: ${this.fav_food}`)
    }
}
console.log(helloMe.returnData())

// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
console.log("3.")
var groceryItems=["milk","cheese","eggs","apples","chicken"]
var testGrocery=["milk","cheese","eggs","apples","chicken","bread"]
var sortList=function(arr){
    let newArr=[]
        if(arr.length>=3){
            if(arr.length%2===0){
                let half=arr.length/2
                let full=arr.length - 1
                newArr.push(arr[0],arr[half-1],arr[half],arr[full])
            }else{
                let place = ((arr.length+1)/2)-1
                let fullNext=arr.length - 1
                newArr.push(arr[0],arr[place],arr[fullNext])
            }
        }
    return newArr.join(" ")
}
console.log(sortList(groceryItems))
console.log(sortList(testGrocery))


// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.
console.log("4.")
var aString="dimitri collas"
var alphabetSoup=function(str){
    let newArr= str.split("")
    let sortArr = newArr.sort()
    let newStr= sortArr.join("")
    return newStr
}
console.log(alphabetSoup(aString))

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.
console.log("5. ")
var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

var animalNums=function(arr1,arr2){
    let newArr=[]
    if(arr1.length===arr2.length){
        for(let i=0;i<arr1.length;i++){
             newArr.push(`${arr1[i]} ${arr2[i]}`)
        }
    }else{
        return "arrays are not the same length"
    }
    for(let i=0;i<newArr.length;i++){
        console.log(newArr[i])
    }
}

animalNums(nums, nouns)

// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
console.log("6.")
var numbers5 = [4,3,1,7,4]
var mult5=(arr)=>{
    return arr.map(value=>value*5)
}
console.log(mult5(numbers5))