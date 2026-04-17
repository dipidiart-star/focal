

let goBack = document.getElementById('goBack').addEventListener("click", function(){window.location.href = "index.html"})









// ----------------------------------------------------- Handling Image

function changeImage(){
    const focalImage = document.getElementById('focalImage')
    // sourceLink = focalImage.src;
    // mmLocation = sourceLink.indexOf("mm")
    // fileFocalLength = ((sourceLink.slice(mmLocation - 3, mmLocation)).replace(/\D/g, '')) + "mm.png"
    // focalImage.src = "images/" + fileFocalLength
    focalImage.src = "images/" + standardLength + "mm.png"

    
}

// ----------------------------------------------------- Handling Focal Value

const focalLengths = [5, 16, 24, 50, 75, 100]
let currentFocalLength = 0
let standardLength = 1
let lesser = 0
let greater = 1
let minYear = 1900
let maxYear = 2025
let yearsList = [minYear]
const yearsLength = yearsList.length;






function nearestStandardLength(a){

    if (a < 100){
        L = lesser
        G = greater

        mean = Math.abs((focalLengths[lesser] + focalLengths[greater]) / 2)
        if (a > focalLengths[greater]){
            lesser += 1
            greater += 1
            nearestStandardLength(a)

        
        } else if (a < mean){
            standardLength = focalLengths[lesser]
            lesser = 0
            greater = 1
        } else if (a > mean){
            standardLength = focalLengths[greater]
            lesser = 0
            greater = 1
        }     
    } else {standardLength = 100}   
    return standardLength
}   
function FocalLength(){
    currentFocalLength += 1
    const mm = "mm"
    standardLength.toString 

    return standardLength + mm
}



let slider = document.getElementById("myRange");

let output = document.getElementById("focalLength");


slider.addEventListener("input", function() {
    const value = this.value
    output.innerHTML = nearestStandardLength(value) + " mm"
    changeImage()
    matchStills()
    document.getElementById("initialTextID").classList.add("dissappear")
})

// ----------------------------------------------------- Handling Stills

const maxSceneCount = 6
let filmList = {
    "Title" : ["The Monkey",
    "Oppenheimer",
    "My Beautiful Laundrette",
    "Fallen Angels",
    "Sisu",
    "5 Dolls for an August Moon",
    "Red Beard",
    "The Seventh Seal",
    "The Circle",
    "Vinyan",
    "The Day He Arrives",
    "Haute Tension",
    "White Material",
    "The Secret Of Roan Inish",
    "Twilight of the Ice Nymphs",
    "Mistress America",
    "Nocturnal Animals",
    "Keanu",
    "Brightburn",
    "Jigsaw",
    "Ringu",
    "Thirst",
    "Ghost in the Shell"
    ],
    "Year" : [
    "2025", 
    "1985", 
    "2023", 
    "1995", 
    "2022", 
    "1970", 
    "1965", 
    "1957", 
    "2017", 
    "2008", 
    "2018", 
    "2003", 
    "2009", 
    "1994", 
    "1997", 
    "2015", 
    "2016", 
    "2016", 
    "2019",
    "2017",
    "1998",
    "2009",
    "2017"
    ],
    "DP":[
    "Nico Aguilar",
    "Oliver Stapleton",
    "Hoyte Van Hoytema",
    "Christopher Doyle",
    "Kjell Lagerroos",
    "Antonio Rinaldi",
    "Asakazu Nakai , Takao Saitô",
    "Ingmar Bergman",
    "Matthew Libatique",
    "Benoît Debie",
    "Hyung Koo Kim",
    "Maxime Alexandre",
    "Yves Cape",
    "Haskell Wexler",
    "Michael Marshall",
    "Sam Levy",
    "Seamus McGarvey",
    "Jas Shelton",
    "Michael Dallatorre",
    "Ben Nott",
    "Jun’ichirô Hayashi",
    "Chung-hoon Chung",
    "Jess Hall"
    ]
}





let pathsToImage = []



function deleteEmpty(){
    let stillImages = document.querySelectorAll('.stillImage');
    let container = document.querySelectorAll('.stillContainer');
    stillImages.forEach(image => {
        if (image.complete && image.naturalWidth === 0){
            image.parentNode.parentNode.removeChild(image.parentNode);
        }
    });
}


function matchStills(){
    const column1 = document.getElementById('stillListID1');
    const column2 = document.getElementById('stillListID2');
    const column3 = document.getElementById('stillListID3');
    const column4 = document.getElementById('stillListID4');





    column1.innerHTML = ''
    column2.innerHTML = ''
    column3.innerHTML = ''
    column4.innerHTML = ''  



for (let i = 0; i < filmList.Title.length; i ++){
    let targetMovie = filmList.Title[i]
    let imagePath = ''
    let folderPath = output.innerHTML.replace(/[^0-9]/g, '');

    for ( let o = 1; o < maxSceneCount; o ++){
    imagePath = "images/" + folderPath +"/" + targetMovie + o + '.jpg'


    const container = document.createElement('li')
    const topBar = document.createElement('div')
    const bottomBar = document.createElement('div')
    const leftText = document.createElement('div')
    const rightText = document.createElement('div')
    const img = document.createElement('img')

    const revealedText = document.createElement('ul')    


    const title = document.createElement('p')
    const year = document.createElement('p')
    const director = document.createElement('p')
    const dp = document.createElement('p')
    const genre = document.createElement('p')


    
    
    container.classList.add("stillContainer")
    topBar.classList.add("stillTopBar")
    bottomBar.classList.add("stillBottomBar")
    leftText.classList.add("leftText")
    rightText.classList.add("rightText")
    img.classList.add("stillImage")
    revealedText.classList.add("revealedText")

    genre.classList.add("stillGenre")
    title.classList.add("stillTitle")
        
    // filmClass = targetMovie.replace(/\s/g, "");
    // container.classList.add(filmClass)


    leftText.innerHTML = targetMovie
    rightText.innerHTML = filmList.Year[i]
    title.innerHTML = '"' + targetMovie + '"'
    year.innerHTML = filmList.Year[i]
    director.innerHTML = "Underworks"
    dp.innerHTML = filmList.DP[i]
    genre.innerHTML = "Underworks"

    img.src = imagePath

    img.addEventListener("click", function(){fullImgPreview(img.src)})

    
    if (img.complete && img.naturalWidth !== 0){

    


    container.appendChild(topBar);
    container.appendChild(img);   
    container.appendChild(bottomBar);  
    topBar.appendChild(leftText);        
    topBar.appendChild(rightText);  
    topBar.appendChild(revealedText);  

    revealedText.appendChild(title);  
    revealedText.appendChild(year);  
    revealedText.appendChild(director);  
    revealedText.appendChild(dp);  
    revealedText.appendChild(genre);  
    
    const columnList = [column1, column2, column3, column4]
    let counts = [
        column1.children.length,
        column2.children.length,
        column3.children.length,
        column4.children.length
    ]



    let min = counts.indexOf(Math.min(...counts))
    columnList[min].appendChild(container)

    }
    }


} 


}



function fullImgPreview(a){
    console.log(a)
    document.getElementById("fullImgViewContainerID").style.display = "flex"
    document.getElementById("siteShadowID").style.display = "flex"
    document.getElementById("fullImgViewID").src = a
}

document.getElementById("siteShadowID").addEventListener("click", function(){
    document.getElementById("fullImgViewContainerID").style.display = "none"
    document.getElementById("siteShadowID").style.display = "none"
    

})

// ----------------------------------------------------- Handling Filters
let filterList = [
    
]
function hideElse(){

}