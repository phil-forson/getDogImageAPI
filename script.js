const dogImage = document.getElementById("dogImage")
const getImage = document.getElementById("getImage")

const fetchAPI = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      dogImage.innerHTML = `<img src='${json.message}' width=300 height=300 className="myImage"/>` })
}

fetchAPI()

getImage.onclick = () => fetchAPI()