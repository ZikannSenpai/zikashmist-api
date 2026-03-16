const texts = [
    "WELCOME TO MY DASHBOARD.",
    "Fast Rest API.",
    "Free Endpoint.",
    "Made by ZikannSenpai."
];

let i = 0;
let j = 0;
let isDeleting = false;
const speed = 60;

function type() {
    const current = texts[i];

    if (!isDeleting) {
        document.getElementById("type").textContent = current.substring(0, j++);
        if (j > current.length) {
            isDeleting = true;
            setTimeout(type, 3000);
            return;
        }
    } else {
        document.getElementById("type").textContent = current.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % texts.length;
        }
    }

    setTimeout(type, isDeleting ? 40 : speed);
}

type();
