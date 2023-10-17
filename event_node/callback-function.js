// les 2 manières fonctionnent

const getName = (name) => {
    console.log("Hello", name);
}

// callback function
const toCall = (callFunc) => {
    const name = "koalatr33";
    callFunc(name)
}

toCall(getName);

/*
function getName(name){
    console.log("Hello", name);
}

// callback function
function toCall(callFunc){
    const name = "koalatr33";
    callFunc(name)
}

toCall(getName);
*/