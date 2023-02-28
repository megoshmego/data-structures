/* 

Parmeters of Springboard exercise
**********************************

Josephus problem

Goes in a fixed direction

Some number of people are skipped and  the next person is executed, until one person remains 
    Solution is which person is given freedom / commits suicide 



Example of the use of the above variables
*********************************************

n - total number of people 
k - number of people skipped and person to get executed



    for n = 5 
        k = 3

    circle of five people, every third person executed

    1st step 3rd node is removed, start counting clockwise unless otherwise stated


Approach
*********************************************

    Recursion




Complexity
***********************
Time  - O(N)
Space - O(N) (space used in recurstion call stack)
 
Using recursion due to time complextiy as opposed to a linked list 



Structure
***********************

>(n, k) = (Josephus(n -1), k) %n + 1   
>'winning seat' (1, k) = 1   

>After first person is killed n-1 people are left. 
>Make a recursive call for Josephus to 
>Get the position with n-1 people.   

*/


function Josephus(n, k){
    
    if (n == 1)
            return 1;
        
    else
        /* The position returned
        by josephus(n - 1, k) is
        adjusted because the
        recursive call josephus(n
        - 1, k) considers the
        original position k%n + 1
        as position 1 */
    return (Josephus(n - 1, k)
        + k-1) % n + 1;
    }
      
    

    // let n = ();
    // let k = ();

