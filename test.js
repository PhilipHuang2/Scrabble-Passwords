 // Javascript program to print all possible
    // subStrings of a given String
    // without checking for duplication.
     
    // Function to print all (n * (n + 1)) / 2
    // subStrings of a given String s of length n.
    function printAllSubStrings(s, n)
    {
        // Fix start index in outer loop.
        // Reveal new character in inner
        // loop till end of String.
        // Print till-now-formed String.
        for(let i = 0; i < n; i++)
        {
            let temp = new Array(n - i + 1);
            let tempindex = 0;
 
            for(let j = i; j < n; j++)
            {
                temp[tempindex++] = s[j];
                temp[tempindex] = '\0';
                console.log(temp.join(""));
            }
        }
    }
     
    let s = "wnumngku";
      
    printAllSubStrings(s, s.length);
     