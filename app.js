const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function check() {
  hideMessage();
  
  if (billAmount.value > 0) 
  {
    const balanceamount = cashGiven.value - billAmount.value;
    console.log(balanceamount);
    if (balanceamount >0)
    {
        
      calculateChange(balanceamount);
    }
     else
      {
      showMessage("Invalid Cash GIven");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(notes) {
  
  for (let i = 0; i < availableNotes.length; i++) {
    
    const numberOfNotes = Math.trunc(notes/ availableNotes[i]);

    const deduction =availableNotes[i]*numberOfNotes;
    notes = notes-deduction;
  noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
