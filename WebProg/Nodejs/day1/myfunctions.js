exports.addition=function(n1,n2)
{
    return n1+n2;
}

factorial=function(num)
{
    f=1
    for(var i=1;i<=num;i++)
    {
        f=f*i;
    }
    return f;
}

exports.permutation=function(n,r)
{
    p=factorial(n)/factorial(n-r);
    return p;
}

// console.log(factorial(5));
// console.log(addition(21,98))
// console.log(permutation(5,2))
