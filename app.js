// question 1
[1,2,3,4];

// question 2
"ref"
// question 3
const hasDuplicate = arr => new Set(arr).size !== arr.length

// question 4 *struggled with this question*
function vowelCount(str){
    const vowel = new Map();
    for (let char of str){
        let lowerCaseChar = char.toLowerCase()
        if(isVowel(lowerCaseChar)){
            if(vowel.has(lowerCaseChar)){
                vowel.set(lowerCaseChar, vowel.get(lowerCaseChar) + 1);
            }else {
                vowel.set(lowerCaseChar, 1);
            }
        }
    }
    return vowel;
} 