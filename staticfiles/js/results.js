// Array containing data for each card
var cardDataArray = [
    { number: "01", title: "Infiltrations", confidence: "52.09 Confident", progress: 52.09 },
    { number: "02", title: "Infiltrations", confidence: "55.09 Confident", progress: 70.09 },
    { number: "01", title: "Infiltrations", confidence: "52.09 Confident", progress: 52.09 },
    { number: "02", title: "Infiltrations", confidence: "55.09 Confident", progress: 30.09 },
    { number: "01", title: "Infiltrations", confidence: "52.09 Confident", progress: 5.09 },
    { number: "02", title: "Infiltrations", confidence: "55.09 Confident", progress: 19.09 },
];

var container2 = document.getElementById('dynamicCardContainer2');

// Loop through the array and create cards dynamically
cardDataArray.forEach(function (item) {
    // Create results card element
    var resultsCard = document.createElement('div');
    resultsCard.classList.add('resultscard');

    // Create number element
    var number = document.createElement('div');
    number.classList.add('number');
    number.textContent = item.number;

    // Create results details element
    var resultsDets = document.createElement('div');
    resultsDets.classList.add('resultsdets');

    // Create title (h5) element
    var title = document.createElement('h5');
    title.textContent = item.title;

    // Create confidence (h6) element
    var confidence = document.createElement('h6');
    confidence.textContent = item.confidence;

    // Create progress bar element
    var progressBarContainer = document.createElement('div');
    progressBarContainer.classList.add('progress-bar-container');

    var progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    progressBar.style.width = item.progress + '%';

    progressBarContainer.appendChild(progressBar);

    // Append elements to results details
    resultsDets.appendChild(title);
    resultsDets.appendChild(confidence);
    resultsDets.appendChild(progressBarContainer);

    // Append number and results details to results card
    resultsCard.appendChild(number);
    resultsCard.appendChild(resultsDets);

    // Append results card to container
    container2.appendChild(resultsCard);
});
