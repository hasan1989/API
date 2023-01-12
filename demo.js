function tryFetch(){
    fetch('https://api.worldbank.org/v2/countries/all/indicators/NY.GDP.MKTP.CD')
    .then(response => response.text())
    .then(data => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "text/xml");
        secondFunction(xml);
    });
} 


function secondFunction(users){
    let mydata = users.getElementsByTagName('wb:value');
    for(i = 0; i< mydata.length; i++) {
        console.log(mydata[i].innerHTML);
    }
 };




// FOLLOWING SECTION IS WORKING AS PER PROGRAMMING HERO
// THIS IS EXAMPLE OF JSON RETURN

// function tryFetch(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => secondFunction(data));
// } 



// function secondFunction(users){
//     for(const user of users){
//         const ul = document.getElementById('ullist');
//         const lilat = document.createElement('li');
//         lilat.innerHTML = user.name;
//         ul.appendChild(lilat);
//     }
// }

