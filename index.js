fetch('http://localhost:3000/monsters/')
.then(resp => resp.json())
.then(data => data.forEach(element => {
    element.killCount = 0;
    fetch('http://localhost:3000/monstersUpdated', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(element)
    })
    .then(res => res.text())
    .then(dat => console.log(dat))
  }))

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

//Adding randomizer:
const randomMonsterBtn = document.querySelector('button#monster-randomizer')
randomMonsterBtn.addEventListener('click', e => {
  let randomNum = Math.floor(Math.random() * 327)
  return fetch('http://localhost:3000/monsters/')
  .then(resp => resp.json())
  .then(data => console.log(data[randomNum]))
})

//adding persistent kill count function to kill button
const killCountBtn = document.querySelector('button#kill-button')
killCountBtn.addEventListener('click', e => {

})