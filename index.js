

function receivesAFunction(spy){
    spy();
    }

    

function returnsANamedFunction(name = "yes"){
      return function no(){
               console.log("words");
        };
    
}
returnsANamedFunction();

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Works");
    }
}
returnsAnAnonymousFunction();