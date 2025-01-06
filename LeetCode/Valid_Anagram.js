if(s.length !== t.length){
    return false;
}

let hashMap = {};

for(let i = 0; i < s.length; i++){
    if(hashMap[s[i]]){
        hashMap[s[i]]++;
    } else {
        hashMap[s[i]] = 1;
    }
}

for(let i = 0; i < t.length; i++){
    if(hashMap[t[i]]){
        hashMap[t[i]]--;
        continue;
    }

    return false;
}

return true;

 