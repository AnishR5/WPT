function searchpattern()
{
    var str=document.getElementById("str").value
    var pat=document.getElementById("pattern").value

    var pattrn=new RegExp(pat,"gi")
    var arr=document.getElementsByName("operation");
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i].checked)
        {
            var v=arr[i].value;
           // alert(v);
            break;
        }

    }
   switch(v)
   {
    case "search":
        alert("in search")
        result="Result: "+str.search(pattrn)
        break;

    case "replace":
        newstr=prompt("Enter new string")
        result=" Result: "+ str.replace(pattrn,newstr)
        break;

    case "match":
        result=" Result: "+ str.match(pattrn)
        break;

    case "test":
        result=" Paterrn exists: "+pattrn.test(str)
        break;

   }
   document.getElementById("mydiv").innerHTML=result
}