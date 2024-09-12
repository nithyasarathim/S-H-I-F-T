const quotebox = document.getElementById('quote');

async function getQuote() {
    try {
        const response = await fetch('https://zenquotes.io/api/today');
        const data = await response.json();
        quotebox.innerHTML = data[0].q + " - " + data[0].a;
    } catch (error) {
        console.error('Error fetching the quote:', error);
        getQuote();
    }
}

getQuote();
