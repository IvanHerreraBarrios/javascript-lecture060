const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Animals")
$cards = document.querySelector(".cards")

$figure2 = document.createElement("figure")


$img.setAttribute("src", "https://placeimg.com/200/200/animals")
$img.setAttribute("alt", "Animals")
$figure.classList.add("card")

$figcaption.appendChild($figcaptionText)
$figure.appendChild($img)
$figure.appendChild($figcaption)
$cards.appendChild($figure)

$figure2.innerHTML = `
    <img src = "https://placeimg.com/200/200/people" alt="People">
    <figcaption> People</figcaption>
`

$figure2.classList.add("card")
$cards.appendChild($figure2)

const seasons = ["spring", "summer", "autumn", "winter"],
$ul = document.createElement("ul")

document.write("<h3>Seasons of the year</h3>")
document.body.appendChild($ul)

seasons.forEach(el => {
    const $li = document.createElement("li")
    $li.textContent = el //insert text
    $ul.appendChild($li)
})
const continents = ["Africa", "America", "Asia", "Europa"]
$ul2 = document.createElement("ul")

document.write("<h3>Continets</h3>")
document.body.appendChild($ul2)

$ul2.innerHTML = ""
continents.forEach(el => $ul.innerHTML +=  `<li> ${el}</li>`)



const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

$ul3 = document.createElement("ul")
$fragment = document.createDocumentFragment()

months.forEach(el => {
    const $li = document.createElement("li")
    $li.textContent = el
    $fragment.appendChild($li)
})

document.write("<h3> Months</h3>")
$ul3.appendChild($fragment)
document.body.appendChild($ul3)