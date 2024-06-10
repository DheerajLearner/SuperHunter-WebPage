const mainHeroDiv = document.querySelector(".main-container")
const favouriteDiv = document.querySelector(".favourite-div")
const searchBox = document.querySelector("#search-box")
const characterList = document.querySelector("#character-list")


let fav = JSON.parse(localStorage.getItem('favorites')) || [];
let res;
let count = 0;


const publicKey = '6f04217ae92def452518099579ceecbc';
const privateKey = '164e8375d4d0d6aa43293338cae39507a399cebc';
const timestamp = new Date().getTime();
const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString(); 





// Function to save favorites to local storage
function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(fav));
}


async function ab () {
const apiUrl = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
    const v = await fetch(apiUrl)
    const b = await v.json()
    const response =  b.data.results
    console.log(response)
    res = [...response]
    console.log(res)
    res.forEach((ele) => {
        displayMovieHunter(ele)
        searchBoxInput(ele)
    });

}


favouriteDiv.addEventListener("click", function () {
    if (fav.length == 0) {
        mainHeroDiv.textContent = ""
        mainHeroDiv.textContent = `No Favourites Hunter Added`
        mainHeroDiv.style.fontSize = `1.8rem`
        mainHeroDiv.style.boxShadow = 'inset 5px 5px 10px rgba(0, 0, 0, 0.5)';
        mainHeroDiv.style.display = 'flex'
        mainHeroDiv.style.justifyContent = 'center'
        mainHeroDiv.style.width = '96.3vw'

    }else{
        mainHeroDiv.textContent = ""
        fav.forEach(ele => {
            const {createHeroesDiv, heroNameInput} = displayData(ele)
            const removeButton = document.createElement("div")
            removeButton.classList.add("remove-button")
            removeButton.innerHTML = `<i class="fa-solid fa-trash-can icon-setting icon-background"></i>`
            createHeroesDiv.appendChild(removeButton)

            removeButton.addEventListener("click", function (event) {
                fav = fav.filter(obj => obj.name !== ele.name)
                createHeroesDiv.classList.add("hidden")
                saveFavorites()
                event.stopPropagation()
            })

    })
}
})
searchBox.addEventListener('focus', function() {
    characterList.style.display = "block"
  });

searchBox.addEventListener('blur', function() {
setTimeout(() => {
    characterList.style.display = "none"
}, 100);
});

searchBox.addEventListener("input", function () {
    const input = searchBox.value.toLowerCase()
    Array.from(characterList.getElementsByClassName('character-item')).forEach(character => {
        const characterName = character.textContent.toLowerCase()
        if (characterName.includes(input)) {
            character.style.display = '';
          } else {
            character.style.display = 'none';
          }
    })
})


function searchBoxInput (ele){
    const character = document.createElement("li")
    character.className = "character-item"
    character.textContent = ele.name
    characterList.appendChild(character)

    character.addEventListener("click", function (event) {
        event.preventDefault();
        // superHeroPage(ele)
        history.pushState({ ele }, '', "superheroPage.htm")
        window.location.href = "superheroPage.htm"
        event.stopPropagation()
    })
}





function displayMovieHunter (ele) {
        
    const {createHeroesDiv, heroNameInput} =  displayData(ele)

    
    const favIcon = document.createElement("div")
    favIcon.classList.add("icon-pos")
    favIcon.innerHTML = `<i class="fa-regular fa-heart icon-setting"></i>
    <i class="fa-solid fa-heart icon-setting icon-background hidden"></i>`
    createHeroesDiv.appendChild(favIcon)

        favIcon.addEventListener("click", function (event) {
            const childEle = favIcon.childNodes[2]
            const isPresent = fav.some(favorite => favorite.name === ele.name);
            if (!isPresent){
            if(childEle.classList.contains('hidden')){
                childEle.classList.toggle('hidden')
                fav.push(ele)
                saveFavorites()

            }else{
                childEle.classList.toggle('hidden')
                fav = fav.filter(obj => obj.name !== ele.name)

            }
        }
            event.stopPropagation()
        })
        // createHeroesDiv.classList.add("transit-fade-out")

}


function displayData (ele) {
    const createHeroesDiv = document.createElement("div")
    createHeroesDiv.classList.add("heroes-div")
    createHeroesDiv.style.backgroundImage = `url(${ele.thumbnail.path}.${ele.thumbnail.extension})`

    const heroNameInput = document.createElement("P")
    heroNameInput.textContent = `${ele.name}`
    createHeroesDiv.appendChild(heroNameInput)
    mainHeroDiv.appendChild(createHeroesDiv)

    createHeroesDiv.addEventListener("click", function (event) {
        event.preventDefault();
        // superHeroPage(ele)
        history.pushState({ ele }, '', "superheroPage.htm")
        window.location.href = "superheroPage.htm"
    })
    return {createHeroesDiv, heroNameInput}
}

document.addEventListener("DOMContentLoaded", ab)



// function superHeroPage(ele) {
//     const mainDivReplace = document.createElement("div")
//     mainDivReplace.classList.add("main-container-replace")
//     mainHeroDiv.parentNode.replaceChild(mainDivReplace,mainHeroDiv)

//     const heroHeaderInfo = document.createElement("div")
//     heroHeaderInfo.classList.add("hero-header-info")
//     mainDivReplace.appendChild(heroHeaderInfo)
//     heroHeaderInfo.style.backgroundImage = `url(${ele.thumbnail.path}.${ele.thumbnail.extension})`
    
//     const heroHeaderName = document.createElement("div")
//     heroHeaderName.classList.add("hero-header-name")
//     heroHeaderInfo.appendChild(heroHeaderName)
//     heroHeaderName.textContent = ele.name

//     const heroDescription = document.createElement("div")
//     heroDescription.classList.add("hero-description")
//     heroHeaderInfo.appendChild(heroDescription)

//     const descriptionHeading = document.createElement("h2")
//     heroDescription.appendChild(descriptionHeading)
//     descriptionHeading.textContent = "Description"
//     descriptionHeading.style.margin = "0px"

//     const descriptionInfo = document.createElement("div")
//     descriptionInfo.classList.add("hero-description-info")
//     heroDescription.appendChild(descriptionInfo)
//     descriptionInfo.textContent = ele.description
    

// }


// export { hash , publicKey, privateKey, timestamp}