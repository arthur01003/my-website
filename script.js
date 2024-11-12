// Function to handle showing shop options based on the clicked service
function showOptions(service) {
    const shopSection = document.getElementById('shop-options');
    const shopTitle = document.getElementById('shop-title');
    const shopItems = document.getElementById('shop-items');

    if (service === 'wrap') {
        shopTitle.textContent = "Choose Your Wrap Options";
        const options = [
            { name: "Gloss Black", image: "https://via.placeholder.com/200x150?text=Gloss+Black", price: "$500" },
            { name: "Matte Red", image: "https://via.placeholder.com/200x150?text=Matte+
