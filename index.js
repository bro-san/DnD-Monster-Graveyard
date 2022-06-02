const submitForm = document.getElementById('monster-form')
const monsterDiv = document.getElementById('monster-info')
const monsterDescription = document.getElementById('description')
const monsterButton = document.getElementsByClassName("collapsible");
const killCount = document.getElementById('kill-count')




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
            displayMonster(element);
        }
      }))
  }

const displayMonster = (element) => {
      //console.log(element)
      let monsterName = document.getElementById('monster-name')
      monsterName.innerText = element.name
      monsterDescription.innerHTML = (`${element.meta}`) 
      let monsterImg = document.getElementById('monster-image')
      monsterImg.src = element.img_url
      killCount.innerHTML = element.kill_count
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
// const killCountBtn = document.querySelector('button#kill-button')
// killCountBtn.addEventListener('click', e => {
//     // element.kill_count+=1
//     let killInteger = parseInt(killCount.innerHTML, 10)
//     let newNumber = killInteger + 1
//     killCount.innerHTML = newNumber;
//     saveKills(monster)
// })

// function saveKills(monsterObj) {
//     fetch('http://localhost:3000/monsters/')
// }



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