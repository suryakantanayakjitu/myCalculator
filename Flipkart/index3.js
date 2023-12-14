function openLoginForm() {
    document.getElementById("mainLogin").style.display = "flex";
}
function closeLoginForm() {
    document.getElementById("mainLogin").style.display = "none";
}
function openSignForm() {
    document.getElementById("mainSignUp").style.display = "flex";
}
function closeSignForm() {
    document.getElementById("mainSignUp").style.display = "none";
}
function openOtp() {
    document.getElementById("hidden").style.display = "flex";
    window.alert("Otp has been Sent to your Number")
}