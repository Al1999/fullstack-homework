/** Exercise 04 - API **/

const url = 'https://restcountries.com/v3.1/all';

async function getData(url) {
    
    fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then(data => {
      console.log(data);
      showData(data);
    })
    .catch((error) => console.error("FETCH ERROR:", error));

};

function showData (data) {
    
    len = data.length;
    for ( let i = 0 ; i < len ; i++) {
        let value = `${i+1}. ${data[i].name.common} - ${data[i].population.toLocaleString('en-US')}\n`;
        document.getElementById("results").innerHTML += value + "<br />";
    };

};

getData(url);
