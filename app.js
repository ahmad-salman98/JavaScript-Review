// =============== Ex 1 =================

// function isPositive(num) {
//     if (num > 0)
//         return false;
//     else return true
// }

// console.log(isPositive(-3));
// console.log(isPositive(0));
// console.log(isPositive(3));


// =============== Ex 2 =================

// function prentNext(num) {
//     return num + 1;
// }
// console.log(prentNext(5));


// =============== Ex 3 =================


// function DoesContainsNumber(arr) {
//     function containsNumbers(str) {
//         return /[0-9]/.test(str);
//     }


//     let result = [];

//     arr.forEach(element => {
//         if (containsNumbers(element)) {
//             result.push(element)
//         }
//     });
//     return result;
// }
// let arr = ['ahmad', 'ahmad98', 'salman', 'salman98'];

// console.log(DoesContainsNumber(arr));



// =============== Ex 4 =================

// there is no need to use recrusion in this examble, recrusion is used to do call a function several times under some condition, but here we are checking only once, so no recrusion needed

// function isEven(num) {
//     if (num % 2 == 0) return num + " is even";
//     else return num + ' is odd';
// }
// console.log(isEven(3));
// console.log(isEven(4));


// recrusion example

// write a function that takes a number and devide it by two while the number >= 1

// function recrusion(num) {
//     console.log(num);
//     const newNum = num / 2;
//     if (newNum >= 1) {
//         recrusion(newNum);
//     }
// }

// recrusion(20);


// =============== Ex 5 =================

// function swapChar(str1, ch1, ch2) {

//     str = str1.split('');
//     let result = str.map(e => {
//         if (e == ch1) {
//             return e = ch2;
//         }
//         else if (e == ch2) {
//             return e = ch1;
//         }
//         else {
//             return e;
//         }

//     });
//     return result.join('');
// }

// console.log(swapChar('aaddeeee', 'a', 'd'));

// =============== Ex 6 =================

// Ex6: Return all the names in this array[“Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", “Dareen”]

// const arr = ['Rawan', "Jafar", "Muhammad", "Muhammad", "Esraa", 'Dareen'];


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// =============== Ex 7 =================
// Ex7: Use forEach to  Return all the names in the previous array

// const arr = ['Rawan', "Jafar", "Muhammad", "Muhammad", "Esraa", 'Dareen'];

// arr.forEach(e => console.log(e));

// =============== Ex 8 =================
// Ex8: Project an array of series into an array of { id, title } pairs using forEach()

let newSeries = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];


// function projection(id, title) {
//     this.id = id;
//     this.title = title;
// }

// let newArr = [];

// newSeries.forEach(element => {
//     let instance = new projection(element['id'], element['title']);
//     newArr.push(instance);
// });

// =============== Ex 9 =================
// Ex 9: Use map() now to implement the same previous functionality

// function projection(id, title) {
//     this.id = id;
//     this.title = title;
// }


// let newArr = newSeries.map(e => {
//     return new projection(e.id, e.title);
// });
// console.log(newArr);

// =============== Ex 10 =================
// Ex 10: Use filter() to return the series with a rating under 5

// const result = newSeries.filter(e => {
//     return e['rating'] < 5;
// });
// console.log(result);

// =============== Ex 11 =================
// Ex 11: Use reduce()  function to return the longest string in an array of strings.

// const arr = ["Java", "JavaScript", "Python", "C++", "PHP"];
// let result = '';
// arr.forEach(e => {
//     if (e.length > result.length)
//         result = e;
// });

// console.log(result);


// =============== Ex 12 =================

// Ex 12: Create a function displayName that, given the pokemon data, below, uses reduce to return an array containing the names of the characters.


// let pokemonData = [
//     {
//         "game_index": 76,
//         "version": {
//             "name": "red",
//             "url": "https://pokeapi.co/api/v2/version/1/"
//         }
//     },
//     {
//         "game_index": 76,
//         "version": {
//             "name": "blue",
//             "url": "https://pokeapi.co/api/v2/version/2/"
//         }
//     },
//     {
//         "game_index": 76,
//         "version": {
//             "name": "yellow",
//             "url": "https://pokeapi.co/api/v2/version/3/"
//         }
//     },
//     {
//         "game_index": 132,
//         "version": {
//             "name": "gold",
//             "url": "https://pokeapi.co/api/v2/version/4/"
//         }
//     },
//     {
//         "game_index": 132,
//         "version": {
//             "name": "silver",
//             "url": "https://pokeapi.co/api/v2/version/5/"
//         }
//     },
//     {
//         "game_index": 132,
//         "version": {
//             "name": "crystal",
//             "url": "https://pokeapi.co/api/v2/version/6/"
//         }
//     },
//     {
//         "game_index": 132,
//         "version": {
//             "name": "ruby",
//             "url": "https://pokeapi.co/api/v2/version/7/"
//         }
//     },
//     {
//         "game_index": 132,
//         "version": {
//             "name": "sapphire",
//             "url": "https://pokeapi.co/api/v2/version/8/"
//         }
//     },
//     {
//         "game_index": 132,
//         "version": {
//             "name": "emerald",
//             "url": "https://pokeapi.co/api/v2/version/9/"
//         }
//     },
//     {
//         "game_index": 132,
//         "version": {
//             "name": "firered",
//             "url": "https://pokeapi.co/api/v2/version/10/"
//         }
//     },
//     {
//         "game_index": 132,
//         "version": {
//             "name": "leafgreen",
//             "url": "https://pokeapi.co/api/v2/version/11/"
//         }
//     },
//     {
//         "game_index": 132,
//         "version": {
//             "name": "diamond",
//             "url": "https://pokeapi.co/api/v2/version/12/"
//         }
//     }];

// function displayName(arr) {

//     let newArr = arr.reduce(
//         function (acc, curr) { acc.push(curr.version.name);  return acc;    } , []);
//     return newArr;
// }
// console.log(displayName(pokemonData));


// =============== Ex 13 =================
// /Ex13: Write a function that takes the following array of objects, uses binary search to search for certain email input from the user, and return its value.

// function binarySearch(items, value) {
//     var startIndex = 0,
//         stopIndex = items.length - 1;
//         middle = Math.floor((stopIndex + startIndex) / 2);

//     while (items[middle] != value && startIndex < stopIndex) {

//         //adjust search area
//         if (value < items[middle]) {
//             stopIndex = middle - 1;
//         } else if (value > items[middle]) {
//             startIndex = middle + 1;
//         }

//         //recalculate middle
//         middle = Math.floor((stopIndex + startIndex) / 2);
//     }

//     //make sure it's the right value
//     return (items[middle] != value) ? -1 : middle;
// }

// // Driver method to test above
// let arr = ["contribute", "geeks", "ide", "practice"];
// let x = "practice";
// let result = binarySearch(arr, x);
// if (result == -1)
//     console.log("Element not present");
// else
//     console.log("Element found at "
//         + "index " + result );


//  I do not understand this example

// =============== Ex 14=================

// answ : hi coach ! Rawan
// ans : has car ? undefined => it should be:
// var employee = {
// firstName: 'Rawan',
//     info: {
//     hasCar: true,
//         hasPet: true
// },
// printInfo: function() {
//     console.log("Car owner? " + this.info.hasCar);
// }
// }

// employee.printInfo();


// ans : Zarqa