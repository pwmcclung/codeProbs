namespace myjinxin
{
    using System;
    
    public class Kata
    {
        public bool AreEquallyStrong(int YourLeft, int YourRight, int FriendsLeft, int FriendsRight){
         
          if (YourLeft == FriendsLeft && YourRight == FriendsRight )
            {
            return true;
          }
          if (YourRight == FriendsLeft && YourLeft == FriendsRight)
            {
            return true;
          }
          else
            {
            return false;
          }
          
          
        }
    }
