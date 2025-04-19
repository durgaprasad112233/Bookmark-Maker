let formEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let urlInputEl = document.getElementById("siteUrlInput");
let buttonEl = document.getElementById("submitBtn");
let nameErrMsg = document.getElementById("siteNameErrMsg");
let urlErrMsg = document.getElementById("siteUrlErrMsg");
let listEl = document.getElementById("bookmarksList");

siteNameInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsg.textContent = "Required*";
    } else {
        nameErrMsg.textContent = "";
    }
});

urlInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        urlErrMsg.textContent = "Required*";
    } else {
        urlErrMsg.textContent = "";
    }
});

function bookmark() {
    let nameVal = siteNameInputEl.value;
    let urlVal = urlInputEl.value;
    let listItem = document.createElement("li");
    listEl.appendChild(listItem);
    let bookmarkName = document.createElement("p");
    let bookmarkUrl = document.createElement("a");
    bookmarkName.textContent = nameVal;
    bookmarkUrl.textContent = urlVal;
    bookmarkUrl.href = urlVal;
    bookmarkUrl.setAttribute("target", "_blank");
    listEl.classList.toggle("d-none");
    listItem.appendChild(bookmarkName);
    listItem.appendChild(bookmarkUrl);
}

formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    bookmark();
})