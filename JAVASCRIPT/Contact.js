const inputs = document.querySelectorAll(".input")

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input)=> {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

function validateForm() {
    const inputs = document.querySelectorAll(".input");
    let isValid = true;

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        isValid = false;
        let parent = input.parentNode;
        parent.classList.add("error");
      } else {
        let parent = input.parentNode;
        parent.classList.remove("error");
      }
    });

    return isValid;
  }

  function handleSubmit(e){
    e.preventDefault();
    if (validateForm()) {
        alert("Thank you for reaching out to us. We will get back to you as soon as possible.");
    } else{
        alert("All fields must be filled out");
    }
  }

  document.querySelector("form").addEventListener("submit",handleSubmit)

  