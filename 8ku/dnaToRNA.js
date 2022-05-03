// Create a function which translates a given DNA string into RNA.
// For example:
// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function dnaToRNA(dna) {
    //create an array from the given string, 
    //then convert any "T" to "U"
    let RNAarray = Array.from(dna)
    RNAarray.forEach((x,y) =>{
      if(x==="T"){
        RNAarray[y]="U"
        }
    })
    //return the converted array as a string
    return RNAarray.join("")
  }