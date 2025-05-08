console.log("Project.js loaded");
showNotes();
// Note added , add to local storage 
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click',function(e){
    let addTxt = document.getElementById("addTxt") ; 
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj =[];
    }
    else{
        notesObj = JSON.parse(notes);

    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value ="";
    console.log(notes);
    showNotes();
})
// Function to show elements from local storage
function showNotes() {
    let notes = localStorage.getItem("notes");
    let html = "";
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>     
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>  
        </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;

        // Apply dark mode styles to new notes if dark mode is active
        if (document.body.classList.contains("dark-mode")) {
            let noteCards = document.getElementsByClassName('noteCard');
            Array.from(noteCards).forEach(function (element) {
                element.style.backgroundColor = "#111827";
                element.style.border = "1px solid white";
                element.style.color = "#d3d3d3";
            });
        }
    } else {
        notesElm.innerHTML = `<div style="font-family : cursive; "><h3>Nothing to show! Use "Add a Note" section above to add notes.</h3></div>`;
    }
}

// Function to delete a note
function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj =[];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
// Search functionality
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })

});
// Dark mode functionality
let darkMode = document.getElementById('darkMode');
darkMode.addEventListener('click', function(){
    let element = document.body;
    element.classList.toggle("dark-mode");
    if(element.classList.contains("dark-mode")){
        darkMode.innerText = "Light Mode 🌞";
        document.body.style.backgroundColor = "#1F2937";
        document.body.style.color = "white";
        let noteCards = document.getElementsByClassName('noteCard');
        Array.from(noteCards).forEach(function(element){
            element.style.backgroundColor = "purple";
            element.style.color = "white";

        })
        let elem = document.getElementsByClassName('card');
        Array.from(elem).forEach(function(element){
            element.style.backgroundColor = "#111827";
            element.style.color = "white";
            element.style.border = "1px solid white";
        })
        let elem2 = document.getElementsByClassName('form-control');
        Array.from(elem2).forEach(function(element){
            element.style.backgroundColor = "#60A5FA";
            element.style.color = "white";
            element.style.border = "1px solid white";
        })
        let elem3 = document.getElementsByClassName('btn');
        Array.from(elem3).forEach(function(element){
            element.style.backgroundColor = "#3B82F6";
            element.style.color = "white";
            element.style.border = "1px solid white";
        })
    }
    else{
        darkMode.innerText = "Dark Mode 🌙";
        document.body.style.backgroundColor = "#F9FAFB";
        document.body.style.color = "black";
        let noteCards = document.getElementsByClassName('noteCard');
        Array.from(noteCards).forEach(function(element){
            element.style.backgroundColor = "#6B7280";
            element.style.color = "black";

        })
        let elem = document.getElementsByClassName('card');
        Array.from(elem).forEach(function(element){
            element.style.backgroundColor = "lightgrey";
            element.style.color = "black";
            element.style.border = "1px solid black";
        })
        let elem2 = document.getElementsByClassName('form-control');
        Array.from(elem2).forEach(function(element){
            element.style.backgroundColor = "#FFF7ED";
            element.style.color = "black";
            element.style.border = "1px solid black";
        })
        let elem3 = document.getElementsByClassName('btn');
        Array.from(elem3).forEach(function(element){
            element.style.backgroundColor = "#3B82F6";
            element.style.color = "white";
            element.style.border = "1px solid black";
        })

    }
});


