//JSON Validator:https://www.freeformatter.com/json-formatter.html
//Retrieve the data:
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

let url = 'content/data.json';
fetch(url)



// Load your images on page-load
function preloader() {
    const imagesList = [
       "./img/img-1.jpg",
       "./img/img-2.jpg",
       "./img/img-3.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);


// Database

let database = {
    wind: {
        "title": "Title Goes here",
        "url": "https://placehold.co/400?text=Wind",
        "alt": "an image of ....",
        "body": "Content about wind ..."
    },
    sun: {
        "title": "Title Goes here",
        "url": "https://placehold.co/400?text=Sun",
        "alt": "an image of ....",
        "body": "Content about sun ..."
    },
    water: {
        "title": "Title Goes here",
        "url": "https://placehold.co/400?text=Water",
        "alt": "an image of ....",
        "body": "Content about water ..."
    }
}


// Get references to hard coded HTML
let content = document.querySelector('.content');

let btns = document.querySelectorAll('.controls button');

// console.log(content, btns);

// DISPLAY the initial Content 


content.innerHTML = `
                    <h2>${database.wind.title}</h2>
                    <img src="${database.wind.url}" alt="${database.wind.alt}">
                    <p>${database.wind.body}</p>
                    `
;
                    
function handleClick(e) {
    

    for (let btn of btns ) {

        if (btn.hasAttribute('class')) {
            btn.removeAttribute('class');
        }
    }
    
    let current = e.target;
    // console.log(current.dataset.id);

    current.classList.add('active');

    let key = current.dataset.id;
    content.innerHTML = `<h2>${database[key].title}</h2>
    <img src="${database[key].url}" alt="${database[key].alt}">
    <p>${database[key].body}</p>`;
}

for (let btn of btns ) {
    btn.addEventListener('click', handleClick);
}