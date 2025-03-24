// Database

let database = {
    wind: {
        title: "Implementing Green Energy Solutions",
        url: "imgmasthead4.jpg",
        alt: "a beautiful field",
        body: "Implementing green energy solutions in your home can significantly reduce energy bills and contribute to environmental sustainability. Hydropower has long been a reliable and established source of renewable energy, but the future of this energy sector is poised for transformation. As the world shifts toward cleaner, more sustainable energy."
    },
    sun: {
        title: "The Future of Solar Energy",
        url: "img/masthead1.jpg",
        alt: "a lit light bulb",
        body: "Installing solar panels harness sunlight to generate electricity, offering a renewable and cost-effective energy source. By installing solar panels, homeowners can meet 50-100% of their electricity needs, with an average payback period of 4-8 years when considering available incentives. The future of solar energy is bright and promising, driven by rapid advancements in technology, increasing environmental concerns, and the growing demand for sustainable solutions. Solar power is expected to continue its rise as a leading source of clean, renewable energy."
    },
    water: {
        title: "The Impact of Eco-Friendly Practices",
        url: "img/masthead2.jpg",
        alt: "an unlit light bulb",
        body: "Adopting heat pumps efficiently also transfer heat from external sources to heat or cool your home. While the initial installation cost can be high, subscription models and government subsidies are emerging to make heat pumps more affordable. These systems can significantly lower heating bills, with potential savings of over £400 per year, eventually offsetting the upfront investment. By exploring these options, homeowners can transition to renewable energy sources, leading to long-term financial savings and a reduced carbon footprint."
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
