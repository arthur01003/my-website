// Function to handle showing shop options based on the clicked service
function showOptions(service) {
    const shopSection = document.getElementById('shop-options');
    const shopTitle = document.getElementById('shop-title');
    const shopItems = document.getElementById('shop-items');

    let options = [];
    if (service === 'wrap') {
        shopTitle.textContent = "Choose Your Wrap Options";
        options = [
            { name: "Gloss Black", image: "images/gloss_black.jpg", price: "$500" },
            { name: "Matte Red", image: "images/matte_red.jpg", price: "$600" },
            { name: "Custom Design", image: "images/custom.jpg", price: "Contact for Pricing" },
        ];
    } else if (service === 'dechroming') {
        shopTitle.textContent = "Dechroming Options";
        options = [
            { name: "Chrome Delete", image: "images/chrome_delete.jpg", price: "$300" },
        ];
    } else if (service === 'detailing') {
        shopTitle.textContent = "Exterior Detailing Options";
        options = [
            { name: "Full Detail", image: "images/full_detail.jpg", price: "$200" },
        ];
    } else if (service === 'tinting') {
        shopTitle.textContent = "Window Tinting Options";
        options = [
            { name: "Ceramic Tint", image: "images/ceramic_tint.jpg", price: "$150" },
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

// Function to go back to the main page
function goBack() {
   
