function whatCentury(year)
{
//   let centuries = {'01':'1st', '02':'2nd', '03':'3rd', '04':'4th','05':'5th', '06':'6th', '07':'7th',
//   '08':'8th', '09':'9th','10':'10th', '11':'11th','12':'12th', '13':'13th','14':'14th', '15':'15th','16':'16th','17':'17th','18':'18th', '19':'19th',
//                   '20':'20th', '21':'21st','22':'22nd', '23':'23rd','24':'24th', '25':'25th','26':'26th','27':'27th','28':'28th', '29':'29th',
//                   '30':'30th', '31':'31st','32':'32nd', '33':'33rd','34':'34th', '35':'35th','36':'36th','37':'37th','38':'38th', '39':'39th',
//                   '40':'40th', '41':'41st','42':'42nd', '43':'43rd','44':'44th', '45':'45th','46':'46th','47':'47th','48':'48th', '49':'49th',
//                    '50':'50th', '51':'51st','52':'52nd', '53':'53rd','54':'54th', '55':'55th','56':'56th','57':'57th','58':'58th', '59':'59th',
//                   '60':'60th', '61':'61st','62':'62nd', '63':'63rd','64':'64th', '65':'65th','66':'66th','67':'67th','68':'68th', '69':'69th',
//                   '70':'70th', '71':'71st','72':'72nd', '73':'73rd','74':'74th', '75':'75th','76':'76th','77':'77th','78':'78th', '79':'79th',
//                    '80':'80th', '81':'81st','82':'82nd', '83':'83rd','84':'84th', '85':'85th','86':'86th','87':'87th','88':'88th', '89':'89th',
//                   '90':'90th', '91':'91st','92':'92nd', '93':'93rd','94':'94th', '95':'95th','96':'96th','97':'97th','98':'98th', '99':'99th', '100':'100th'
//                   }
  let arr = String(year).split('');
  let first = arr.join('').slice(0,2);
  let second = arr.join('').slice(2,);
  if (Number(second) < 1){
    first = first;
  }else if (Number(second) >= 1){
    first = String(Number(first) + 1);
  }
  let yearRet = '';
  let endNum = first.slice(1,);
  switch (endNum) {
    case '0':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
        yearRet = first + 'th';
        break;
    case '1':
        yearRet = first + 'st';
        break;
    case '2':
        yearRet = first + 'nd';
        break;
    case '3':
        yearRet = first + 'th';
    default:
        break;
  }
  return yearRet;
  //let newCent = String([first].map((e) => centuries[e]));
//   return newCent
}