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

// toogle sestion
const historyTab = document.getElementById('history-tab')
const donationTab = document.getElementById('donation-tab')

historyTab.addEventListener('click', function () {
historyTab.classList.add('bg-primary_btn');
donationTab.classList.remove('bg-primary_btn');
document.getElementById("history-container").classList.remove('hidden')
document.getElementById("donation-main").classList.add('hidden')
})



// toggle donate
donationTab.addEventListener('click', function () {
donationTab.classList.add('bg-primary_btn')
historyTab.classList.remove('bg-primary_btn')
document.getElementById("history-container").classList.add('hidden')
document.getElementById("donation-main").classList.remove('hidden')
})


function modalShow(button, donationFieldINput) {
document.getElementById(button).addEventListener('click', function () {
const donationInput = getValueById(donationFieldINput)
const mainBalance = getInnerTextById('main-balance')
if (isNaN(donationInput) === false && donationInput > 0 && donationInput < mainBalance) {
return my_modal.showModal();
}
})
}
modalShow("btn-donate-1", "donation-noakhali")
modalShow("btn-donate-2", "donation-feni")
modalShow("btn-donate-3", "donation-quota")