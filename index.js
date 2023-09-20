function receivesAFunction(spy){
    spy(function(){
        return 'called function';
    })
}

function returnsANamedFunction() {
    return function returnName(name) {
        console.log(name);
    }}

function returnsAnAnonymousFunction(){
    return function (name){
        console.log(name)
}}