const bubblesort = {
    "title": "bubblesort",
    "code": `function start(say, sendButton) {
	sendButton(
        'You just need to input 3 numbers and I will sort them !',
        [{title: 'Sounds good 🙂', payload: '1'}]
    );
};

function state(payload, say, sendButton) {
    // Declare variables
    var num1, num2, num3, input_array, output_array;

    // 'Split' the payload, remove the '~' character, and put the 3 variables
    // into the array : 'input_array'
    input_array = payload.split('~');
    // Get the first number from input_array and store it to variable 'num1'
    num1 = parseInt(input_array[0]);
    // Get the second number from input_array and store it to variable 'num2'
    num2 = parseInt(input_array[1]);
    // Get the third number from input_array and store it to variable 'num3'
    num3 = parseInt(input_array[2]);

    // parseInt : transforms String to Integer
    const NUM_LIMIT = 21

    // User inputs first number
    if (payload==='1'){
        let buttons = []
        for (let i = 0; i < NUM_LIMIT; i++) {
            buttons.push({
                title: String(i),
                payload: String(i) + '~N~N'
            })
        }
        sendButton('Enter first 🍏 number', buttons);
    }


    // User inputs second number
    if (payload===num1+'~N~N'){
        let buttons = []
        for (let i = 0; i < NUM_LIMIT; i++) {
            buttons.push({
                title: String(i),
                payload: num1 + '~' + String(i) + '~N'
            })
        }
        sendButton('Enter Second 🍊 Number', buttons);    
    }

    // User inputs third number
    if (payload===num1+'~'+num2+'~N'){
        let buttons = []
        for (let i = 0; i < NUM_LIMIT; i++) {
            buttons.push({
                title: String(i),
                payload: num1 + '~' + num2 + '~' + String(i)
            })
        }
        sendButton('Enter third 🥝 number ', buttons);    
    }


    if(payload===num1+'~'+num2+'~'+num3){
        let output_array=bubblesort(input_array);
        let result = output_array[0]+', '+output_array[1]+', '+output_array[2]
        say('Great job 😎! The result is : ' + result);
        sendButton('Another calculation?', [
                {title: 'Yes!', payload: 'restart'},
                'No'
            ]);
    }
    return;
};

function bubblesort(arr){
    var sorted = false;
    while (sorted === false){
        sorted = true;
        for (var i=0; i<arr.length-1; i++)
        {
            if (parseInt(arr[i])>parseInt(arr[i+1])){
                [arr[i],arr[i+1]]=[arr [i+1],arr[i]];
                sorted = false;
            }
        }
        
    }
    return arr; 
};
    `
}

export default bubblesort