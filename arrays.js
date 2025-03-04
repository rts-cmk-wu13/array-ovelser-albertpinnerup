document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 

    // !OPGAVE 1

    newNumbers = [];

    numbersArray.forEach(number => {
        if (number > 20) {
            newNumbers.push(number);
        }
    });

    console.log(newNumbers);



    // ! OPGAVE 2

    catsArray.push("Sniffles");

    console.log(catsArray);



    // ! OPGAVE 3

    console.log(dogsArray.includes("Trixie"));

    console.log(dogsArray.includes("Baxter"));



    // ! OPGAVE 4

    function catsNames(navn) {
        const catsResults = catsArray.find((cat) => cat === navn);
        console.log(catsResults);
    }

    catsNames("Bagheera");

    catsNames("Salem");



    // ! OPGAVE 5

    const opgaveFem = numbersArray.map((number) => number * 3);

    console.log(opgaveFem);



    // ! OPGAVE 6

    console.log(dogsArray.join(''));



    // ! OPGAVE 7

    function fruitsArrayIndex(navn) {
        console.log(fruitsArray.indexOf(navn));

    }

    fruitsArrayIndex("Mango")
    fruitsArrayIndex("Blåbær")



    // ! OGPAVE 8

    function removeDog(navn) {
        dogsArray.splice(dogsArray.indexOf(navn), 1);

        console.log(dogsArray); 
    }

    removeDog("Polly");



    // ! EXTRA ASSIGNMENT 

    

    console.log(numbersArray.reduce(
        (accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0,
));
    



}) // ends DOMContentLoaded



