// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//Question 1
function reverse(x){
    let res=0
    while(x>0){
        res=res*10+x%10
        x=Math.floor(x/10);
    }
    return res;
}
console.log(reverse(32243))

//Question 2
function palindrome(x){
    let l=0,r=x.length-1
    while(l<r){
        if(x[l]!=x[r]) return false;
        l++,r--
    }
    return true;
}
console.log(palindrome("aba"))

//Question 3
function combine(x){
    let n=x.length;
    for(let i=0;i<n;i++){
        let tmp=''
        for(let j=i;j<n;j++){
            tmp+=x[j]
            console.log(tmp);
        }
    }
}
combine("dog")