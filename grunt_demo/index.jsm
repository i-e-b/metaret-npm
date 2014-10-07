// Sample metafun file

console.log("3! = " + fact(3));
console.log("GCD(143, 155) = "+gcd(143,155));
console.log("GCD(24, 12) = "+gcd(24,12));
console.log("GCD(54, 24) = "+gcd(54,24));
console.log("3 is odd?  " + isOdd(3));
console.log("4 is even? " + isEven(4));


metafun fact( self, k, acc )
{
    acc  ||  (acc = 1);
    if (k > 1)
        metaret self, k - 1, acc * k; // anonymous self-recursion
    else
        return acc;
}

metafun gcd( self, a, b )
{
    if (a > b)
        metaret self, a-b, b;

    if (b > a)
        metaret self, b-a, a;

    return a; 
}

metafun isEven( self, n )
{
    if (n > 0)
        metaret isOdd, n - 1; // mutual recursion

    if (n < 0)
        metaret self, -n;

    return true;
}

metafun isOdd( self, n )
{
    if (n > 0)
        metaret isEven, n - 1;

    if (n < 0)
        metaret self, -n;

    return false; 
} 
