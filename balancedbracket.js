class Stack {                   //use stack class bc the first nodes will stay the same
    constructor() {
      this.data = [];
    }
  
    push(element) {
      this.data.push(element);
    }
  
    pop() {                         
      return this.data.pop();
    }
  }
  
  const bracketMap = {     //establish which characters we are searching for 
    "(": ")",
    "[": "]",
    "{": "}"
  };
  
  const doBracketsBalance = str => {
    // Creating Stack
    const stack = new Stack();
    
    // iterating through each bracket in the string
    for (let bracket of str) {
      
      // If the bracket is an opening bracket push it onto the stack
      if (bracketMap[bracket]) {
        stack.push(bracket);
      } else {
        // If not, then pop a bracket off the stack.
        const poppedBracket = stack.pop();
        
        // Check to see if the popped bracket is the matching bracket
        if (bracketMap[poppedBracket] !== bracket) {
          return false;
        }
      }
    }
    return stack.data.length === 0;
  };
  
  // doBracketsBalance('[()]{}{[()()]()}');
  // doBracketsBalance('[(])');;
  