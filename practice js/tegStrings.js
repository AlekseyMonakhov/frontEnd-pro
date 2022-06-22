const firstName1 = "Anne";
const annAge = 27;
console.log();

function tag(literals, ...substitutions) {
    console.log(literals);
    console.log(substitutions);
    return `Lol there is ${substitutions[0]} ${substitutions[1]} Horsing around and she is ${substitutions[2]} here are literals we didnt used: ${literals}`;    
}
console.log(tag`Hellow ${firstName1} ${"Hornet"} you are ${annAge}`);
