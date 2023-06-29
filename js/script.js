{
    const welcome = () => {
        console.log("Hello world");
    };

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".button__themeName");

        body.classList.toggle("body--brightDark");
        themeName.innerText = body.classList.contains("body--brightDark") ? "jasny" : "ciemny";
    };

    const init = () => {
        welcome();

        const button = document.querySelector(".button");
        button.addEventListener("click", toggleBackground);
    };

    init();
}