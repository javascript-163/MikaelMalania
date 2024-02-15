let currentState = localStorage.getItem('currentState') || "none";

function buttonClickHandler() {
    let menuItems = document.querySelector(".menuItems");
    if (currentState === "none") {
        menuItems.style.display = "block";
        currentState = "block";
    } else if (currentState === "block") {
        menuItems.style.display = "none";
        currentState = "none";
    }
    
    localStorage.setItem('currentState', currentState);
}

// // @ts-check
// let currentState = localStorage.getItem('currentState') || "none";

// function buttonClickHandler() {
//     let menuItems = document.querySelector(".menuItems");
//     if (menuItems instanceof HTMLElement) { 
//         if (currentState === "none") {
//             menuItems.style.display = "block";
//             currentState = "block";
//         } else if (currentState === "block") {
//             menuItems.style.display = "none";
//             currentState = "none";
//         }
        
//         localStorage.setItem('currentState', currentState);
//     }
// }
