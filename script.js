// Function to handle showing shop options based on the clicked service
function showOptions(service) {
    const shopSection = document.getElementById('shop-options');
    const tintSection = document.getElementById('tint-options');
    const shopTitle = document.getElementById('shop-title');
    const shopItems = document.getElementById('shop-items');
    
    if (service === 'wrap') {
        shopTitle.textContent = "Choose Your Wrap";
        const wrapOptions = [
            { name: "Gloss Red", image: "https://via.placeholder.com/200x150?text=Gloss+Red", price: "$500" },
            { name: "Matte Black", image: "https://via.placeholder.com/200x150?text=Matte+Black", price: "$450" },
            { name: "Satin Blue", image: "https://via.placeholder.com/200x150?text=Satin+Blue", price: "$600" }
        ];

        shopItems.innerHTML = wrapOptions.map(option => `
            <div class="wrap-item">
                <img src="${option.image}" alt="${option.name}">
                <h4>${option.name}</h4>
                <p>${option.price}</p>
            </div>
        `).join('');

        shopSection.style.display = 'block';
        tintSection.style.display = 'none';
    } else if (service === 'tinting') {
        shopSection.style.display = 'none';
        tintSection.style.display = 'block';
    }
}

// Function to go back to the services section
function goBack() {
    document.getElementById('shop-options').style.display = 'none';
    document.getElementById('tint-options').style.display = 'none';
}
