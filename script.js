//https://github.com/coolokawesome
//

//get the text box
textInput = document.getElementById('input')

//add an event listener to the keystrokes
textInput.addEventListener('keyup' || 'blur', e => {

    //assign a new instance of the input box as a whole
    input = document.getElementById('input')
    
    //console log it
    console.clear()
    console.log('Original Input Value:', input.value);

    //initialize string
    initialString = input.value

    //maping new characters
    const charsSimple = { 
                    'a': '4',
                    'e': '3',
                    't': '7',
                    'i': '!',
                    'o': '0',
                    'g': '6',
                    's': '5',
                    'l': '1',
                    'b': '8',
                            };

    const charsComplex = {
                    'a': '4',
                    'e': '3',
                    't': '7',
                    'i': '!',
                    'o': '0',
                    'g': '6',
                    's': '5',
                    'l': '1',
                    'b': '8',
                    'c': '(',
                    'd': '[)',
                    'e': '€',
                    'f': 'ƒ',
                    'h': '#',
                    'j': '¿',
                    'k': '|<',
                    'm': '|V|',
                    'n':'|V',
                    'p': '|*',
                    'r': 'Я',
                    'w': 'VV',
                    'x': '><',
                    'y':  '¥',
                    
    }

    //assign the new map to the new string
    

    if (document.getElementById('simple').checked) {
        newString = initialString.replace(/[aetiogslb]/g, m => charsSimple[m]);
    }
    else if (document.getElementById('complex').checked) {
        newString = initialString.replace(/[aetiogslbcdefhjkmnprwxy]/g, m => charsComplex[m]);
    }
    

    //get the output box
    output = document.getElementById('output')

    //assign the output value to the string
    output.value = newString.toUpperCase()
})

function clipboard() {
    // Get the text field
    var copyText = document.getElementById("output");
    console.log(copyText)
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    
  }

