const usernameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");
const imageEle = document.querySelector(".image");
const imageInput = document.querySelector(".image-input");

imageInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    console.log(file);

    const imageURL = URL.createObjectURL(file);
    imageEle.setAttribute("src", imageURL);
    imageEle.classList.remove("hidden");

    // const imgEle = document.createElement("img");
    // imgEle.setAttribute("src", imageURL);
    // imgEle.classList.add

    // passwordInput.insertAdjacentElement("afterend", imgEle);
});
