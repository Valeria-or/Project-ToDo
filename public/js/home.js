const mainDiv = document.querySelector(".main")
async function pok (){
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const result = await response.json();
        mainDiv.textContent = result.slip.advice
        console.log(result.slip.advice);
    } catch (error) {
        console.error(error);
    } 
}
pok()