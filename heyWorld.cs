Console.WriteLine("Please enter the number of chocolate eggs: ");
string eggers = Console.ReadLine();
int inputEggers = 0;
int inputSisters = 0;
try
{
    inputEggers = Int32.Parse(eggers);
}
catch (FormatException)
{
   Console.WriteLine("Unable to Parse Number of Eggs");
    

}
string sisters = Console.ReadLine();
try
{
     inputSisters = Int32.Parse(sisters);
}catch (FormatException)
{
    Console.WriteLine("Unable to Parse Number of Sisters.");
 }
int totalEggsPerSister = inputEggers / inputSisters;
float foodForBear = (float)inputEggers % inputSisters;
Console.WriteLine(totalEggsPerSister);
Console.WriteLine(foodForBear);
Console.WriteLine("You need to give each sister " + totalEggsPerSister
  + " chocolate eggs.");

Console.WriteLine("You need to give " + foodForBear + " chocolate eggs to DuckBear.");

using System.Linq.Expressions;

Console.WriteLine("Please enter your provinces: ");
string provinces = Console.ReadLine();
Console.WriteLine("Please enter your duchies: ");
string duchies = Console.ReadLine();
Console.WriteLine("Please enter your estates:");
string estates = Console.ReadLine();
int provincesEntered = 0;
int duchiesEntered = 0;
int estatesEntered = 0;

try
{
    provincesEntered = Int32.Parse(provinces);
    duchiesEntered = Int32.Parse(duchies);
    estatesEntered = Int32.Parse(estates);
}
catch (FormatException)
{
    Console.WriteLine("Couldn't Parse info...");
}
int provincesPoints = provincesEntered * 6;
int duchiesPoints = duchiesEntered * 3;
int estatesPoints = estatesEntered * 1;

int totalScore = provincesPoints + duchiesPoints + estatesPoints;

Console.WriteLine("You have " + totalScore + " points.");
*/
short a = 30000;
short b = 30000;

short sum = (short)(a + b);
Console.WriteLine(sum); 