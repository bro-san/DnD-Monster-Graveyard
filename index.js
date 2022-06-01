
const submitForm = document.getElementById('monster-form')

let monsterData = (monsterName) => {
    return fetch('http://localhost:3000/monsters/')
      .then(resp => resp.json())
      .then(data => data.forEach((element) => {
        if (element.name == monsterName) {
           console.log(element)
           let monsterName = document.getElementById('monster-name')
           monsterName.innerText = element.name
           let monsterDescription = document.getElementById('description')
           monsterDescription.innerText = element.Traits
           let monsterImg = document.getElementById('monster-image')
           monsterImg.src = element.img_url
           let monsterButton = document.getElementById('expanded-info-button')
           monsterButton.addEventListener('click', (e) => {
               console.log(element)
           })
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