//https://github.com/coolokawesome
//

//get the text box
textInput = document.getElementById('input')

//add an event listener to the keystrokes
textInput.addEventListener('keyup', e => {

    //assign a new instance of the input box as a whole
    input = document.getElementById('input')
    
    //console log it
    console.clear()
    console.log('Original Input Value:', input.value);

    //initialize string
    initialString = input.value

    //maping new characters
    const chars = { 'a': '4',
                    'e': '3',
                    't': '7',
                    'i': '!',
                    'o': '0',
                    'g': '6',
                    's': '5',
                    'l': '1',
                            };

    //assign the new map to the new string
    newString = initialString.replace(/[aetiogs]/g, m => chars[m]);

    //get the output box
    output = document.getElementById('output')

    //assign the output value to the string
    output.value = newString.toUpperCase()
})

