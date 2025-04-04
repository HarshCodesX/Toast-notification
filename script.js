let toastBox = document.getElementById("toastBox");
let successMsg = "Successfully submitted";
let ErrorMsg = "Please fix the error!";
let InvalidMsg = "Invalid input, check again";

function showToast(msg){
    let toast = document.createElement("div");
    let para = document.createElement("p");
    toast.classList.add("toast");
    para.innerHTML = msg;
    toast.appendChild(para);
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 6000);
}