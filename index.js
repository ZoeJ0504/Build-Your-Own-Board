document.addEventListener("DOMContentLoaded", () => {
  // variables for the board being used
let arrayRes;
let random;
let answerValid = document.getElementById("answer-validate")
let answerButton = document.getElementById("check-answer");
let inputAnswer = document.getElementById("user-answer");
let closeButton  = document.getElementById("close");
let userScore = document.getElementById("span")
let score;
//variables for the individual buttons
let twoA =document.getElementById("category-a-two")
let fourA = document.getElementById('category-a-four')
let sixA = document.getElementById("category-a-six")
let eightA = document.getElementById("category-a-eight")
let thousandA = document.getElementById("category-a-thousand")
let twoB =document.getElementById("category-b-two")
let fourB = document.getElementById('category-b-four')
let sixB = document.getElementById("category-b-six")
let eightB = document.getElementById("category-b-eight")
let thousandB = document.getElementById("category-b-thousand")
let twoC =document.getElementById("category-c-two")
let fourC = document.getElementById('category-c-four')
let sixC = document.getElementById("category-c-six")
let eightC = document.getElementById("category-c-eight")
let thousandC = document.getElementById("category-c-thousand")
let twoD =document.getElementById("category-d-two")
let fourD = document.getElementById('category-d-four')
let sixD = document.getElementById("category-d-six")
let eightD = document.getElementById("category-d-eight")
let thousandD = document.getElementById("category-d-thousand")
let twoE =document.getElementById("category-e-two")
let fourE = document.getElementById('category-e-four')
let sixE = document.getElementById("category-e-six")
let eightE = document.getElementById("category-e-eight")
let thousandE = document.getElementById("category-e-thousand")
let twoF =document.getElementById("category-f-two")
let fourF = document.getElementById('category-f-four')
let sixF = document.getElementById("category-f-six")
let eightF = document.getElementById("category-f-eight")
let thousandF = document.getElementById("category-f-thousand")
// function to make the buttons disappear
function makeButtonsGoBye (){
twoA.style.display = 'none'
fourA.style.display = 'none'
sixA.style.display = 'none'
eightA.style.display = 'none'
thousandA.style.display = 'none'
twoB.style.display = 'none'
fourB.style.display = 'none'
sixB.style.display = 'none'
eightB.style.display = 'none'
thousandB.style.display = 'none'
twoC.style.display = 'none'
fourC.style.display = 'none'
sixC.style.display = 'none'
eightC.style.display = 'none'
thousandC.style.display = 'none'
twoD.style.display = 'none'
fourD.style.display = 'none'
sixD.style.display = 'none'
eightD.style.display = 'none'
thousandD.style.display = 'none'
twoE.style.display = 'none'
fourE.style.display = 'none'
sixE.style.display = 'none'
eightE.style.display = 'none'
thousandE.style.display = 'none'
twoF.style.display = 'none'
fourF.style.display = 'none'
sixF.style.display = 'none'
eightF.style.display = 'none'
thousandF.style.display = 'none'

}
makeButtonsGoBye()
const modal = document.getElementById("exampleModal")

const dropdownOne = document.getElementById("first-dropdown")
dropdownOne.addEventListener('change', (e) => {
    const hope = e.target.options[e.target.selectedIndex].id
    fetch (`https://jservice.io/api/category?id=${hope}`)
    .then(res => res.json())
    .then(data => getValuesA(data)
    )
    twoA.style.display = 'block'
fourA.style.display = 'block'
sixA.style.display = 'block'
eightA.style.display = 'block'
thousandA.style.display = 'block'
})

function getValuesA (data){

    twoA.addEventListener("click", (e) => {
        arrayRes = data.clues.filter(item => item.value = 200)
        let  test = document.getElementById("test")
        random = Math.floor(Math.random() * arrayRes.length)
        console.log(random, arrayRes[random])
        test.textContent= arrayRes[random].question
        document.getElementById("staticBackdropLabel").textContent= 200
        test.style.display = 'none'
    })
   
  fourA.addEventListener("click", (e) => {
     arrayRes = data.clues.filter(item => item.value = 400)
    let test = document.getElementById("test")
    random = Math.floor(Math.random() * arrayRes.length)
    console.log(random, arrayRes[random])
    test.textContent= arrayRes[random].question
    document.getElementById("staticBackdropLabel").textContent= 400
    fourA.style.display = 'none'
})

sixA.addEventListener("click", (e) => {
    arrayRes = data.clues.filter(item => item.value = 600)
 let test = document.getElementById("test")
    random = Math.floor(Math.random() * arrayRes.length)
  console.log(random, arrayRes[random])
  test.textContent= arrayRes[random].question
  document.getElementById("staticBackdropLabel").textContent= 600
  sixA.style.display = 'none'
})
eightA.addEventListener("click", (e) => {
     arrayRes = data.clues.filter(item => item.value = 800)
  let test = document.getElementById("test")
    random = Math.floor(Math.random() * arrayRes.length)
  console.log(random, arrayRes[random])
  test.textContent= arrayRes[random].question
  document.getElementById("staticBackdropLabel").textContent= 800
  eightA.style.display = 'none'
})
thousandA.addEventListener("click", (e) => {
    arrayRes = data.clues.filter(item => item.value = 1000)
    let test = document.getElementById("test")
    random = Math.floor(Math.random() * arrayRes.length)
  console.log(random, arrayRes[random])
  test.textContent= arrayRes[random].question
  document.getElementById("staticBackdropLabel").textContent= 1000
  thousandA.style.display = 'none'
})

}

const dropdownTwo = document.getElementById("second-dropdown")
dropdownTwo .addEventListener('change', (e) => {
    const hope = e.target.options[e.target.selectedIndex].id
    fetch (`https://jservice.io/api/category?id=${hope}`)
    .then(res => res.json())
    .then(data => getValuesB(data)
    )
    twoB.style.display = 'block'
fourB.style.display = 'block'
sixB.style.display = 'block'
eightB.style.display = 'block'
thousandB.style.display = 'block'
})
function getValuesB (data){
    twoB.addEventListener("click", (e) => {
        arrayRes = data.clues.filter(item => item.value = 200)
        const test = document.getElementById("test")
        random = Math.floor(Math.random() * arrayRes.length)
        console.log(random, arrayRes[random])
        test.textContent= arrayRes[random].question
        document.getElementById("staticBackdropLabel").textContent= 200
        twoB.style.display = 'none'
    })
  fourB.addEventListener("click", (e) => {
    arrayRes = data.clues.filter(item => item.value = 400)
    let test = document.getElementById("test")
    random = Math.floor(Math.random() * arrayRes.length)
    console.log(random, arrayRes[random])
    test.textContent= arrayRes[random].question
    document.getElementById("staticBackdropLabel").textContent= 400
    fourB.style.display = 'none'
})
sixB.addEventListener("click", (e) => {
  arrayRes = data.clues.filter(item => item.value = 600)
  let test = document.getElementById("test")
  random = Math.floor(Math.random() * arrayRes.length)
  console.log(random, arrayRes[random])
  test.textContent= arrayRes[random].question
  document.getElementById("staticBackdropLabel").textContent= 600
  sixB.style.display = 'none'
})
eightB.addEventListener("click", (e) => {
    arrayRes = data.clues.filter(item => item.value = 800)
    let test = document.getElementById("test")
    random = Math.floor(Math.random() * arrayRes.length)
    console.log(random, arrayRes[random])
    TextMetrics.textContent= arrayRes[random].question
    document.getElementById("staticBackdropLabel").textContent= 800
    eightB.style.display = 'none'
  })
thousandB.addEventListener("click", (e) => {
  arrayRes = data.clues.filter(item => item.value = 1000)
  let test = document.getElementById("test")
  random = Math.floor(Math.random() * arrayRes.length)
  console.log(random, arrayRes[random])
  test.textContent= arrayRes[random].question
  document.getElementById("staticBackdropLabel").textContent= 1000
  thousandB.style.display = 'none'
})
}

const dropdownThree = document.getElementById("third-dropdown")
dropdownThree .addEventListener('change', (e) => {
    const hope = e.target.options[e.target.selectedIndex].id
    fetch (`https://jservice.io/api/category?id=${hope}`)
    .then(res => res.json())
    .then(data => getValuesC(data)
    )
    twoC.style.display = 'block'
fourC.style.display = 'block'
sixC.style.display = 'block'
eightC.style.display = 'block'
thousandC.style.display = 'block'
})
function getValuesC (data){
    twoC.addEventListener("click", (e) => {
        arrayRes = data.clues.filter(item => item.value = 200)
        let test = document.getElementById("test")
        random = Math.floor(Math.random() * arrayRes.length)
        console.log(random, arrayRes[random])
        test.textContent= arrayRes[random].question
        document.getElementById("staticBackdropLabel").textContent= 200
        twoC.style.display = 'none'
    })
  fourC.addEventListener("click", (e) => {
    arrayRes = data.clues.filter(item => item.value = 400)
    let test = document.getElementById("test")
     random = Math.floor(Math.random() * arrayRes.length)
    console.log(random, arrayRes[random])
    test.textContent= arrayRes[random].question
    document.getElementById("staticBackdropLabel").textContent= 400
    fourC.style.display = 'none'
})
sixC.addEventListener("click", (e) => {
   arrayRes = data.clues.filter(item => item.value = 600)
  let test = document.getElementById("test")
  random = Math.floor(Math.random() * arrayRes.length)
  console.log(random, arrayRes[random])
  test.textContent= arrayRes[random].question
  document.getElementById("staticBackdropLabel").textContent= 600
  sixC.style.display = 'none'
})
eightC.addEventListener("click", (e) => {
  arrayRes = data.clues.filter(item => item.value = 800)
  let test = document.getElementById("test")
  random = Math.floor(Math.random() * arrayRes.length)
  console.log(random, arrayRes[random])
  test.textContent= arrayRes[random].question
  document.getElementById("staticBackdropLabel").textContent= 800
  eightC.style.display = 'none'
})
thousandC.addEventListener("click", (e) => {
  arrayRes = data.clues.filter(item => item.value = 1000)
  let test = document.getElementById("test")
  random = Math.floor(Math.random() * arrayRes.length)
  console.log(random, arrayRes[random])
  test.textContent= arrayRes[random].question
  document.getElementById("staticBackdropLabel").textContent= 1000
  thousandC.style.display = 'none'
})
}

const dropdownFour = document.getElementById("fourth-dropdown")
dropdownFour.addEventListener('change', (e) => {
    const hope = e.target.options[e.target.selectedIndex].id
    fetch (`https://jservice.io/api/category?id=${hope}`)
    .then(res => res.json())
    .then(data => getValuesD(data)
    )
twoD.style.display = 'block'
fourD.style.display = 'block'
sixD.style.display = 'block'
eightD.style.display = 'block'
thousandD.style.display = 'block'
})
function getValuesD (data){
    twoD.addEventListener("click", (e) => {
        arrayRes = data.clues.filter(item => item.value = 200)
        let test = document.getElementById("test")
        random = Math.floor(Math.random() * arrayRes.length)
        console.log(random, arrayRes[random])
         test.textContent= arrayRes[random].question
        document.getElementById("staticBackdropLabel").textContent= 200
        twoD.style.display = 'none'
    })
  fourD.addEventListener("click", (e) => {
    arrayRes = data.clues.filter(item => item.value = 400)
    let  test = document.getElementById("test")
    random = Math.floor(Math.random() * arrayRes.length)
    console.log(random, arrayRes[random])
    test.textContent= arrayRes[random].question
    document.getElementById("staticBackdropLabel").textContent= 400
    fourD.style.display = 'none'
})
sixD.addEventListener("click", (e) => {
    arrayRes = data.clues.filter(item => item.value = 600)
    let test = document.getElementById("test")
    random = Math.floor(Math.random() * arrayRes.length)
    console.log(random, arrayRes[random])
     test.textContent= arrayRes[random].question
    document.getElementById("staticBackdropLabel").textContent= 600
    sixD.style.display = 'none'
})
eightD.addEventListener("click", (e) => {
  arrayRes = data.clues.filter(item => item.value = 800)
  let  test = document.getElementById("test")
  random = Math.floor(Math.random() * arrayRes.length)
  console.log(random, arrayRes[random])
  test.textContent= arrayRes[random].question
  document.getElementById("staticBackdropLabel").textContent= 800
  eightD.style.display = 'none'
})
thousandD.addEventListener("click", (e) => {
  arrayRes = data.clues.filter(item => item.value = 1000)
  let test = document.getElementById("test")
  random = Math.floor(Math.random() * arrayRes.length)
  console.log(random, arrayRes[random])
  test.textContent= arrayRes[random].question
  document.getElementById("staticBackdropLabel").textContent= 1000
  thousandD.style.display = 'none'
})
}
const dropdownFive = document.getElementById("fifth-dropdown")
dropdownFive.addEventListener('change', (e) => {
    const hope = e.target.options[e.target.selectedIndex].id
    fetch (`https://jservice.io/api/category?id=${hope}`)
    .then(res => res.json())
    .then(data => getValuesE(data)
    )
twoE.style.display = 'block'
fourE.style.display = 'block'
sixE.style.display = 'block'
eightE.style.display = 'block'
thousandE.style.display = 'block'
})
function getValuesE (data){
    twoE.addEventListener("click", (e) => {
        arrayRes = data.clues.filter(item => item.value = 200)
        let test = document.getElementById("test")
        random = Math.floor(Math.random() * arrayRes.length)
        console.log(random, arrayRes[random])
        test.textContent= arrayRes[random].question
        document.getElementById("staticBackdropLabel").textContent= 200
        twoE.style.display = 'none'
    })
  fourE.addEventListener("click", (e) => {
    arrayRes = data.clues.filter(item => item.value = 400)
    let test = document.getElementById("test")
    random = Math.floor(Math.random() * arrayRes.length)
    console.log(random, arrayRes[random])
    test.textContent= arrayRes[random].question
    document.getElementById("staticBackdropLabel").textContent= 400
    fourE.style.display = 'none'
})
sixE.addEventListener("click", (e) => {
  arrayRes = data.clues.filter(item => item.value = 600)
  let test = document.getElementById("test")
  random = Math.floor(Math.random() * arrayRes.length)
  console.log(random, arrayRes[random])
  test.textContent= arrayRes[random].question
  document.getElementById("staticBackdropLabel").textContent= 600
  sixE.style.display = 'none'
})
eightE.addEventListener("click", (e) => {
  arrayRes = data.clues.filter(item => item.value = 800)
  let test = document.getElementById("test")
  random = Math.floor(Math.random() * arrayRes.length)
  console.log(random, arrayRes[random])
  test.textContent= arrayRes[random].question
  document.getElementById("staticBackdropLabel").textContent= 800
  eightE.style.display = 'none'
})
thousandE.addEventListener("click", (e) => {
  arrayRes = data.clues.filter(item => item.value = 1000)
  let test = document.getElementById("test")
  random = Math.floor(Math.random() * arrayRes.length)
  console.log(random, arrayRes[random])
  test.textContent= arrayRes[random].question
  document.getElementById("staticBackdropLabel").textContent= 1000
  thousandE.style.display = 'none'
})
}
const dropdownSix = document.getElementById("sixth-dropdown")
dropdownSix.addEventListener('change', (e) => {
    const hope = e.target.options[e.target.selectedIndex].id
    fetch (`https://jservice.io/api/category?id=${hope}`)
    .then(res => res.json())
    .then(data => getValuesF(data)
    )
    twoF.style.display = 'block'
    fourF.style.display = 'block'
    sixF.style.display = 'block'
    eightF.style.display = 'block'
    thousandF.style.display = 'block'
})
function getValuesF (data){
    twoF.addEventListener("click", (e) => {
        arrayRes = data.clues.filter(item => item.value = 200)
       let test = document.getElementById("test")
       random = Math.floor(Math.random() * arrayRes.length)
        console.log(random, arrayRes[random])
        test.textContent= arrayRes[random].question
        document.getElementById("staticBackdropLabel").textContent= 200
        twoF.style.display = 'none'
    })
  fourF.addEventListener("click", (e) => {
    arrayRes = data.clues.filter(item => item.value = 400)
   let test = document.getElementById("test")
   random = Math.floor(Math.random() * arrayRes.length)
    console.log(random, arrayRes[random])
    test.textContent= arrayRes[random].question
    document.getElementById("staticBackdropLabel").textContent= 400
    fourF.style.display = 'none'
})
sixF.addEventListener("click", (e) => {
  arrayRes = data.clues.filter(item => item.value = 600)
  let test = document.getElementById("test")
  random = Math.floor(Math.random() * arrayRes.length)
  console.log(random, arrayRes[random])
  test.textContent= arrayRes[random].question
  document.getElementById("staticBackdropLabel").textContent= 600
  sixF.style.display = 'none'
})
eightF.addEventListener("click", (e) => {
 arrayRes = data.clues.filter(item => item.value = 800)
  let test = document.getElementById("test")
  random = Math.floor(Math.random() * arrayRes.length)
  console.log(random, arrayRes[random])
  test.textContent= arrayRes[random].question
  document.getElementById("staticBackdropLabel").textContent= 800
  eightF.style.display = 'none'
})
thousandF.addEventListener("click", (e) => {
  arrayRes = data.clues.filter(item => item.value = 1000)
 let test = document.getElementById("test")
  random = Math.floor(Math.random() * arrayRes.length)
  console.log(random, arrayRes[random])
  test.textContent= arrayRes[random].question
  document.getElementById("staticBackdropLabel").textContent= 1000
  thousandF.style.display = 'none'
})
}

answerButton.addEventListener('click', () => {
    if(arrayRes[random].answer.toUpperCase() === inputAnswer.value.toUpperCase())
    { answerValid.textContent = "Correct!"
    score = parseInt(userScore.textContent) + parseInt(arrayRes[random].value)
    console.log(userScore.textContent)
    userScore.innerText = score}
    else {answerValid.textContent= `Incorrect! Correct Answer: ${arrayRes[random].answer}` }
        closeButton.addEventListener("click", () => {
            answerValid.textContent = ""
            inputAnswer.value = ""
        })

  })
})