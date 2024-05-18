function createElement() {
    // const main = document.querySelector(".main");
    // const inner = document.querySelector(".inner");
    // const newElement = document.createElement("p");
    // const button = document.createElement("button");

    // const buttonText = document.createTextNode("Sign Up Now")
    // const anotherElement = document.createElement("p");
    // const anotherPElement = document.createElement("p");
    // const text = document.createTextNode('Hello');
    // const text1 = document.createTextNode('How are you');
    // const text2 = document.createTextNode('I am fine');
    // button.appendChild(buttonText)
    // newElement.appendChild(text);
    // anotherElement.appendChild(text1);
    // anotherPElement.appendChild(text2);

    // main.appendChild(newElement, inner)
    // main.appendChild(anotherElement, inner)
    // main.appendChild(anotherPElement, inner)
    // main.appendChild(button, inner)

    // button.addEventListener("click", ()=>{
    //    const qst = confirm("Do you want to continue?");
    //    qst ? window.location.href="https://toshconsultinc.com" : document.write("fuck you!")
    // })

    const heading = document.createElement("h1");
    const headingText = document.createTextNode("Can you guess the number i am holding up? 💯");
    heading.appendChild(headingText);
    heading.style.color = "white";
    heading.style.fontSize = "22px";
    const input = document.createElement("input");
    const button = document.createElement("button");
    input.type = "number";
    const errormsg = document.createElement("p");
    const main = document.querySelector(".main")
    input.style.marginTop = "22px";
    main.style.padding = "22px";
    main.style.width = "100%"
    main.style.height = "100vh"
    main.style.display = "flex"
    main.style.justifyContent = "center"
    main.style.alignItems = "center";
    main.style.backgroundColor = "#b4b4b4"
    const inner = document.querySelector(".inner");
    const buttonText = document.createTextNode("Guess");
    button.appendChild(buttonText);
    const img = document.createElement("img");
    img.src = "./Eye.png";
    function setToFocus(){
        input.focus()
    }
    
    

    let attempts = 3;
    let guessRight = false;

    button.addEventListener("click", async()=>{
        while(attempts > 0){
            const myFavNumber = Math.floor(Math.random() * 32);
            const userEntered = await input.value
            if(userEntered == "") {
                errormsg.textContent = "Input field is required 😏";
                errormsg.style.color = "red";
                input.style.borderColor = "red"
                input.focus()
                return input.style.outlineColor = "red"
            }
            if(userEntered == myFavNumber){
                heading.textContent = "You guessed right 🤩!! " + myFavNumber + " is my computer generated.";
                heading.style.color = "green";
                errormsg.textContent = "";
                input.style.borderColor = "grey";
                input.style.outlineColor = "transparent"
                guessRight = true;
                break;
            }else{
                    attempts--;
                    input.value = ""
                    errormsg.textContent = "";
                    input.style.borderColor = "grey";
                input.style.outlineColor = "transparent"
                    return heading.textContent = "You guessed wrong 😝!! " + myFavNumber + " is what my code generated.";
            }
        }
        if(!guessRight){
            heading.textContent = "You have used the 3 number of attempts and you still didn't guess right ..🤣";
            heading.style.color = "red";
            button.cursor = "not-allowed";
        }
    })
    setToFocus()
    inner.appendChild(heading)
    inner.appendChild(input)
    inner.appendChild(button)
    inner.appendChild(errormsg)
    // document.body.appendChild(img, inner)
    

}

createElement()
