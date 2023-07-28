

/*----------------------------- REMOVE HTML AND CSS FUNCTIONS -----------------------------*/
function removeTheHRS(){
    var loadUpScreenSize = window.innerWidth;
    if (loadUpScreenSize<=574){
        console.log("yes")
        var listOfHRS = document.querySelectorAll(".fuckingHRShateThem");
        listOfHRS.forEach((element)=>{
            element.remove();
        })
    }
}
function only500pixelOrBiggerSupported(){
    var loadUpScreenSize=window.innerWidth;
    if(loadUpScreenSize<=500){
        
    }
}



/*----------------------------- GENERATE HTML AND CSS FUNCTIONS -----------------------------*/
function newNav3Option(category, totalAmountOfWords, theID, dropDownMenu) {
    var newCateg = document.createElement("div");
    newCateg.setAttribute("id", theID)
    newCateg.classList.add("newNavOptionClass");
    newCateg.innerHTML = "<p>" + category + "</p><hr><p>" + totalAmountOfWords + "</p>";
    var placement = document.querySelector("#navigation3");
    newCateg.addEventListener("click", dropDownMenu)
    placement.appendChild(newCateg);

    /* ----- SLIDE DOWN MENU ----- */

    var slideDownMenu = document.createElement("div");
    slideDownMenu.setAttribute("id", theID+"SlideDownDiv")
    var theIdOfMenu = "#"+theID+"SlideDownDiv";//UH HUH

    slideDownMenu.classList.add("dropDownBox");
    slideDownMenu.classList.add("dropDownBoxSetting"); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
    $("#"+theID).after(slideDownMenu);
    
};


function newNav2Option(category, totalAmountOfWords, theID, dropDownMenu) {
    var newCateg = document.createElement("div");
    newCateg.setAttribute("id", theID)
    newCateg.classList.add("newNavOptionClass");
    newCateg.innerHTML = "<p>" + category + "</p><hr><p>" + totalAmountOfWords + "</p>";
    var placement = document.querySelector("#navigation2");
    newCateg.addEventListener("click", dropDownMenu)
    placement.appendChild(newCateg);

    /* ----- SLIDE DOWN MENU ----- */

    var slideDownMenu = document.createElement("div");
    slideDownMenu.setAttribute("id", theID+"SlideDownDiv")
    var theIdOfMenu = "#"+theID+"SlideDownDiv";//UH HUH

    slideDownMenu.classList.add("dropDownBox");
    slideDownMenu.classList.add("dropDownBoxSetting"); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
    $("#"+theID).after(slideDownMenu);
    
};


function newNavOption(category, totalAmountOfWords, theID, dropDownMenu) {
    var newCateg = document.createElement("div");
    newCateg.setAttribute("id", theID)
    newCateg.classList.add("newNavOptionClass");
    newCateg.innerHTML = "<p>" + category + "</p><hr><p>ord: " + totalAmountOfWords + "</p>";
    var placement = document.querySelector("#navigation");
    newCateg.addEventListener("click", dropDownMenu)
    placement.appendChild(newCateg);

    /* ----- SLIDE DOWN MENU ----- */

    var slideDownMenu = document.createElement("div");
    slideDownMenu.setAttribute("id", theID+"SlideDownDiv")
    var theIdOfMenu = "#"+theID+"SlideDownDiv";//UH HUH

    slideDownMenu.classList.add("dropDownBox");
    slideDownMenu.classList.add("dropDownBoxSetting"); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
    $("#"+theID).after(slideDownMenu);
    
};

function spesificOptionGenerator(spesificCategoryName, amountOfWords, idOfAlmostParent, numberOfID, whereItWillSendYou, lengthOfHR){
    var helpPlace = idOfAlmostParent
    var placement = document.querySelector("#"+helpPlace+"SlideDownDiv"); //the placement of spesific category

    var newSpesificOption = document.createElement("div"); //creates new spesific category
    newSpesificOption.setAttribute("id", idOfAlmostParent+numberOfID);//choose the ID
    newSpesificOption.classList.add("the500pixel");
    newSpesificOption.innerHTML="<p>"+spesificCategoryName+"</p><hr class='fuckingHRShateThem' style='width: "+lengthOfHR+"px;'><p>"+amountOfWords+"</p>";


    placement.appendChild(newSpesificOption);
    newSpesificOption.addEventListener("click", ()=>{
        window.location.href = whereItWillSendYou;
    })
}
  
function slideUpAndDown(IDToWhichBoxToSlide){//theID+"SlideDownDiv"
    $("#"+IDToWhichBoxToSlide+"SlideDownDiv").slideToggle(220);
}


/*----------------------------- CALL GENERATE HTML AND CSS FUNCTIONS -----------------------------*/
/*----------------------------- ORD TRENING -----------------------------*/

newNavOption("Farger/farben", "??", "farger", ()=>{
    slideUpAndDown("farger");
});
spesificOptionGenerator("Simple farger", "??", "farger", "1", "/otherHTMLpages/ord/farger/simpleFarger/index.html", 200);
spesificOptionGenerator("(currently: template)", "??", "farger", "2", "/otherHTMLpages/wordTemplate/index.html", 65);//Avanserte farger | del 1
spesificOptionGenerator("Avanserte farger | del 2", "??", "farger", "3", "https://www.w3schools.com", 65);


newNavOption("Kropp/körper", 22, "kropp", ()=>{
    slideUpAndDown("kropp");
});
spesificOptionGenerator("organer", 11, "kropp", "1", "https://www.w3schools.com", 200);
spesificOptionGenerator("organer", 11, "kropp", "2", "https://www.w3schools.com", 200);
/*----------------------------- GRAMMATIKK -----------------------------*/
newNav2Option("Setningsstruktur/satzbau", "", "setningsstruktur", ()=>{
    slideUpAndDown("setningsstruktur")
});
spesificOptionGenerator("Simple tids fortelling", "", "setningsstruktur", "1", "https://www.w3schools.com", 0)






/*----------------------------- UTTALE -----------------------------*/

newNav3Option("Bokstaver/briefe", "", "bokstaver", ()=>{
    slideUpAndDown("bokstaver");
});
spesificOptionGenerator("Bokstaver/briefe", "", "bokstaver", "1", "https://www.w3schools.com", 0)
spesificOptionGenerator("Digraf/digraph", "", "bokstaver", "2", "https://www.w3schools.com", 0)

//Digraf/digraph


removeTheHRS();
window.addEventListener("resize", removeTheHRS);
only500pixelOrBiggerSupported();