function transposeTwoStrings (array) {
    let finalForm = [];
      let biggest = Math.max(array[0].length, array[1].length);
      
      for (var i = 0; i < biggest; i++) {
        let firstLetters = (array[0][i] || " ") + " " + (array[1][i] || " ");
        finalForm.push(firstLetters);
      }
      
      return finalForm.join("\n");
    }