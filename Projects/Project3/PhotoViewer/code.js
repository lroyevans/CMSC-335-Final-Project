"use strict"; 
let photos = new Array; // array will be the src names
let pho_idx = 0;
let idGlobal;
const intervalInMilliseconds = 1000;

const Actions = Object.freeze({
    INC: 'inc',
    DEC: 'dec',
    START: 'start',
    END: 'end'
});

function initialize(){
    //clear photos array
    photos = [];
    pho_idx = 0;
    updateStatus("Photo Viewer System");
}

function updateStatus(message){
    document.querySelector("#status_display").innerHTML = message;
}

//switch on enumerator would be easier
function updateImage(action){
    // if photos is empty will be undefined
    let len = photos.length - 1;
    if(len === -1){
        updateStatus("Error: you must load data first"); 
        return;
    }
    switch(action){
        case Actions.INC:
            pho_idx++;
            if(pho_idx > len){
                pho_idx = 0;
            }
            break;
        case Actions.DEC:
            pho_idx--;
            if(pho_idx < 0){
                pho_idx = len;
            }
            break;
        case Actions.START:
            pho_idx = 0;
            break;
        case Actions.END:
            pho_idx = len;
    }
    //update the actual image, set img src = photos[pho_idx]
    document.getElementById("display_image").src = photos[pho_idx];
    // update "photo being dispalyed", just the src of photo
    document.getElementById("photoURL").value = photos[pho_idx];
}

function loadPhotos(){
    //getting params from the form
    const folder = document.getElementById("folder").value;
    const name = document.getElementById("name").value;
    const start = document.getElementById("start").value;
    const end = document.getElementById("end").value;
    
    let path = folder + name;
    //update the actual photos array to represent the requested photo range
    if(start <= end){
        initialize();
        //if given greater bounds have undefined images, causes problems
        for(let i = start; i <= end; i++){
            photos.push(path + String(i) + ".jpg");
        }
        updateImage(Actions.START);
    } else {
        updateStatus("Error: Invalid Range");
    }
}

async function loadJSON(){
    const url = document.getElementById("json").value;
    const response = await fetch(url);
    //check file exists
    if(response.ok){
        alert("response ok");
        initialize();
        const str =  await response.text();
        const obj = JSON.parse(str);
        //loading valid iamges
        //LAMBDA
        obj.images.forEach(element => {
           photos.push(element.imageURL); 
        });
        updateImage(Actions.START);
    } else {
        // update "photo viewer system, if error occurs"
        updateStatus("JSON fetch not ok");
    }
}

function stopAnimation() {
    clearInterval(idGlobal);
}

function startAnimation() {
    /* setInterval calls the function swapImages at the specified rate */
    idGlobal = setInterval("updateImage(Actions.INC)", intervalInMilliseconds);
}
function randAnimation(){
    //randomize array
    photos.sort((x, y) => Math.random() - 0.5);
    startAnimation(); 
}