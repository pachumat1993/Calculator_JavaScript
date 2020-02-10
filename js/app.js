// 1 sprawdzenie czy skrypt  działa prawidłowo 
console.log("Skrypt jest podpięty--działa prawidłowo")

// 2 Określenie wartości stałych :
// pobranie stałych, wartości które się nie zmieniają, czyli button dodaj, odejmij, pomnóż, podziel, pierwiastek, wynik, wyczysc

const buttonAddition = document.getElementById("btn-add")
const buttonSubstraction = document.getElementById("btn-subtract")
const buttonMultiplication = document.getElementById("btn-multiply")
const buttonDivison = document.getElementById("btn-divide")
const buttonSquareRoot= document.getElementById("btn-squareRoot")
const curentResult = document.getElementById("current-result")
const buttonClear = document.getElementById("btn-clear")


// 3 Napisanie funkcji na dodawanie, wraz z funkcją NaN

function addition (){
    let inputNumber = document.getElementById("input-number")
    let inputNumberTwo = document.getElementById("input-number2")


    resultAddition = parseInt(inputNumber.value) + parseInt(inputNumberTwo.value)
    document.getElementById("current-result").innerHTML = resultAddition 

    if(isNaN(resultAddition)){
        document.getElementById("current-result").innerHTML = "Enter a Value"
    }



}

// 4 podpięcie zdarzenia Klik pod button addition 
buttonAddition.addEventListener("click",addition)



// 5 Napisanie funkcji na odejmowanie 

function substraction (){
    let inputNumber = document.getElementById("input-number")
    let inputNumberTwo = document.getElementById("input-number2")

    resultSubstraction = parseInt(inputNumber.value) - parseInt(inputNumberTwo.value)
    document.getElementById("current-result").innerHTML = resultSubstraction

    if(isNaN( resultSubstraction)){
        document.getElementById("current-result").innerHTML = "Enter a Value"
    }

  
}

// 6 podpięcie zdarzenia Klik pod button substraction 

buttonSubstraction.addEventListener("click",substraction)



// 7 Napisanie funkcji na mnożenie 

function multiplication (){
    let inputNumber = document.getElementById("input-number")
    let inputNumberTwo = document.getElementById("input-number2")

    resultMultiplication = parseInt(inputNumber.value) * parseInt(inputNumberTwo.value)
    document.getElementById("current-result").innerHTML =  resultMultiplication

    if(isNaN(resultMultiplication)){
        document.getElementById("current-result").innerHTML = "Enter a Value"
    }

    
}


// 8 podpięcie zdarzenia Klik pod button multiplication 

buttonMultiplication.addEventListener("click", multiplication)

// 9 Napisanie funkcji na dzielenie 

function division (){
    let inputNumber = document.getElementById("input-number")
    let inputNumberTwo = document.getElementById("input-number2")

    resultDivision = parseInt(inputNumber.value) / parseInt(inputNumberTwo.value)
    document.getElementById("current-result").innerHTML = resultDivision

    if(isNaN(resultDivision)){
        document.getElementById("current-result").innerHTML = "Enter a Value"
    }

}

// 10 podpięcie zdarzenia Klik pod button division

buttonDivison.addEventListener("click",division)


// 11 Napisanie funkcji która kasuje wartość 

function clear () {
    let clear1= document.getElementById("input-number").value = " "
    let clear2 =  document.getElementById("input-number2").value = " "
    resultClear = clear1+clear2
    document.getElementById("current-result").innerHTML = resultClear + "Enter a Value"


}


// 12 podpięcie zdarzenie Klik pod buttonClear z funkcją clear
buttonClear.addEventListener("click", clear)


// 13 zakonczono pisanie skryptu JavaScript, obsługującego kalkulator
