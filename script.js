 window.addEventListener("load", function(event) {
     console.log("All resources finished loading!");
     loadMonitorScreen();
 });
  window.addEventListener("resize", function(event) {
      console.log("All resources finished loading!");
      clearMonitorScreen()
      loadMonitorScreen();
 });
  




function clearMonitorScreen() {
    let screen_img = document.querySelector(".HeroImageMonitor__content1");
    screen_img.parentElement.removeChild(screen_img);

    let blank_screen_img = document.querySelector(".HeroImageMonitor__blankScreen");
    blank_screen_img.parentElement.removeChild(blank_screen_img);
}

function loadMonitorScreen() {
    const SCREEN_WIDTH = 226; 
    const SCREEN_HEIGHT = 174;
    const BLANK_SCREEN_WIDTH = 239;  
    const BLANK_SCREEN_HEIGHT = 178;  
    const BLANK_SCREEN_OFFSET_X = -10;  
    const BLANK_SCREEN_OFFSET_Y = 10;  

    // Get a screen position;
    let pos = getScreenPosition();
    
   
    
    //add screen content element
    let screen = document.createElement("img");
    screen.className = "HeroImageMonitor__content1"
    screen.src = "img/screen/"+"monitor2"+".png";
    screen.style.width = SCREEN_WIDTH + "px";
    screen.style.height = SCREEN_HEIGHT + "px";
    screen.style.zIndex = 3;
    screen.style.borderRadius = "16px";
    placeElement(screen, pos.x, pos.y);
    
    //add screen cover(transparent blank screen) element
    let blank_screen = document.createElement("img");
    blank_screen.className = "HeroImageMonitor__blankScreen"
    blank_screen.src = "img/screen/"+"blank_screen"+".png";
    blank_screen.style.width = BLANK_SCREEN_WIDTH + "px";
    blank_screen.style.height = BLANK_SCREEN_HEIGHT + "px";
    blank_screen.style.opacity = "0.3";
    blank_screen.style.zIndex = 4;
    placeElement(blank_screen, pos.x + BLANK_SCREEN_OFFSET_X, pos.y + BLANK_SCREEN_OFFSET_Y);
    

    
}


//change screen-content element 





/* Add an Element to a document*/
//create

//add

function placeElement(el, x_pos, y_pos) {
  el.style.position = "absolute";
  el.style.left = x_pos+'px';
  el.style.top = y_pos + 'px';
  document.querySelector(".HeroImageMonitor").appendChild(el);
}






/*Things to do*/
//get a monitor position
//add screen-content elements
//apply an automatic sliding feature


function getScreenPosition() {

    const SCREEN_OFFSET_X = 177;
    const SCREEN_OFFSET_Y = 92; 
    /* Get a position of a monitor image */ 
    const monitorEl = document.querySelector(".HeroImageMonitor__frame");
    let monitor = monitorEl.getBoundingClientRect();

    /* Adjust a position to screen */
    let x = parseInt(monitor.left)+ window.scrollX + SCREEN_OFFSET_X;
    let y = parseInt(monitor.top) + window.scrollY + SCREEN_OFFSET_Y;
    
    let pos = { x: x, y: y };

    return pos;
};

const slideContent = ()=>{
}
