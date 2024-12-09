console.log("Piersol's Output from HW 6 Example 3");

const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
  ];


let input = document.getElementById("country")
let s = document.getElementById("suggestions")
input.addEventListener("input", () => {
  let userInput = input.value.toLowerCase()
  s.innerHTML = ""

if (userInput.length > 0) {
  let filter = countryList.filter(country =>
      country.toLowerCase().startsWith(userInput)
    )
    filter.forEach(country => {
      let suggestionItem = document.createElement("div")
      suggestionItem.classList.add("suggestion")
      suggestionItem.textContent = country

      suggestionItem.addEventListener("click", () => {
        input.value = country
        s.innerHTML = ""
      })

      s.appendChild(suggestionItem)
    })
  }
})

