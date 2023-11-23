function getAttendees(peopleInvited, responses){

    let responseArr = responses.map( x => x.name);
      peopleInvited = peopleInvited.filter( x => !responseArr.includes(x));
     let attendingResponse =  responses.filter(x => x.response == 'accepted').map(x => x.name).concat(peopleInvited);
      return attendingResponse;
      
    }