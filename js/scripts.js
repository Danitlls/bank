// Business Logic

function BankAccount(userName, initialDeposit) {
  this.userName = userName;
  this.initialDeposit = initialDeposit;
}
var balance = 0;

BankAccount.prototype.initialBalance = function () {

  if (this.initialDeposit != 0) {
    balance += this.initialDeposit;
  }
  return balance;
}

function Adjust(deposit, withdraw) {
  this.deposit = deposit;
  this.withdraw = withdraw;
}

Adjust.prototype.newBalance = function () {
  if (this.deposit) {
    balance += this.deposit;
  }if (this.withdraw) {
    balance -= this.withdraw;

  }return balance;
}



// UI Logic

$(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var userName = $("input#nameInput").val();
    var initialDeposit = parseInt($("input#initialDeposit").val());
    console.log(initialDeposit);

    var newDeposit = new BankAccount(userName, initialDeposit);

    $("span#currentBalance").text("$" + newDeposit.initialBalance());
  });

$("button#transfer").click(function(){
    var deposit = parseInt($("input#deposit").val());
    var withdraw = parseInt($("input#withdraw").val());
    console.log(deposit);
    console.log(withdraw);

    var newAdjust = new Adjust(deposit, withdraw);



    $("span#currentBalance").text("$" + newAdjust.newBalance());
  });
});
