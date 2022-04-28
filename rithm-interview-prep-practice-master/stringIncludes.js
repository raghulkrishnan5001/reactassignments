// add whatever parameters you deem necessary - good luck!
function stringIncludes(awesome, e) {
    for (let i = 0; i < awesome.length; i++) {
      if (awesome[i] === e) {
        return true
      }   
    }
    return false 
  }
  let outputd = stringIncludes('awesome', 'e');

  console.log(outputd)