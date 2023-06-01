exports.addition=function(a,b){
    return a+b;
}

exports.factorial=function(num){
    var fact=1;
    for(var i=1;i<=num;i++)
    {
        fact=fact*i;
    }
    return fact;
}