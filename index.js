var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        toggleAccordion(this);
    });

    acc[i].addEventListener("keydown", function (event) {
        // Check if the key pressed is Enter (key code 13)
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default behavior (e.g., form submission)
            toggleAccordion(this);
        }
    });
}

function toggleAccordion(accordionItem) {
    var panel = accordionItem.nextElementSibling;
    var plusSign = accordionItem.querySelector(".plus");
    var minusSign = accordionItem.querySelector(".minus");

    if (panel.style.display === "block" || panel.style.display === "") {
        panel.style.display = "none";
        minusSign.style.display = "none";
        plusSign.style.display = "block";
    } else {
        panel.style.display = "block";
        plusSign.style.display = "none";
        minusSign.style.display = "block";
    }
}

