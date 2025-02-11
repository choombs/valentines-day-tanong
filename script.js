// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Flash rainbow colors and then display cat-heart GIF
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide question
            displayCatHeart(); // Show cat-heart Tenor GIF
        });
    } else if (option === 'no') {
        // Change "No" button text to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?';

        // Increase "Yes" button font size
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 1.5; // Increase size by 1.5x
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) callback();
    }, 2000);
}

// Function to display the initial sad cat Tenor GIF
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = `
        <div class="tenor-gif-embed" data-postid="26616189" data-share-method="host" data-aspect-ratio="1" data-width="100%">
            <a href="https://tenor.com/view/sad-cat-uwu-sad-cat-uwu-cat-sad-gif-26616189">Sad Cat Uwu Uwu GIF</a> 
            from <a href="https://tenor.com/search/sad+cat+uwu-gifs">Sad Cat Uwu GIFs</a>
        </div>
    `;

    loadTenorScript(); // Load Tenor embed script
}

// Function to display the happy cat-heart Tenor GIF
function displayCatHeart() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = `
        <div class="tenor-gif-embed" data-postid="16606050094708454978" data-share-method="host" data-aspect-ratio="1.02469" data-width="100%">
            <a href="https://tenor.com/view/cat-gif-16606050094708454978">Cat Sticker</a> 
            from <a href="https://tenor.com/search/cat-stickers">Cat Stickers</a>
        </div>
    `;

    document.getElementById('options').style.display = 'none'; // Hide buttons
    loadTenorScript(); // Load Tenor embed script
}

// Function to dynamically load the Tenor script (ensures the GIFs display properly)
function loadTenorScript() {
    var script = document.createElement('script');
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
}

// Display the initial sad cat GIF
displayCat();
