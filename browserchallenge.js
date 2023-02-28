// doublestack


let currentPage=null;
let backStack=[];
let forwardStack=[];
function navigate(newPage) {
    currentPage=newPage;
    // stub
}
function linkClicked(page) {
    backStack.push(currentPage);
    forwardStack=[];
    navigate(page);
}
function goBack() {
    forwardStack.push(currentPage);
    navigate(backStack.pop());
}
function goForward() {
    backStack.push(currentPage);
    navigate(forwardStack.pop());
}


/* Can be extended by adding button enabling/disabling. Try adding this code within navigate function. 
 
if (backStack.count == 0) backButton.Enabled = false; 
    else backButton.Enabled = true; 
 if (forwardStack.count == 0) forwardButton.Enabled = false; 
    else forwardButton.Enabled = true;

*/ 
  