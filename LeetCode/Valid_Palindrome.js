/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^a-zA-Z0-9]/g, '');
   str = str.toLowerCase();
   let start = 0;
   let end = str.length-1;
   for(let i = start; start < end ; i++){
       if(str[start] === str[end]){
           start ++;
           end --;
       }else{
           return false
       }
   }
   return true;
};