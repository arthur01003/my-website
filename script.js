// Function to handle showing shop options based on the clicked service
function showOptions(service) {
    const shopSection = document.getElementById('shop-options');
    const shopTitle = document.getElementById('shop-title');
    const shopItems = document.getElementById('shop-items');

    if (service === 'wrap') {
        shopTitle.textContent = "Choose Your Wrap Options";
        const options = [
            { name: "Gloss Black", image: "https://via.placeholder.com/200x150?text=Gloss+Black", price: "$500" },
            { name: "Matte Red", image: "https://via.placeholder.com/200x150?text=Matte+Red", price: "$550" },
            { name: "Satin Blue", image: "https://via.placeholder.com/200x150?text=Satin+Blue", price: "$600" },
        ];
        
        shopItems.innerHTML = options.map(option => `
            <div class="wrap-item">
                <img src="${option.image}" alt="${option.name}">
                <h4>${option.name}</h4>
                <p>${option.price}</p>
            </div>
        `).join('');
    } else if (service === 'tinting') {
        shopTitle.textContent = "Choose Your Tint Percentage";
        const tintOptions = [
            { name: "20% Tint", image: "https://via.placeholder.com/200x150?text=20%+Tint", price: "$150" },
            { name: "35% Tint", image: "https://via.placeholder.com/200x150?text=35%+Tint", price: "$175" },
            { name: "50% Tint", image: "https://via.placeholder.com/200x150?text=50%+Tint", price: "$200" },
        ];

        shopItems.innerHTML = tintOptions.map(option => `
            <div class="wrap-item">
                <img src="${option.image}" alt="${option.name}">
                <h4>${option.name}</h4>
                <p>${option.price}</p>
            </div>
        `).join('');
    }

    shopSection.style.display = 'block';
}

// Function to go back to the services section
function goBack() {
    document.getElementById('shop-options').style.display = 'none';
}
