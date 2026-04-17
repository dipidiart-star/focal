

let goBack = document.getElementById('goBack').addEventListener("click", function(){window.history.back()})


 let currentExperience = 0
document.addEventListener('DOMContentLoaded', function() {
    currentExperience = document.getElementById("experienceIdentifierID").innerHTML
    matchStills()
    

});



// ----------------------------------------------------- Handling Image
const focalImage = document.getElementById('focalImage')
function changeImage(){
    focalImage.src = "images/" +  currentExperience + "/" + standardLength + "mm.jpg"



    let info  = document.getElementById("smallTextID")

    if (output.innerHTML.replace(/[^0-9]/g, '') == "10"){
        info.innerHTML = 'A very wide focal length, typically reserved for more abstract or creative shots. This focal length can be used to portray a sort of "bizarreness" or “otherwordly” like appearance due to its heavy distortion. Scenes where the subject is going insane or in a false reality is where lenses around this focal length really shine.'
    } else if (output.innerHTML.replace(/[^0-9]/g, '') == "16"){
        info.innerHTML = 'A wider focal length than typically used, but still very useful for specific kinds of shots. Wide enough to capture lots of detail, this focal length is often used for environmental shots where giving context to the scene is necessary. It can also be used to give a sense of scale or overwhelming presence as its wide field of view captures a lot of a scene.'
    } else if (output.innerHTML.replace(/[^0-9]/g, '') == "24"){
        info.innerHTML = 'A very solid focal length with good versatility. This focal length provides a good amount of field of view without much distortion. Since this length leans slightly towards the wider end, it can be used to film room scenes where there is still ample space but contained within 4 walls.'
    } else if (output.innerHTML.replace(/[^0-9]/g, '') == "50"){
        info.innerHTML = 'Although leaning towards the telephoto end more, this focal length offers good versatility. It isn’t so tight where the background appears flat but creates enough subject separation to where the subject can really stand out from a scene. Due to such, this focal length is typically utilized to emphasize the subject without eliminating too much visual information'
    } else if (output.innerHTML.replace(/[^0-9]/g, '') == "75"){ 
        info.innerHTML = 'A tighter focal length that offers a lot of subject separation. These lenses are more on the telephoto end where the background will appear closer to the subject than normal. A good lens choice for creating intimacy as it compresses the scene quite a bit without totally eliminating background information. In these focal ranges, the shots can appear almost “stalker-ish"'
    } else if (output.innerHTML.replace(/[^0-9]/g, '') == "100"){
        info.innerHTML = 'A very tight focal length that will offer lots of subject separation. Shots from this focal length will give off a “distant” feel and any subject closer to the camera will appear as if they are standing in front of a backdrop. The compressed feeling of the shot can be very useful for creating intimacy however, should be used sparingly if giving context to a scene is necessary.'
}
}



let imageLoaded = false
function fetchStills(a){
    if (a == true){
        imageLoaded = true
    } 
}


// ----------------------------------------------------- Handling Image




const focalLengths = [10, 16, 24, 50, 75, 100]
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
let output2 = document.getElementById("focalLength2")



let info = document.getElementById("focalContainerID")

slider.addEventListener("input", function() {
    const value = this.value
    output.innerHTML = nearestStandardLength(value) + " mm"
    output2.innerHTML = nearestStandardLength(value) + " mm"

    focalImage.style.display = "flex"
    changeImage()
    hideElse()
    document.getElementById("initialTextID").classList.add("dissappear")

    if(info.style.pointerEvents = "none"){
        console.log('autoed')
        info.style.pointerEvents = "auto"
    }
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
    "Ghost in the Shell",
    "The Headless Woman",
    "Bright Star",
    "Fire In The Sky",
    "The Voices",
    "The Eyes of Tammy Faye",
    "Brightburn",
    "Full River Red",
    "Hero",
    "The Mimic",
    "The Menu",
    "Honeydripper",
    "White Bird in a Blizzard",
    "A Clockwork Orange",
    "Patton",
    "Forrest Gump",
    "Brazil",
    "Bushwick",
    "6 Underground",
    "In The Heart of the Sea",
    "Swing Kids",
    "Christopher Robin",
    "Dance With Wolves",
    "Daybreakers",
    "Doomsday",
    "Logan",
    "Cobweb",
    "Domino",
    "War for the Planet of the Apes",
    "Bus Stop",
    "Macbeth"



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
    "2017",
    "2008",
    "2009",
    "1993",
    "2014",
    "2021",
    "2019",
    "2023",
    "2002",
    "2017",
    "2022",
    "2007",
    "2014",
    "1971",
    "1970",
    "1994",
    "1985",
    "2017",
    "2019",
    "2014",
    "2018",
    "2018",
    "1990",
    "2009",
    "2008",
    "2017",
    "2023",
    "2005",
    "2017",
    "1956",
    "2015"




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
    "Jess Hall",
    "Barbara Alvarez",
    "Greig Fraser",
    "Bill Pope",
    "Udo Kramer",
    "Mike Gioulakis",
    "Michael Dallatorre",
    "Xiaoding Zhao",
    "Christopher Doyle",
    "Kim Il-yeon",
    "Peter Deming",
    "Dick Pope" ,
    "Sandra Valde-Hansen",
    "Stanley Kubrick",
    "Fred J. Koenekamp",
    "Don Burgess",
    "Roger Pratt",
    "Jonathan Milott & Cary Murnion",
    "Bojan Bazelli",
    "Anthony Dod Mantle",
    "Kim Ji-yong",
    "Matthias Koenigswieser",
    "Dean Semler",
    "Ben Nott",
    "Neil Marshall",
    "John Mathieson",
    "Samuel Bodin",
    "Dan Mindel",
    "Michael Seresin",
    "Milton R. Krasner",
    "Justin Kurzel",










    
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


function matchStills() {
    const column1 = document.getElementById('stillListID1');
    column1.innerHTML = '';

    const batchSize = 10;
    const delay = 100;
    let index = 0;

    function processBatch() {
        const end = Math.min(index + batchSize, filmList.Title.length);

        for (let i = index; i < end; i++) {
            let targetMovie = filmList.Title[i];
            let imagePath = '';

            for (let p = 0; p < focalLengths.length; p++) {
                for (let o = 1; o < maxSceneCount; o++) {
                    imagePath = "images/" + focalLengths[p] + "/" + targetMovie + o + '.jpg';

                    const container = document.createElement('li');
                    const topBar = document.createElement('div');
                    const bottomBar = document.createElement('div');
                    const stillDetail = document.createElement('div');
                    const img = document.createElement('img');

                    const leftText = document.createElement('div');
                    const stillInfo1 = document.createElement('ul');

                    const breaker1 = document.createElement('li');
                    const title = document.createElement('li');
                    const breaker2 = document.createElement('li');
                    const year = document.createElement('li');
                    const breaker3 = document.createElement('li');
                    const director = document.createElement('li');
                    const dp = document.createElement('li');

                    const rightText = document.createElement('div');
                    const stillInfo2 = document.createElement('ul');

                    const breaker4 = document.createElement('li');
                    const titleRight = document.createElement('li');
                    const breaker5 = document.createElement('li');
                    const yearRight = document.createElement('li');
                    const breaker6 = document.createElement('li');
                    const directorRight = document.createElement('li');
                    const dpRight = document.createElement('li');

                    container.classList.add("stillContainer");
                    container.classList.add(focalLengths[p] + "mm");

                    topBar.classList.add("stillTopBar");
                    bottomBar.classList.add("stillBottomBar");

                    leftText.classList.add("leftText");
                    rightText.classList.add("rightText");

                    stillInfo1.classList.add("stillInfo");
                    stillInfo2.classList.add("stillInfo");

                    breaker1.classList.add("stillInfoDetail");
                    breaker2.classList.add("stillInfoDetail");
                    breaker3.classList.add("stillInfoDetail");

                    breaker4.classList.add("stillInfoDetail");
                    breaker5.classList.add("stillInfoDetail");
                    breaker6.classList.add("stillInfoDetail");

                    stillDetail.classList.add("stillDetail");
                    img.classList.add("stillImage");

                    title.classList.add("stillTitle");

                    title.innerHTML = targetMovie;
                    year.innerHTML = filmList.Year[i];
                    director.innerHTML = "Underworks";
                    dp.innerHTML = filmList.DP[i];

                    titleRight.innerHTML = "Title";
                    yearRight.innerHTML = "Year";
                    directorRight.innerHTML = "Director";
                    dpRight.innerHTML = "Cinematographer";

                    img.src = imagePath;
                    img.loading = "lazy";

                    img.addEventListener("click", function() {
                        fullImgPreview(img.src);
                    });

                    img.onerror = function() {
                        if (container.parentNode) {
                            container.parentNode.removeChild(container);
                        }
                    };

                    container.appendChild(topBar);
                    container.appendChild(stillDetail);
                    container.appendChild(img);
                    container.appendChild(bottomBar);

                    topBar.appendChild(leftText);
                    topBar.appendChild(rightText);

                    leftText.appendChild(stillInfo1);
                    stillInfo1.appendChild(title);
                    stillInfo1.appendChild(breaker1);
                    stillInfo1.appendChild(year);
                    stillInfo1.appendChild(breaker2);
                    stillInfo1.appendChild(director);
                    stillInfo1.appendChild(breaker3);
                    stillInfo1.appendChild(dp);

                    rightText.appendChild(stillInfo2);
                    stillInfo2.appendChild(titleRight);
                    stillInfo2.appendChild(breaker4);
                    stillInfo2.appendChild(yearRight);
                    stillInfo2.appendChild(breaker5);
                    stillInfo2.appendChild(directorRight);
                    stillInfo2.appendChild(breaker6);
                    stillInfo2.appendChild(dpRight);

                    column1.appendChild(container);
                }
            }
        }

        index = end;

        if (index < filmList.Title.length) {
            setTimeout(processBatch, delay);
        }
    }

    processBatch();
}



function fullImgPreview(a){

    document.getElementById("fullImgViewContainerID").style.display = "flex"
    document.getElementById("siteShadowID").style.display = "flex"
    document.getElementById("fullImgViewID").src = a
}

document.getElementById("siteShadowID").addEventListener("click", function(){
    document.getElementById("fullImgViewContainerID").style.display = "none"
    document.getElementById("siteShadowID").style.display = "none"
    

})

function hideElse(){
    let excludeList = []
    for (let i = 0; i < focalLengths.length; i ++){
    if (focalLengths[i] != output.innerHTML.replace(/[^0-9]/g, '')){

        let excludeThese = document.getElementsByClassName(focalLengths[i] + "mm")
        for (let p = 0; p < excludeThese.length; p++){
            excludeThese[p].style.display = "none"
        }
       
        excludeList.push(focalLengths[i])





    } else {
    let includeThese = document.getElementsByClassName(output.innerHTML.replace(/[^0-9]/g, '') + "mm")
        for (let p = 0; p < includeThese.length; p++){
            includeThese[p].style.display = "block "
        }
    
    }
} 


}



// ----------------------------------------------------- Handling Filters
 

// ---------Year
let yearDropdown = document.getElementById("yearDropdownID")


// ----------------------------------------------------- Handling Search Bar
function filterFilms(qualifier) {
    let filtered = {
        Title: [],
        Year: [],
        DP: []
    };

    for (let i = 0; i < filmList.Title.length; i++) {
        if (filmList.Title[i].toLowerCase().includes(qualifier.toLowerCase())) {
            filtered.Title.push(filmList.Title[i]);
        }
        if (filmList.Year[i].includes(qualifier)) {
            filtered.Year.push(filmList.Year[i]);
        }
        if (filmList.DP[i].toLowerCase().includes(qualifier.toLowerCase())) {
            filtered.DP.push(filmList.DP[i]);
        }
    }

    
}

filterFilms("yves ")

