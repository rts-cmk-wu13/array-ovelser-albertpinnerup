document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 

    // !OPGAVE 1

    newNumbers =  [];

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
    

   
    
    

    
    
}) // ends DOMContentLoaded



