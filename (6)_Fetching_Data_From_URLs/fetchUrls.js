/*
Instructions:

1. Asynchronously fetch data from different URLs and store the data in the `dataArray`.
2. Filter the data based on the city name.
3. Display the data for the city of Lisbon by manipulating the DOM

*/
(async function fetchData(dataArray = []) {
// Performs a fetch request with the passed URL and returns the data as text asynchronously
const makeRequest = async function (url) {
const response = await fetch(url);
const data = await response.text();
return data;
};

// don't change this function, you will need to pass the Lisbon data to it to complete this exercise
/**
* @param data - the first parameter for this function should be your variable with the stored Lisbon weather data
* @param dataArr - the dataArray variable which should hold all four data responses from the given URLs
*/
const addLisbonDataToDocument = (data, dataArr = []) => {
// validate data format and data
data = JSON.parse(data);
if (data.name !== 'Lisbon') {
data = null;
}

// create DOM element for Lisbon Data and add it to document
let arrayLengthDiv = document.createElement('div');
arrayLengthDiv.innerHTML = `<div id="array-length-div">Data Items:${dataArr.length}</div>`;
document.body.appendChild(arrayLengthDiv);

// create DOM element for Lisbon Data and add it to document
let lisbonDiv = document.createElement('div');
lisbonDiv.innerHTML = `<div id="lisbon-data-div">Weather:${JSON.stringify(data)}</div>`;
document.body.appendChild(lisbonDiv);
};

const urlArray = [
'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=40d4c0eea8ba920661178193b1f00ba5',
'https://api.openweathermap.org/data/2.5/weather?q=Houston&APPID=40d4c0eea8ba920661178193b1f00ba5',
'https://api.openweathermap.org/data/2.5/weather?q=Lisbon&APPID=40d4c0eea8ba920661178193b1f00ba5',
'https://api.openweathermap.org/data/2.5/weather?q=Baltimore&APPID=40d4c0eea8ba920661178193b1f00ba5',
];

urlArray.forEach(async (url) => {
makeRequest(url).then(function (result) {
  fetch = (result)
  dataArray.push(fetch)
// STEP 1: Store `result` inside the variable dataArray, this is required to pass this exercise

if (dataArray.length == urlArray.length) {
// STEP 2: Loop through each item in the `dataArray` and use the logic below by uncommenting the code
// to see if it is the correct weather data for `Lisbon`
dataArray.forEach((item) => {
if (JSON.parse(item).name == "Lisbon") {
addLisbonDataToDocument(item, dataArray);
}
});
// STEP 3: Return dataArray
return dataArray
}
});
});
})();

//don't change this code
// if (typeof module !== 'undefined') {
// module.exports = { fetchData };
// }

// Note from Andrew:
// This program relies on the code in the online-assignment workspace. 
// if you run it within VS, (I also tried running it on chrome,) 
// it will say "fetchData is not defined" if you comment/debug the module export it will 
// instead say "fetch is not defined" (chrome will simply have a page error "localhost refused to connect." 
// regardless of what combination of "debuging the module export" or "NOT debuging the module export" and 
// "Launch Chrome" or "launch chrome against localhost" you use.) I do not know how to fix this
// [no, dowloading the original working one without these comments does not help either]