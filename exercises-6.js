// Logic Challenge - Number Palindrome
function angkaPalindrome(num) {
    for ( var i = 0; i < String(num); i++) {
        num++;
        var tampung = "";
        for ( var j = String(num).length-1; j >= 0; j--) {
            tampung += String(num)[j];
        }
        if(num === +(tampung)) {
            return num;
        }
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001