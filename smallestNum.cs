public class Kata 
{
    public static int FindSmallestInt(int[] args) 
    {
    int smallestNumber = args[0];
       for (int i = 1; i < args.Length;i++)
       {
         if (args[i] < smallestNumber){
           smallestNumber = args[i];
         }
       }
      return smallestNumber;
    }
}