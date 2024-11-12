// Function to handle showing shop options based on the clicked service
function showOptions(service) {
    const shopSection = document.getElementById('shop-options');
    const shopTitle = document.getElementById('shop-title');
    const shopItems = document.getElementById('shop-items');

    let options = [];
    if (service === 'wrap') {
        shopTitle.textContent = "Choose Your Wrap Options";
        options = [
            { name: "Gloss Black", image: "https://via.placeholder.com/200x150?text=Gloss+Black", price: "$500" },
            { name: "Matte Red", image: "https://via.placeholder.com/200x150?text=Matte+Red", price: "$600" },
            { name: "Custom Design", image: "https://via.placeholder.com/200x150?text=Custom+Design", price: "Contact for Pricing" },
        ];
    } else if (service === 'dechroming') {
        shopTitle.textContent = "Dechroming Options";
        options = [
            { name: "Chrome Delete", image: "https://via.placeholder.com/200x150?text=Chrome+Delete", price: "$300" },
        ];
    } else if (service === 'detailing') {
        shopTitle.textContent = "Exterior Detailing Options";
        options = [
            { name: "Full Detail", image: "https://via.placeholder.com/200x150?text=Full+Detail", price: "$200" },
        ];
    } else if (service === 'tinting') {
        shopTitle.textContent = "Window Tinting Options";
        options = [
            { name: "Ceramic Tint", image: "https://via.placeholder.com/200x150?text=Ceramic+Tint", price: "$250" },
        ];
    }

    shopItems.innerHTML = options.map(option => `
        <div class="wrap-item">
            <img src="${option.image}" alt="${option.name}">
            <h4>${option.name}</h4>
            <p>${option.price}</p>
        </div>
    `).join('');
    shopSection.style.display = 'block';
}

// Function to go back to the services section
function goBack() {
    document.getElementById('shop-options').style.display = 'none';
}
