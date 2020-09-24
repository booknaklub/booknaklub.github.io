outer :while(true){
    let inputNum = prompt("Enter a positive integer");



    if (inputNum>0 && inputNum%1==0){
       alert("You would like to order "+inputNum+" block");
        break outer;

    }
}