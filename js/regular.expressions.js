// * regExr
//* pattern

document.getElementById("phoneNumber").addEventListener("input", (event) => {
    const regex = /^\(?(d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
    const input = document.getElementById("phoneNumber");
    const format = document.querySelector(".phoneFormat")
    const phone = input.value
    const found = regex.test(phone)
    if (!found && phone.length) {
        input.classList.add("invalid")
        format.classList.add("block");
    } else {
        input.classList.remove("invalid")
        format.classList.remove("block")
    }
})

document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("phoneNumber");
    const regex = /[()-. ]/g;
    const savePhoneNumber = input.value.replaceAll(regex, "")
    console.log(savePhoneNumber);
})

document.getElementById("textForm").addEventListener("submit", (ev) => {
    ev.preventDefault();
    const input = document.getElementById("textEntry");
    const regex = / {2,}/g;
    const newText = input.value.replaceAll(regex, " ").trim();
    console.log(newText);
    const encodedInputText = encodeURI(input.value);
    const encodedCleanText = encodeURI(newText);
    console.log(encodedInputText);
    console.log(encodedCleanText);
    const decodeText = decodeURI(encodedInputText)
    console.log(decodeText);
})