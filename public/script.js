 window.addEventListener("load", function(event) {
    
     console.log("All resources finished loading!");
     loadMonitorScreen(0);
 });

window.addEventListener("resize", function(event) {
      console.log("All resources finished loading!");
     clearMonitorScreen();
      loadMonitorScreen(0);
});
 
// Change Monitor Screen 
let count = 0;
setInterval(() => {
    clearMonitorScreen();
    loadMonitorScreen(count);
    count++;
    if (count > 1) {
        count = 0;
    }
 }, 2000);
  

function loadMonitorScreen(nthImage) {
    const SCREEN_WIDTH = 224; 
    const SCREEN_HEIGHT = 174;
    const BLANK_SCREEN_WIDTH = 228;  
    const BLANK_SCREEN_HEIGHT = 188;  
    const BLANK_SCREEN_OFFSET_X = -2;  
    const BLANK_SCREEN_OFFSET_Y = -2;  

    // Get a screen position;
    let pos = getScreenPosition();
    



    //add monitor frame 
    const monitorEl = document.querySelector(".HeroImageMonitor__frame");
    let monitor_frame = document.createElement("img");
    monitor_frame.className = "frameHa";
    monitor_frame.src = "img/monitor_blank" + ".png";
    monitor_frame.style.zIndex = 5;
    monitor_frame.style.width = window.getComputedStyle(monitorEl).width;
    // /* Get a position of a monitor image */
    let monitor = monitorEl.getBoundingClientRect();
    let x = parseFloat(monitor.left) + window.scrollX;
    let y = parseFloat(monitor.top) + window.scrollY;
    console.log(monitor.left, monitor.top);
    console.log(x, y);    
    placeElement(monitor_frame,x, y);
    

    //add screen content element
    if (document.querySelector(".frameHa")) {
        
        let screen = document.createElement("img");
        screen.className = "HeroImageMonitor__content"
        screen.src = "img/screen/"+`screen_${nthImage}`+".png";
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
}

function clearMonitorScreen() {
    //clear screen img
    let screen_img = document.querySelector(".HeroImageMonitor__content");
    screen_img.parentElement.removeChild(screen_img);
    
    //clear blank screen img
    let blank_screen_img = document.querySelector(".HeroImageMonitor__blankScreen");
    blank_screen_img.parentElement.removeChild(blank_screen_img);

    //clear monitor frame img
    let monitor_frame_img = document.querySelector(".frameHa");
    monitor_frame_img.parentElement.removeChild(monitor_frame_img);

}

function placeElement(el, x_pos, y_pos) {
  el.style.position = "absolute";
  el.style.left = x_pos+'px';
  el.style.top = y_pos + 'px';
  document.querySelector(".HeroImageMonitor").appendChild(el);
}

function getScreenPosition() {
    const SCREEN_OFFSET_X = 177;
    const SCREEN_OFFSET_Y = 92; 

    /* Get a position of a monitor image */ 
    const monitorEl = document.querySelector(".HeroImageMonitor__frame");
    let monitor = monitorEl.getBoundingClientRect();

    /* Adjust a position to screen */
    let x = parseFloat(monitor.left)+ window.scrollX + SCREEN_OFFSET_X;
    let y = parseFloat(monitor.top) + window.scrollY + SCREEN_OFFSET_Y;    
    
    let pos = { x: x, y: y };
    return pos;
};

