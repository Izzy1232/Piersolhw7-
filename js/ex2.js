console.log("Piersol's Output from HW 6 Example 2");

const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
 ];

// i will fill the dropdown menu with house namess
const fillMenu = () => {
  const menu = document.getElementById("house")
  houses.forEach(house => {
    const option = document.createElement("option")
    option.value = house.code
    option.textContent = house.name
    menu.appendChild(option)
  })
}

const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; 
  }
}
let list = () => {
  let h = document.getElementById("house")
  let charactersList = document.getElementById("characters")

  
  h.addEventListener("change", () => {
    let x = h.value

   
    charactersList.innerHTML = ""
    let characters = getCharacters(x)
    characters.forEach(character => {
      const li = document.createElement("li")
      li.textContent = character
      charactersList.appendChild(li)
    })
  })
}
document.addEventListener("DOMContentLoaded", () => {
  fillMenu()
  list() 
})
