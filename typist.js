function typist(s){
    let capsLock = 0;
     let count= s.length;
     if (s[0] === s[0].toUpperCase()){
       capsLock++;
     }
     for (let i = 0; i < s.length-1; i++){
       let letter = s[i];
       if ( ( (s[i] == s[i].toLowerCase()) && (s[i + 1] == s[i + 1].toUpperCase()) ) || 
           ( (s[i] == s[i].toUpperCase()) && (s[i + 1] == s[i + 1].toLowerCase())) ){
         capsLock++;
       }
     }
     return count + capsLock;
   }