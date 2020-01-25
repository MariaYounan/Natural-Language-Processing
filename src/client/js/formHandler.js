"use strict"
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    const postval = fetch('http://localhost:3001/post', {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
    //    Body data type must match "Content-Type" header        
        body: JSON.stringify({input: formText}) 
       }).then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        document.getElementById('polarity').innerHTML = 'Polarity: ' + myJson.polarity;
        document.getElementById('subjectivity').innerHTML = 'subjectivity: ' + myJson.subjectivity;
        document.getElementById('text').innerHTML = 'text: ' + myJson.text;
        document.getElementById('polarity_confidence').innerHTML = 'polarity_confidence: ' + myJson.polarity_confidence;
        document.getElementById('subjectivity_confidence').innerHTML = 'subjectivity_confidence: ' + myJson.subjectivity_confidence;

      });
}

export { handleSubmit }
