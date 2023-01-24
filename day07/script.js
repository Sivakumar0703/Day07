
// a.Get all the countries from the Asia continent /region using the Filter function

 var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
    var result = JSON.parse(request.response);
    var answer = result.filter((con) => con.continents == 'Asia');
    for(let i=0;i<answer.length;i++){
    console.log(answer[i].name.official);
    }
} 

// b. Get all the countries with a population of less than 2 lakhs using Filter function

/* var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
    var result = JSON.parse(request.response);
    var answer = result.filter((con) => con.population < 200000);
    for(let i=0;i<answer.length;i++){
    console.log(answer[i].name.official);
    } 
}  */

// c. Print the following details name, capital, flag using forEach function

/* var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
    var result = JSON.parse(request.response);
    //console.log(result);
    result.forEach((element) => console.log("COUNTRY_NAME :",element.name.official ," | ","CAPITAL :", element.capital[0] ," | ", "FLAG :",element.flags.png));
} */

// d. Print the total population of countries using reduce function

/* var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
    var result = JSON.parse(request.response);
   let population = [];
for(let i=0;i<result.length;i++){
   population.push(result[i].population);
}
const Total_population = population.reduce((acc,curr) => {
    acc = acc + curr;
    return acc;
},0);
console.log("Total Population of Countries: ",Total_population);
} */

//e. Print the country which uses US Dollars as currency.

/*var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
    var result = JSON.parse(request.response);
    for(let i=0;i<result.length;i++){
        if(result[i].currencies?.USD){
            console.log(result[i].name.official);
        }    
    } 
} */