const submitForm = document.getElementById('monster-form')
const monsterDiv = document.getElementById('monster-info')
const monsterDescription = document.getElementById('description')


let monsterData = (monsterName) => {
    return fetch('http://localhost:3000/monsters/')
      .then(resp => resp.json())
      .then(data => data.forEach((element) => {
        if (element.name == monsterName) {
           //console.log(element)
           let monsterName = document.getElementById('monster-name')
           monsterName.innerText = element.name
           //let monsterDescription = document.getElementById('description')
           monsterDescription.innerHTML = (`${element.meta}`) 
           //<br><strong>Challenge:</strong> ${element.Challenge}`);
           let monsterImg = document.getElementById('monster-image')
           monsterImg.src = element.img_url
           let monsterButton = document.getElementById('expanded-info-button')
           monsterButton.addEventListener('click', (e) => {
               //console.log(element)
               if(monsterDescription.innerHTML == `${element.meta}`) {
               //<br><strong>Challenge:</strong> ${element.Challenge}`)) {
                   //console.log(monsterDescription.innerHTML)
                   expandMonster(element)
               }
               else{
                   console.log(monsterDescription.innerHTML)
                   shrinkMonster(element)
               } 
               //<br><strong>Challenge:</strong> ${element.Challenge}`))
               
           })

        }
      }))
  }


const expandMonster = (element) => {
    //console.log(element)
    //let newUl = document.createElement('ul')
    //newUl = Object.assign({}, element)
    //console.log(newUl)
    monsterDescription.innerHTML = (`${element.meta}
    <br><strong>Armor Class:</strong> ${element['Armor Class']}
    <br><strong>Hit Points:</strong> ${element['Hit Points']}
    <br><strong>Speed:</strong> ${element.Speed}
    <br><strong>Ability Scores</strong> <br>Strength: ${element.STR} <br>Dexterity: ${element.DEX} <br>Constitution: ${element.CON} <br>Intelligence: ${element.INT} <br>Wisdom: ${element.WIS} <br>Charisma: ${element.CHA}
    <br><strong>Saving Throws:</strong> ${element['Saving Throws']}
    <br><strong>Skills:</strong> ${element.Skills}
    <br><strong>Senses:</strong> ${element.Senses}
    <br><strong>Challenge:</strong> ${element.Challenge}
    <br><strong>Traits:</strong> ${element.Traits}
    <br><strong>Actions:</strong> ${element.Actions}
    <br><strong>Legendary Actions:</strong> ${element['Legendary Actions']}
    `)
    //alert(`${element}`)

} 
const shrinkMonster = (element) => {
    monsterDescription.innerHTML = element.meta
}


submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newMonster = submitForm['monster-search'].value
    //console.log(newMonster)
    monsterData(newMonster)
    submitForm.reset();
    //will reset the kill count when that's added
})