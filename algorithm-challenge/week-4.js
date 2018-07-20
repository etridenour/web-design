arr = [];
function c1(n){
    while (n != 1){
        if (n % 2 == 0){
            n /= 2;
            console.log(n);
        } else {
            n = n * 3 + 1;
            console.log(n);
        }
    }
}

c1(10);
c1(45);

function isPal(){
    arr = [];
    for (var x = 999; x > 899; x--){
        for (var y = x; y > 899; y--){
            let num = x * y;
            if (palCheck(num)){
                return(num);
            }
        }
    }
}
function palCheck(num){
    n = num.toString().split('');
    for (x = 0; x < n.length / 2; x++){
        if (n[x] != n[n.length - (1 + x)]){
            return false;
        
        }
    }
    return true;
}

console.log(isPal());

function small(){
    for (var x = 1; x < 1000000000; x++){
        for (var y = 1; y < 11; y++){
            var nonDiv = true;
            if (x % y != 0){
                break;
                
            } 
            if (nonDiv == true){
                console.log(x);
            }
        
        }
    }
}


small();






