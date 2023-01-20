$('.sidebar-nav li').on('click', 'a', function(e){  
    if ($(this).parent().children('ul').length){
		e.preventDefault();
		$(this).addClass('active');
		$(this).parent().children('ul').slideDown();
		setTimeout(function(){ 
		  $.fn.matchHeight._update();
		  $.fn.matchHeight._maintainScroll = true;
		}, 1000);
	}		





// //Up Arrow & Down Arrow
// let upArrow = document.querySelector("#carousel-1 .up-arrow");
// let downArrow = document.querySelector("#carousel-1 .down-arrow");
// //List of all of the screens in carousel
// let screenStore = document.querySelectorAll("#carousel-1 .carousel-screen");
// let numOfScreens = screenStore.length;
// //List of all the circle stores
// let circleStore = document.querySelectorAll("#carousel-1 .circle-container .circle");
// //number to target main screen
// let currentScreen = 0;
// //currently in animation or not
// let inAnim = false;
// //Animation Time
// let animTime = 500;

// //Sort out starting position
// sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
// //Sort out circle styling
// highlightCircle(circleStore[0]);

// //User clicks on upArrow
// upArrow.addEventListener("click", () => {
//     startAnim("up");
// });

// //User clicks on the downArrow
// downArrow.addEventListener("click", () => {
//     startAnim("down");
// });

// //Start animation. Either towards up or down
// function startAnim(direction) {
//     if(!inAnim) {
//         inAnim = true;
//         if(direction === "up") {
//             moveUp();
//             highlightCircle(circleStore[currentScreen + 1], "up");
//         }else if(direction === "down"){
//             moveDown();
//             highlightCircle(circleStore[currentScreen - 1], "down");
//         }else{
//             isAnim = false;
//             return
//         }
//     }
// }

// //Move to the up
// function moveUp() {
//     //Move towards Next screen as usual
//     if(currentScreen < numOfScreens - 1){
//     toDown(screenStore[currentScreen]);
//     comeUp(screenStore[currentScreen + 1]);
//     setTimeout(() => {
//         inAnim = false;
//         currentScreen++;
//         sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
//     }, animTime)
//     }else{
//         //Or the screen coming in is the first screen again
//         toDown(screenStore[currentScreen]);
//         comeUp(screenStore[0]);
//         setTimeout(() => {
//             inAnim = false;
//             currentScreen = 0;
//             sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
//         }, animTime)
//     }
// }

// //Move to the left
// function moveDown() {
//     //Move back to screen previously on, as usual
//     if(currentScreen > 0){
//         toUp(screenStore[currentScreen]);
//         comeDown(screenStore[currentScreen - 1]);
//         setTimeout(() => {
//         inAnim = false;
//         currentScreen--;
//         sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
//         }, animTime)
//     }else{
//         //Move back to the last screen container
//         toUp(screenStore[currentScreen]);
//         comeDown(screenStore[numOfScreens - 1]);
//         setTimeout(() => {
//             inAnim = false;
//             currentScreen = numOfScreens - 1;
//             sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
//             }, animTime)
//     }
// }

// //User clicks on one of the circles
// circleStore.forEach(circle => {
//     circle.addEventListener("click", event => {
//         if(!inAnim){
//         //Convert NodeList to Array, to use 'indexOf' method.
//         let circleStoreArray = Array.prototype.slice.call(circleStore);
//         let circleIndex = circleStoreArray.indexOf(event.target);
//         //Configure circle styling
//         highlightCircle(event.target);
//         //Work out whether we need to move up or down, or nowhere.
//         if(circleIndex > currentScreen){
//             changeScreenCircleClick(circleIndex, "up");
//         }else if (circleIndex < currentScreen){
//             changeScreenCircleClick(circleIndex, "down");
//         }
//     }
// })
// })

// function changeScreenCircleClick(circleIndex, direction) {
//     inAnim = true;
//     if(direction === "up"){
//         sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[circleIndex]);
//         toDown(screenStore[currentScreen]);
//         comeUp(screenStore[circleIndex]);
//     }else if (direction === "down"){
//         sortPositioning(screenStore[currentScreen], screenStore[circleIndex], screenStore[currentScreen + 1]);
//         toUp(screenStore[currentScreen]);
//         comeDown(screenStore[circleIndex]);
//     }else{
//         inAnim = false;
//         return
//     }
//     setTimeout(() => {
//     inAnim = false;
//     currentScreen = circleIndex;
//     sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
//     }, animTime)
// }

// function highlightCircle(circleSelect, direction) {
//     if(circleSelect === undefined && direction === "up"){
//         circleSelect = circleStore[0];
//     }else if (circleSelect === undefined && direction === "down"){
//         circleSelect = circleStore[numOfScreens - 1];
//     }
//     circleStore.forEach(circle => {
//         if(circle === circleSelect){
//             circle.classList.add("circle-fill");
//         }else{
//             circle.classList.remove("circle-fill");
//         }
//     })
// }


// //Animation methods
// function toDown(screen) {
//     screen.style.animation = "toDown 0.5s ease-in-out forwards";
//     setTimeout(() => {
//         screen.style.animation = "";
//     }, animTime);
// }

// function toUp(screen) {
//     screen.style.animation = "toUp 0.5s ease-in-out forwards";
//     setTimeout(() => {
//         screen.style.animation = "";
//     }, animTime);
// }

// function comeRight(screen) {
//     screen.style.animation = "comeRight 0.5s ease-in-out forwards";
//     setTimeout(() => {
//         screen.style.animation = "";
//     }, animTime);
// }

// function comeLeft(screen) {
//     screen.style.animation = "comeLeft 0.5s ease-in-out forwards";
//     setTimeout(() => {
//         screen.style.animation = "";
//     }, animTime);
// }



// //Sort positioning. Don't want images to overlap
// function sortPositioning(mainScreen, downScreen, upScreen) {
//     //If up screen is undefined. We need to repeat first screen again
//     if(upScreen === undefined){
//         upScreen = screenStore[0];
//     }
//     //If down screen is undefined. We use the last screen
//     if(downScreen === undefined){
//         downScreen = screenStore[numOfScreens - 1];
//     }
//     screenStore.forEach(screen => {
//         if(screen === mainScreen){
//             screen.style.display = "block";
//             screen.style.down = "0px";
//         }else if (screen === downScreen){
//             screen.style.display = "block";
//             screen.style.down = "-100%";
//         }else if (screen === rightScreen){
//             screen.style.display = "block";
//             screen.style.down = "100%";
//         }else{
//             screen.style.display = "none";
//         }
//     })
// }

// //Auto Scroll feature
// let carousel = document.getElementById("carousel-1");
// let scrollTime = Number(carousel.getAttribute("auto-scroll"));
// //Only implement the feature if the user has included the attribute 'auto-scroll'.
// if(scrollTime) {
//     //Auto Scroll will be set up the very first time
//     let autoWipe = setInterval(() => {
//         startAnim("down");
//     }, scrollTime);
//     //Clear the timer when they hover on carousel
//     carousel.addEventListener("mouseenter", () => {
//         clearInterval(autoWipe);
//     });
//     //Re-initialise the timer when they hover out of the carousel
//     carousel.addEventListener("mouseleave", () => {
//          autoWipe = setInterval(() => {
//             startAnim("down");
//         }, scrollTime);
//     })

// }