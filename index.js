const submitForm = document.getElementById('monster-form')
const monsterDiv = document.getElementById('monster-info')
const monsterDescription = document.getElementById('description')
const monsterButton = document.getElementsByClassName("collapsible");
const killCount = document.getElementById('kill-count')

var monster
var monsterData;

fetch('http://localhost:3000/monsters/')
  .then(res => res.json())
  .then(data => monsterData = data)

// let i;
// for (i = 0; i < monsterButton.length; i++) {
//     monsterButton[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

function displayMonster (element) {
          monster = element 
          let monsterName = document.getElementById('monster-name')
           monsterName.innerText = element.name
           monsterDescription.innerHTML = (`${element.meta}`) 
           let monsterImg = document.getElementById('monster-image')
           monsterImg.src = element.img_url
           let creatureName = document.querySelector("#creature-name")
           creatureName.textContent = element.name
           let monsterMeta = document.querySelector('#monster-meta')
           monsterMeta.textContent = element.meta
           let monsterDetails = document.getElementById('expanded-description')
           monsterDetails.innerHTML = (
            `<strong>Armor Class:</strong> ${element['Armor Class']}
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
           killCount.innerHTML = element.kill_count
  }

let killCountBtn = document.querySelector('button#kill-button')
           killCountBtn.addEventListener('click', e => {
            updateKills(monster.kill_count)
            //saveKills(monster)
           })
  function updateKills (e) {
  currentKills = parseInt(killCount.textContent, 10)
  killCount.textContent = `${currentKills + 1}`
}

submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newMonster = submitForm['monster-search'].value;
    monsterData.forEach(element => {if (element.name.toUpperCase() == newMonster.toUpperCase()) {displayMonster(element)}
})
    submitForm.reset();
    //will reset the kill count when that's added
})

//Adding randomizer:
const randomMonsterBtn = document.querySelector('button#monster-randomizer')
randomMonsterBtn.addEventListener('click', e => {
  let randomNum = Math.floor(Math.random() * 327)
  displayMonster(monsterData[randomNum]);

})

//adding persistent kill count function to kill button
// const killCountBtn = document.querySelector('button#kill-button')
// killCountBtn.addEventListener('click', e => {

const submitCharForm = document.getElementById('grave-form')
const graveNav = document.getElementById('graves')

submitCharForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newGrave = document.createElement('div')
    newGrave.classList.add("grave")
    //newGrave.addClass('grave')
    let deceasedName = document.createElement('h4')
    deceasedName.innerText = e.target['character-name'].value
    let deceasedInfo = document.createElement('p')
    deceasedInfo.innerText = `Level ${e.target['character-level'].value}` + `\n` + `${e.target['character-race'].value}\n${e.target['character-class'].value}`
    console.log(deceasedInfo.innerHTML)
    deceasedName.append(deceasedInfo)
    newGrave.append(deceasedName)
    graveNav.appendChild(newGrave)


    // let deceasedClass = document.createElement('h5')
    // deceasedClass.innerText = e.target['character-class'].value
    // let deceasedRace = document.createElement('h5')
    // deceasedRace.innerText = e.target['character-race'].value
    // let deceasedLevel = document.createElement('h5')
    // deceasedClass.innerText = e.target['character-level'].value
    // graveNav.appendChild(deceasedName, deceasedRace, deceasedClass, deceasedLevel)

    console.log(deceasedName.innerText);
    console.log('click')
    submitCharForm.reset();
})

//const digGrave = 

{/* <div id="graveyard">
<form id="grave-form">
  <label for="character-filler"></label>
  <input type="text" id="character-name" name="charName" placeholder="Character Name">
  <input type="text" id="character-race" name="charRace" placeholder="Character Race">
  <input type="text" id="character-class" name="charClass" placeholder="Character Class">
  <input type="text" id="character-level" name="charLevel" placeholder="Character Level">
  <input type="submit" value="Remember the Fallen">
</form>
<nav id="graves"></nav> */}

const openModelButton = document.querySelector('[data-modal-target]')
const closeModelButton = document.querySelector('[data-modal-close]')
const overlay = document.querySelector('#overlay')

openModelButton.addEventListener('click', () => {
    const modal = document.querySelector(openModelButton.dataset.modalTarget)
    openModal(modal)
    console.log(modal)

})
closeModelButton.addEventListener('click', () => {
    const modal = closeModelButton.closest('.modal-container')
    closeModal(modal)
    console.log(modal)

})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    modal.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    modal.classList.remove('active')
}

function monsterDataUpdater () {
  monsterData.forEach(element => {
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
  })
}