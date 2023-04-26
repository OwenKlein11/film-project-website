var title = document.getElementById("singapore-info-title");
var info = document.getElementById("singapore-info");
var central = document.getElementById("Central");
var northeast = document.getElementById("NorthEast");
var northwest = document.getElementById("NorthWest");
var southeast = document.getElementById("SouthEast");
var southwest = document.getElementById("SouthWest");
var outside = document.getElementById("singapore-info-wrapper");
var sing = document.getElementById("singapore-container");
var a = document.getElementById("map");
var current;
var currentColor;

a.addEventListener("load",function(){


    central.addEventListener("mousedown",function(){
        moveMap()
        if (currentColor != null  && current != null){
            current.style.fill = currentColor;
        }
        current = central;
        currentColor = central.style.fill;
        central.style.fill = "#2E8EFF";
        title.innerHTML = "Central Region";
        info.innerHTML = "With over 930,900 people and an estimated surface area of about 132.7 square kilometers, this region is home to some of Singapore’s most popular landmarks and destinations, making it a bustling tourist spot. This region houses the famous Singapore Botanic Gardens, which is a 162-year-old tropical garden visited by millions each year. The region includes a mix of large commercial space, residential space and outdoor gardens and parks."
    }, false);
    northeast.addEventListener("mousedown",function(){
        moveMap()
        if (currentColor != null  && current != null){
            current.style.fill = currentColor;
        }
        current = northeast;
        currentColor = northeast.style.fill;
        northeast.style.fill = "#2E8EFF";
        title.innerHTML = "North East Region";
        info.innerHTML = "This region has the highest population density of all the regions. The area experienced tremendous growth since it was just a few small villages in 1970, and is now home to seven planning areas with over 200,000 homes. Although it is thought of as a residential region, it still provides lots of fun tourist places, such as Pulau Ubin. It also has a very sophisticated transportation system making it easy to get around inside the region.";
    }, false);
    northwest.addEventListener("mousedown",function(){
        moveMap()
        if (currentColor != null  && current != null){
            current.style.fill = currentColor;
        }
        current = northwest;
        currentColor = northwest.style.fill;
        northwest.style.fill = "#2E8EFF";
        title.innerHTML = "North Region";
        info.innerHTML = "This calmer, greener region provides tranquil isolation from the bustling metropolitan areas. It has a population of around only 540,000 people and is much less developed than some other regions. It still provides excellent parks and open spaces for travelers and locals alike.";
    }, false);
    southeast.addEventListener("mousedown",function(){
        moveMap()
        if (currentColor != null  && current != null){
            current.style.fill = currentColor;
        }
        current = southeast;
        currentColor = southeast.style.fill;

        southeast.style.fill = "#2E8EFF";
        title.innerHTML = "East Region";
        info.innerHTML = "This densely populated region is bustling with all types of people as it is home to some of the country’s largest travel centers, such as the famous Changi Airport along with many international colleges. Lots of students and tourists visit and live in the area creating a multicultural hub filled with all ages. It features colorful and walkable neighborhoods and parks along with great views of the ocean.";
    }, false);
    southwest.addEventListener("mousedown",function(){
        moveMap()
        if (currentColor != null  && current != null){
            current.style.fill = currentColor;
        }
        current = southwest;
        currentColor = southwest.style.fill;

        southwest.style.fill = "#2E8EFF";
        title.innerHTML = "West Region";
        info.innerHTML = "Although it is the third most populous region, it is much slower, as it contains primarily residential towns. But there are still several flourishing spots to explore. Also, the islands of this region, such as Jurong Island,  house many of Singapore’s heavy industries, including drugs and high-tech goods. ";
    }, false);


function moveMap(){
    outside.style.display = "flex";
    sing.style.justifyContent = "none";
}


var cards = document.getElementsByClassName('card');

function handleMouseOver() {
    blurReveal(this);
    console.log("blur");
}

function handleMouseOut() {
    unBlur(this);
    console.log("unblur");
}

function handleClick() {
    showInfo(this);
    track = 1;
    this.removeEventListener("mouseover", handleMouseOver);
    this.removeEventListener("mouseout", handleMouseOut);
}

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseover", handleMouseOver);
    cards[i].addEventListener("mouseout", handleMouseOut);
    cards[i].addEventListener("click", handleClick);
}

function blurReveal(name){
    name.getElementsByClassName('image-card')[0].style.filter = "blur(2px)";
    name.getElementsByClassName('card-title-wrapper')[0].style.display = "block";
}

function unBlur(name){
    name.getElementsByClassName('image-card')[0].style.filter = "none";
    name.getElementsByClassName('card-title-wrapper')[0].style.display = "none";
}

function showInfo(name){
    name.getElementsByClassName('image-card')[0].style.display = "none";
    name.getElementsByClassName('card-title-wrapper')[0].style.display = "none";
    name.getElementsByClassName('card-info')[0].style.display = "flex";
}

} , false)

