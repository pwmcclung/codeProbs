function solution(number){
    let divThreeAndFive = 0;
    let divThree = 0;
      let divFive = 0;
      let start = 1;
      while (start < number){
        if (start % 3 == 0 && start % 5 == 0){
          divThreeAndFive++;
        }else if (start % 3 == 0 && start % 5 != 0){
          divThree++;
        }else if (start % 3 != 0 && start % 5 == 0){
          divFive++;
        }
        start++;
      }
      return [divThree, divFive, divThreeAndFive];
    }