exports.factorial=(a)=>{
    var fact=1;
    for(var i=1;i<=a;i++)
    {
        fact=fact*i;
    }
    return fact;
}

exports.myprime=(a)=>{
    var count=0;
    for(var i=1;i<=a;i++)
    {
        if(a%i==0)
        {
            count++
        }
    }
    if(count==2)
    {
        return "Prime number"
    }
    else
    {
        return "Not Prime number"
    }
}

exports.printable=(a)=>{
    var str=``
    var a1=parseInt(a)
    for(var i=1;i<=10;i++)
    {   mul=a1*i
        str+=`${a} * ${i} = ${mul} <br>`
    }
    return str;
}