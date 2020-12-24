// navigation var
const navigation = document.getElementById("tab");

// sections var
const sections = document.querySelectorAll("section");

// build nav
const navBuilder = () => {
    let navUI = "";
    // looping over all sections
    sections.forEach((section) => {
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
    });
    navigation.innerHTML = navUI;
};

navBuilder();

const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};
// remove the active class
const removeActive = (section) => {
    section.classList.remove("active");
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
    var selector = `nav a[href="#${section.id}"`;
    document.querySelector(selector).classList.remove("active");
};
// adding the active class
const addActive = (conditional, section) => {
    if (conditional) {
        section.classList.add("active");
        section.style.cssText = "background-color: #8d6ea3;";
        var selector = `nav a[href="#${section.id}"`;
        document.querySelector(selector).classList.add("active");
    }
};

//implementating the actual function
const sectionActivation = () => {
    sections.forEach((section) => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

        removeActive(section);
        addActive(inviewport(), section);
    });
};

window.addEventListener("scroll", sectionActivation);

const scrolling = () => {
    const links = document.querySelectorAll(".navigation a");
    links.forEach((link) => {
        link.addEventListener("click", () => {
            for (i = 0; i < sections; i++) {
                sections[i].addEventListener("click", sectionScroll(link));
            }
        });
    });
};

scrolling();
