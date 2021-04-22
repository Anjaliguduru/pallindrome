var a;
var b,rev;
var c=0;
var d;
 

 function pallin()
 {
   a= parseInt(document.getElementById("pal").value);
   d=a;
   console.log(d);
   while(a!=0)
   {
     b=parseInt(a%10);
     c= c*10+b;
     a=parseInt(a/10);
    }
    console.log(c);
   if (d==c)
   {
       console.log('pallindrome');
       document.getElementById("result").value="pallindromeNumber";
   }
   else{
     console.log('Not pallindrome');
     document.getElementById("result").value="not palindrome"
   }
   return false;
}
