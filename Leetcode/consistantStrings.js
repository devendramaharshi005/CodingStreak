/*

1684. Count the Number of Consistent Strings
Solved
Easy
Topics
Companies
Hint

You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

 

Example 1:

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

Example 2:

Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.

Example 3:

Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

 

Constraints:

    1 <= words.length <= 104
    1 <= allowed.length <= 26
    1 <= words[i].length <= 10
    The characters in allowed are distinct.
    words[i] and allowed contain only lowercase English letters.



*/



/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const obj={};
    for(let i=0; i<allowed.length; i++){
        obj[allowed[i]]=true;
    }

    return words.reduce((acc,ele)=>{

        if(ele !== ""){

             for(let j=0; j<ele.length; j++){
               
               if(!obj[ele[j]]){
                 return acc;
               }
               
            }

            return acc+1;

        }
        
         return acc;
    },0)
};



// bitmasking

var countConsistentStrings = function(allowed, words) {
    // Create bitmask for allowed characters
    let allowedMask = 0;
    for (let i = 0; i < allowed.length; i++) {
        allowedMask |= (1 << (allowed.charCodeAt(i) - 97));
  
        console.log(allowedMask)
    }
  
    
  
  
    let count = 0;
  
    for (const word of words) {
        let wordMask = 0;
        for (let j = 0; j < word.length; j++) {
            wordMask |= (1 << (word.charCodeAt(j) - 97));
        }
  
        // Check if wordMask is a subset of allowedMask
        if ((wordMask & allowedMask) === wordMask) {
            count++;
        }
    }
  
    return count;
  };