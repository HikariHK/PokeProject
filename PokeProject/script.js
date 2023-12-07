function setEqualHeight() {
    var pokeSummaryItems = document.querySelectorAll('.poke-summary');
    var maxHeight = 0;

    // Find the tallest "poke-summary" div
    pokeSummaryItems.forEach(function(item) {
        var height = item.clientHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    // Set the height of all "poke-summary" divs to match the tallest one
    pokeSummaryItems.forEach(function(item) {
        item.style.height = maxHeight + 'px';
    });
}

// Call the function when the page loads
window.addEventListener('load', setEqualHeight);

// Call the function when the window is resized (optional)
window.addEventListener('resize', setEqualHeight);