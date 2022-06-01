
const submitForm = document.getElementById('monster-form')

let monsterData = (monsterName) => {
    return fetch('http://localhost:3000/monsters/')
      .then(resp => resp.json())
      .then(data => data.forEach((element) => {
        if (element.name == monsterName) {
           console.log(element)
        }
      }))
  }

submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newMonster = submitForm['monster-search'].value
    //console.log(newMonster)
    monsterData(newMonster)
    submitForm.reset();
    //will reset the kill count when that's added
})