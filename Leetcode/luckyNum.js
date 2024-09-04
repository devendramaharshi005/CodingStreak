
var getLucky = function(s, k) {
    let values =getStringInteger(s);
    console.log(values,"initial value")

    for(let i=0; i<k; i++){
        values=getCountValue(String(values))
         console.log(values,`${i+1} initial value`)
    }

    return values;
    
};


function getCountValue(str_number){
    let num=0;
    for(let i=0; i<str_number.length; i++){
        num+=parseInt(str_number[i])
    }
    return num;
}

function getStringInteger(alphabatical){
    const weight={}

    for(let i=0; i<26; i++){
        weight[String.fromCharCode(97+i)]=String(i+1);
        }


    let ans="";

    for(let i=0; i<alphabatical.length; i++){
        ans+=weight[alphabatical[i]];
    }

    return ans;
}