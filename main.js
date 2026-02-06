const touristAttraction = [
    {
        namaTempatWisata: "Mt. Everest",
        location: "Nepal",
        imageDocument: "images/backgroundMt.Everest.png",
        price: {
            days14: 20000000,
            days28: 35000000
        },
        continent: "Asia"
    },
    {
        namaTempatWisata: "Taj Mahal",
        location: "India",
        imageDocument: "images/tajMahal.webp",
        price: {
            days14: 25000000,
            days28: 35000000
        },
        continent: "Asia"
    },
    {
        namaTempatWisata: "Pyramid of Giza",
        location: "Egypt",
        imageDocument: "images/PyramidOfGiza.jpg",
        price: {
            days14: 25000000,
            days28: 50000000
        },
        continent: "Africa"
    },
    {
        namaTempatWisata: "Niagara Falls",
        location: "Canada",
        imageDocument: "images/NiagaraFalls.jpg",
        price: {
            days14: 55000000,
            days28: 75000000
        },
        continent: "America"
    },
    {
        namaTempatWisata: "Eiffel Tower",
        location: "France",
        imageDocument: "images/eiffelTower.jpg",
        price: {
            days14: 40000000,
            days28: 60000000
        },
        continent: "Europe"
    },
    {
        namaTempatWisata: "Mt. Fuji",
        location: "Japan",
        imageDocument: "images/mtfuji.jpg",
        price: {
            days14: 20000000,
            days28: 30000000
        },
        continent: "Asia"
    },
    {
        namaTempatWisata: "Burj Khalifa",
        location: "UAE",
        imageDocument: "images/burjKhalifa.jpg",
        price: {
            days14: 20000000,
            days28: 40000000
        },
        continent: "Asia"
    },
    {
        namaTempatWisata: "Colosseum",
        location: "Italy",
        imageDocument: "images/colosseum.jpg",
        price: {
            days14: 45000000,
            days28: 70000000
        },
        continent: "Europe"
    },
    {
        namaTempatWisata: "Disney Land",
        location: "California",
        imageDocument: "images/disneyLand.webp",
        price: {
            days14: 50000000,
            days28: 90000000
        },
        continent: "America"
    },
    {
        namaTempatWisata: "Opera House",
        location: "Australia",
        imageDocument: "images/operaHouse.jpg",
        price: {
            days14: 20000000,
            days28: 30000000
        },
        continent: "Australia"
    },
]

function currencyRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(number)
}

const listAttractionContainer = document.querySelector(".listAttractionContainer")
touristAttraction.map(attractionList)

function attractionList(e, index){

  const card = document.createElement("div")
  card.className = "card"

  card.innerHTML = `
    <h3>${e.namaTempatWisata}</h3>
    <small>${e.location}</small>

    <div class="desc">
      <p>14 Days : ${currencyRupiah(e.price.days14)}</p>
      <p>28 Days : ${currencyRupiah(e.price.days28)}</p>
    </div>

    <button class="span2" key="${index}">Show Details</button>
  `

  listAttractionContainer.appendChild(card)
}

function loopData(newArray) {
    const elementAttraction = document.querySelectorAll(".span2")
    for (i = 0; i < elementAttraction.length; i++) {
        elementAttraction[i].addEventListener("click", function (event) {
            console.log(event)
            const elementReplace = document.querySelectorAll(".priceContainer > p")
            const gettouristData = newArray[event.target.attributes.key.value]
            elementReplace[0].innerHTML = `14 Hari || ${currencyRupiah(gettouristData.price.days14)}`
            elementReplace[1].innerHTML = `28 Hari || ${currencyRupiah(gettouristData.price.days28)}`
            document.querySelector(".contentContainer").style.backgroundImage = `url(${newArray[event.target.attributes.key.value].imageDocument})`
            if(newArray[event.target.attributes.key.value].namaTempatWisata == "Colosseum" || newArray[event.target.attributes.key.value].namaTempatWisata == "Opera House"){
                const elementP = document.querySelectorAll("p")
                const inputSortSelect = inputSort.querySelectorAll("option")
                console.log(elementP)
                console.log(inputSortSelect[0])
                // inputSortSelect[0].style.color = "white"
                elementP[1].style.color = "white"
                elementP[2].style.color = "white"
                elementP[3].style.color = "white"
                elementP[8].style.color = "white"
                elementP[9].style.color = "white"
            }
            else{
                const elementP = document.querySelectorAll("p")
                elementP[1].style.color = "#242424"
                elementP[2].style.color = "#242424"
                elementP[3].style.color = "#242424"
                elementP[8].style.color = "#242424"
                elementP[9].style.color = "#242424"
            }
            console.log(newArray[event.target.attributes.key.value])
        })
    }
}

//------------------ Sort Data---------------

const inputSort = document.getElementById("inputSort")
inputSort.addEventListener("change", function (event) {
    if (event.target.selectedIndex == 1) {
        touristAttraction.sort((a, b) => {
            return a.namaTempatWisata < b.namaTempatWisata ? -1 : 1
        })
        listAttractionContainer.innerHTML = ""
        touristAttraction.map(attractionList)
        loopData(touristAttraction);
    }
    else if (event.target.selectedIndex == 2) {
        touristAttraction.sort((a, b) => {
            return a.price.days14 - b.price.days14
        })
        listAttractionContainer.innerHTML = ""
        touristAttraction.map(attractionList)
        loopData(touristAttraction);
    }
    else if (event.target.selectedIndex == 3) {
        touristAttraction.sort((a, b) => {
            return b.price.days14 - a.price.days14
        })
        listAttractionContainer.innerHTML = ""
        touristAttraction.map(attractionList)
        loopData(touristAttraction);
    }
    else if (event.target.selectedIndex == 4) {
        touristAttraction.sort((a, b) => {
            return a.price.days28 - b.price.days28
        })
        listAttractionContainer.innerHTML = ""
        touristAttraction.map(attractionList)
        loopData(touristAttraction);
    }
    else if (event.target.selectedIndex == 5) {
        touristAttraction.sort((a, b) => {
            return b.price.days28 - a.price.days28
        })
        listAttractionContainer.innerHTML = ""
        touristAttraction.map(attractionList)
        loopData(touristAttraction);
    }
})

// ---------------- Filter Data -----------------

const inputFilter = document.getElementById("inputFilter")
inputFilter.addEventListener("change", function (event) {
    if (event.target.selectedIndex == 1) {
        const filteredTouristAttraction = touristAttraction.filter(e => e.continent == "Asia")
        listAttractionContainer.innerHTML = ""
        filteredTouristAttraction.map(attractionList)
        loopData(filteredTouristAttraction);
    }
    else if (event.target.selectedIndex == 2) {
        const filteredTouristAttraction = touristAttraction.filter(e => e.continent == "Africa")
        listAttractionContainer.innerHTML = ""
        filteredTouristAttraction.map(attractionList)
        loopData(filteredTouristAttraction);
    }
    else if (event.target.selectedIndex == 3) {
        const filteredTouristAttraction = touristAttraction.filter(e => e.continent == "America")
        listAttractionContainer.innerHTML = ""
        filteredTouristAttraction.map(attractionList)
        loopData(filteredTouristAttraction);
    }
    else if (event.target.selectedIndex == 4) {
        const filteredTouristAttraction = touristAttraction.filter(e => e.continent == "Europe")
        listAttractionContainer.innerHTML = ""
        filteredTouristAttraction.map(attractionList)
        loopData(filteredTouristAttraction);
    }
    else if (event.target.selectedIndex == 5) {
        const filteredTouristAttraction = touristAttraction.filter(e => e.continent == "Australia")
        listAttractionContainer.innerHTML = ""
        filteredTouristAttraction.map(attractionList)
        loopData(filteredTouristAttraction);
    }
})

//--------------------- Search Data ---------------------

const searchInput = document.getElementById("searchInput")
searchInput.addEventListener("keyup", function (event) {
    const itemsContainer = listAttractionContainer.getElementsByClassName("elementAttraction")
    const attractionNames = document.getElementsByClassName("span1")
    // console.log(attractionNames[0].textContent.toLowerCase())
    for (i = 0; i < attractionNames.length; i++)
        if (attractionNames[i].textContent.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1 ) {
            itemsContainer[i].style.display = ""
        }
        else if (attractionNames[i].textContent.toLowerCase().indexOf(event.target.value.toLowerCase()) == -1) {
            itemsContainer[i].style.display = "none"
        }
})



loopData(touristAttraction)
const openCheckout = () => window.open("checkOut.html")
document.getElementById("scrolling").addEventListener("click", function(event){
    searchInput.scrollIntoView();
})