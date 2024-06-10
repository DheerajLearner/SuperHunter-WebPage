
const homeIcon = document.querySelector(".home-icon")
const mainHeroDiv = document.querySelector(".main-container")
const favIcon = document.querySelector("icon-pos")


let fav = []




function gethistorydataa () {
    return history.state ? history.state.ele : null
}

const data = gethistorydataa()
superHeroPage(data)

homeIcon.addEventListener("click", function () {
    window.location.href = "index.htm"
})

function superHeroPage(ele) {
    const mainDivReplace = document.createElement("div")
    mainDivReplace.classList.add("main-container-replace")
    mainHeroDiv.parentNode.replaceChild(mainDivReplace,mainHeroDiv)

    const heroHeaderInfo = document.createElement("div")
    heroHeaderInfo.classList.add("hero-header-info")
    heroHeaderInfo.style.backgroundImage = `url(${ele.thumbnail.path}.${ele.thumbnail.extension})`
    mainDivReplace.appendChild(heroHeaderInfo)
    
    const heroHeaderName = document.createElement("div")
    heroHeaderName.classList.add("hero-header-name")
    heroHeaderInfo.appendChild(heroHeaderName)
    heroHeaderName.textContent = ele.name

    const heroDescription = document.createElement("div")
    heroDescription.classList.add("hero-description")
    heroHeaderInfo.appendChild(heroDescription)


    const descriptionHeading = document.createElement("h2")
    heroDescription.appendChild(descriptionHeading)
    descriptionHeading.textContent = "Description"
    descriptionHeading.style.margin = "0px"

    const descriptionInfo = document.createElement("div")
    descriptionInfo.classList.add("hero-description-info")
    heroDescription.appendChild(descriptionInfo)
    descriptionInfo.textContent = ele.description

    const extraInfo = document.createElement("div")
    extraInfo.classList.add("extra-info")
    extraInfo.style.background = `linear-gradient(${newBoxShadowEffect()}, ${newBoxShadowEffect()})`
    mainDivReplace.appendChild(extraInfo)
 
    // const comicsSection = document.createElement("div")
    // comicsSection.classList.add("hero-comic")
    // extraInfo.appendChild(comicsSection)

    const FirstDiv = document.createElement("div")
    FirstDiv.classList.add("first-section")
    extraInfo.appendChild(FirstDiv)

    const comicAvailability = document.createElement("h3")
    comicAvailability.innerHTML = `<h2>Comics</h2><p>Number of Comics available  ${ele.comics.available}</p>`
    FirstDiv.appendChild(comicAvailability)
    ele.comics.items.forEach(element => {
        const comicName = document.createElement("p")
        comicName.textContent = element.name
        comicName.style.margin = `4px`
        const comicNameLink = document.createElement("a")
        // const link = `${element.resourceURI}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
        // comicNameLink.href = link
        comicNameLink.appendChild(comicName)
        FirstDiv.appendChild(comicNameLink)
        comicNameLink.addEventListener("click", function (event) {
                async function fetchData () {
                    const a = await fetch(link)
                    const c = await a.json()
                    console.log(c)
                }
                fetchData()
        })

    });

    const SecondDiv = document.createElement("div")
    SecondDiv.classList.add("second-section")
    extraInfo.appendChild(SecondDiv)

    const eventsAvailability = document.createElement("h3")
    eventsAvailability.innerHTML = `<h2>Events</h2><p>Number of Events available  ${ele.events.available}</p>`
    SecondDiv.appendChild(eventsAvailability)

    ele.events.items.forEach(element => {
        const eventsName = document.createElement("p")
        eventsName.textContent = element.name
        eventsName.style.margin = `4px`
        const eventsNameLink = document.createElement("a")
        eventsNameLink.appendChild(eventsName)
        SecondDiv.appendChild(eventsNameLink)
    })



    // const seriesStories = document.createElement("div")
    // seriesStories.classList.add("series-stories")
    // extraInfo.appendChild(seriesStories)

    const ThirdDiv = document.createElement("div")
    ThirdDiv.classList.add("second-section")
    extraInfo.appendChild(ThirdDiv)

    const seriesAvailability = document.createElement("h3")
    seriesAvailability.innerHTML = `<h2>Series</h2><p>Number of Series available  ${ele.series.available}</p>`
    ThirdDiv.appendChild(seriesAvailability)
    ele.series.items.forEach(element => {
        const seriesName = document.createElement("p")
        seriesName.textContent = element.name
        seriesName.style.margin = `4px`
        const seriesNameLink = document.createElement("a")
        // seriesNameLink.href = `${element.resourceURI}`
        seriesNameLink.appendChild(seriesName)
        ThirdDiv.appendChild(seriesNameLink)
    })

    const FourthDiv = document.createElement("div")
    FourthDiv.classList.add("second-section")
    extraInfo.appendChild(FourthDiv)

    const storiesAvailability = document.createElement("h3")
    storiesAvailability.innerHTML = `<h2>Stories</h2><p>Number of Stories available ${ele.stories.available}</p>`
    FourthDiv.appendChild(storiesAvailability)
    ele.stories.items.forEach(element => {
        const storiesName = document.createElement("p")
        storiesName.textContent = element.name
        storiesName.style.margin = `4px`
        const storiesNameLink = document.createElement("a")
        // storiesNameLink.href = `${element.resourceURI}`
        storiesNameLink.appendChild(storiesName)
        FourthDiv.appendChild(storiesNameLink)
    })

 
 
}

function newBoxShadowEffect() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = 0.5;
    return `rgba(${r}, ${g}, ${b}, ${a})`
}