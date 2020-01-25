function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    if (!inputText){
        document.getElementById('polarity').innerHTML = ' ';
        document.getElementById('subjectivity').innerHTML = ' ';
        document.getElementById('text').innerHTML = ' ';
        document.getElementById('polarity_confidence').innerHTML = ' ';
        document.getElementById('subjectivity_confidence').innerHTML = ' ';

        alert("Invalid Input, please enter a valid text");
    }
}

export { checkForName }
