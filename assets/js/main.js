document.addEventListener("DOMContentLoaded", function () {

```
console.log("TM Casino Loaded Successfully");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        console.log(button.innerText + " clicked");
    });
});

const forms = document.querySelectorAll("form");

forms.forEach(form => {
    form.addEventListener("submit", function () {
        console.log("Form Submitted");
    });
});
```

});
