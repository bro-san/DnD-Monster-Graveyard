const submitForm = document.getElementById('monster-form')
const monsterDiv = document.getElementById('monster-info')
const monsterDescription = document.getElementById('description')
const monsterButton = document.getElementsByClassName("collapsible");




let i;
for (i = 0; i < monsterButton.length; i++) {
    monsterButton[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

let monsterData = (monsterName) => {
    return fetch('http://localhost:3000/monsters/')
      .then(resp => resp.json())
      .then(data => data.forEach((element) => {
        if (element.name.toUpperCase() == monsterName.toUpperCase()) {
           //console.log(element)
           let monsterName = document.getElementById('monster-name')
           monsterName.innerText = element.name
           monsterDescription.innerHTML = (`${element.meta}`) 
           let monsterImg = document.getElementById('monster-image')
           monsterImg.src = element.img_url
           let monsterDetails = document.getElementById('expanded-description')
           monsterDetails.innerHTML = (`<strong>Armor Class:</strong> ${element['Armor Class']}
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