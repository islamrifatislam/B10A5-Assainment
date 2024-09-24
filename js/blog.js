//  function
function addDonation(clickBtn, inputDonation, totalDonationId, mainBalanceId) {
document.getElementById(clickBtn)
.addEventListener('click', function(){
const inputDonationAmount = getValueById(inputDonation)
const totalDonationAmount = getInnerTextById(totalDonationId)
const mainBalanceAmount = getInnerTextById(mainBalanceId)
if(inputDonationAmount > mainBalanceAmount){
alert('insufficient balance')
return
}
if (isNaN(inputDonationAmount) || inputDonationAmount<= 0) {
alert('Invalid Input')
return
}
const totalDonation = totalDonationAmount + inputDonationAmount;
const mainBalance = mainBalanceAmount - inputDonationAmount;
document.getElementById(totalDonationId).innerText =totalDonation.toFixed(2);
document.getElementById(mainBalanceId).innerText = mainBalance.toFixed(2);
})
}
// section1
addDonation("btn-donate-1", "donation-noakhali", "total-donation-noakhali", "main-balance")
// section2
addDonation("btn-donate-2", "donation-feni", "total-donation-feni", "main-balance")
// section3
addDonation("btn-donate-3", "donation-quota", "total-donation-qouta", "main-balance")