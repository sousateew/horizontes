let htmlElement = document.getElementsByTagName("body")[0]
let titleElement = document.getElementsByTagName("title")[0]

let content = htmlElement.innerHTML

let companyName = `Horizontes`
let companySlogan = `Viaje sem Horizontes!`
let cardImage = "https://images.pexels.com/photos/15804651/pexels-photo-15804651/free-photo-of-estrada-via-panorama-vista.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"

let result
result = content.replaceAll("SLOGAN_PLACEHOLDER", companySlogan)
result = result.replaceAll("PLACEHOLDER_IMAGE", cardImage)
result = result.replaceAll("PLACEHOLDER", companyName)

htmlElement.innerHTML = result
titleElement.innerHTML = companyName

loadTrips()