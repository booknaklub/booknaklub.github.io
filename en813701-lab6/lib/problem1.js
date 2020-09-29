outer :while(true){
    let inputNum = prompt("Enter a positive integer");
    let primeNum=[];
    let showPrime = ("For n = "+inputNum+" prime number are ");

    if (inputNum>0 && inputNum%1==0){
        if(inputNum==1){
            showPrime = ("Empty list")
        }else{
            nexstPrimeNum:
            for (let i = 2;i<=inputNum;i++){
                for (let j = 2; j < i;j++){
                    if(i%j == 0) continue nexstPrimeNum;
                }
                primeNum.push(i)
            }
        }
    
        showPrime +=primeNum;
        alert(showPrime);
        break outer;

    }
}