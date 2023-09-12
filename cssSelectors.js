function compare (a, b) {

    let aCssSpecificity = calculateWeight(a);
    let bCssSpecificity = calculateWeight(b);
    
    
    for (let selectorType in aSpecificity) {
      if (aCssSpecificity[selectorType] > bCssSpecificity[selectorType]) {
        return a;
      } else if (aCssSpecificity[selectorType] < bCssSpecificity[selectorType]) {
        return b;
      }
    }
    return b;
  }

let cssSelectors = { id:
                         { pattern: /#\w+/g, weight: 100 },
                        class:
                         { pattern: /\.\w+/g, weight: 10 },
                        tagname:
                         { pattern: / \w+|^\w+/g, weight: 1 }
                    };
    function countOccurence(str, match) {
   return Array.isArray(str.match(match)) ? str.match(match).length : 0;
  }                
                    
  function calculateWeight(selector) {
    let totalWeight = {id:0, class:0, type:0};
    for(let selectorType in cssSelectors) {
      totalWeight[selectorType] = countOccurence(selector, cssSelectors[selectorType]['pattern']) * cssSelectors[selectorType]['weight'];
    }
    return totalWeight;
    
  }