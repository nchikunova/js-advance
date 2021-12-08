// Fix code below. Prepare event handler using emitter. 
// Input is type of event, there are 3 types and 3 messages for each of them:
// "error" : 
// "success": "OK.Success!"
// "loading": "It's loading..."
// 
// Example 1
// input: "error"
// output: "Error!"
// "Error!"
// Example 2
// input: "success"
// output: "OK.Success!"


const Emitter = require("events");

function main(eventType) {
    let emitter = new Emitter();
    let message = "";

    // Write your code
    emitter.on('error', function() {
        message = "Error!"
    });
    emitter.on('success', function() {
        message = "OK.Success!"
    });
    emitter.on('loading', function() {
        message = "It's loading..."
    });

    emitter.emit(eventType);
    return message;
}

/* function main(eventType) {
    let emitter = new Emitter();
    let message = "";

    emitter.on(eventType, () => {
        if (eventType === 'error') message = "Error!";
        if (eventType === 'success') message = "OK.Success!";
        if (eventType === 'loading') message = "It's loading...";
    })

    emitter.emit(eventType);
    return message;
}
*/
module.exports = main;