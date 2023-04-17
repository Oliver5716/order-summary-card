const proceedBtn = document.querySelector(".proceed-btn");
const cancelBtn = document.querySelector(".cancel-btn");

proceedBtn.addEventListener("click", function () {
    alert("Proceeding to payment page");
});

cancelBtn.addEventListener("click", function () {
    alert("Cancelling the selected plan");
});
