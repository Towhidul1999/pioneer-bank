const withDrawBtn = document.getElementById("addWithDraw");
withDrawBtn.addEventListener("click", function(){
    const withDrawAmount = document.getElementById("withDrawAmount").value;
    const withDrawNumber = parseFloat(withDrawAmount);