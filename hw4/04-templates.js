const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;
// Use Pug as the templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// REST Countries URL
const url = 'https://restcountries.com/v3.1/all';

// Add your code here


let dataArr = [];
axios.get(url)
    .then(response => {
        const data = response.data;
        dataArr = data;
    });

app.get('/', (req, res) => {
  // render pug template for the index.html file
  res.render('index', {
    heading: 'Countries of the World',
    main: 'Welcome to this application. Using the REST Countries API, we will be showing the countries and capitals of the world, the most populous countries in the world, and the number of countries in each region of the world',
  });
});

app.get('/capitals', (req, res) => {
  // map the output array to create an array with country names and capitals
  // check for empty data in the output array

  let len = dataArr.length ;
  let arr = [];
  for ( let i = 0 ; i < len ; i++) {
    let value = `${dataArr[i].name.common} - ${dataArr[i].capital}`;
    arr.push(value);
  };
  arr.sort((a, b) => a.localeCompare(b));
  // let countries = ['Afghanistan', 'Aland Islands', 'Albania'];
  res.render('page', {
    heading: 'Countries and Capitals',
    results: arr,
  });
});

app.get('/populous', (req, res) => {
  // filter the output array for the countries with population of 50 million or more
  // sort the resulting array to show the results in order of population
  // map the resulting array into a new array with the country name and formatted population

  let len = dataArr.length ;
  let populous = [];
  let populous2 = [];
  
  for ( let i = 0 ; i < len ; i++) {
    if(dataArr[i].population > 50000000){
      let value = dataArr[i].population;
      populous.push(value);
    }
    populous.sort((a, b) => b - a);
  };

  let len2 = populous.length;
  for ( let i = 0 ; i < len2 ; i++) {
    for ( let j = 0 ; j < len ; j++) {
      if(dataArr[j].population == populous[i]){
        let value = `${dataArr[j].name.common} - ${dataArr[j].population.toLocaleString('en-US')}`;
        populous2.push(value);
      }
    } 
  };

  res.render('page', {
    heading: 'Most Populous Countries',
    results: populous2,
  });
});

app.get('/regions', (req, res) => {
  // reduce the output array in a resulting object that will feature the numbers of countries in each region
  // disregard empty data from the output array

  let len = dataArr.length ;
  let regions = [];
  let count1 = 0 ;
  let count2 = 0 ;
  let count3 = 0 ;
  let count4 = 0 ;
  let count5 = 0 ;
  let count6 = 0 ;

  for ( let i = 0 ; i < len ; i++) {
    if(dataArr[i].region === 'Asia') {
      count1 =  count1 + 1; 
    } else if(dataArr[i].region === 'Europe') {
      count2 = count2 + 1; 
    } else if(dataArr[i].region === 'Africa') {
      count3 = count3 + 1; 
    } else if(dataArr[i].region === 'Oceania') {
      count4 = count4 + 1; 
    } else if (dataArr[i].region === 'Americas') {
      count5 = count5+ 1; 
    } else if (dataArr[i].region === 'Polar') {
      count6 = count6 + 1; 
    }
  };
  regions.push(`Asia - ${count1}`);
  regions.push(`Europe - ${count2}`);
  regions.push(`Africa - ${count3}`);
  regions.push(`Oceania - ${count4}`);
  regions.push(`Americas - ${count5}`);
  regions.push(`Polar - ${count6}`);

  res.render('page', {
    heading: 'Regions of the World',
    results: regions,
  });

});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
