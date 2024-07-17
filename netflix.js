/*document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const title = item.querySelector('.accordion-title');

        title.addEventListener('click', (a) => {
            const content = item.querySelector('.accordion-content');
            content.classList.toggle('active');
            item.classList.toggle('active');

            // Rotate the plus sign when accordion is active
            const plusSign = item.querySelector('.plus');
            plusSign.classList.toggle('active');
            });
        });
    });*/
    document.addEventListener("DOMContentLoaded", function() {
        const accordionItems = document.querySelectorAll('.accordion-item');
    
        accordionItems.forEach(item => {
            const title = item.querySelector('.accordion-title');
    
            title.addEventListener('click', () => {
                // Close all accordion items except the one being clicked
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherContent = otherItem.querySelector('.accordion-content');
                        const otherPlusSign = otherItem.querySelector('.plus');
                        otherContent.classList.remove('active');
                        otherItem.classList.remove('active');
                        otherPlusSign.classList.remove('active');
                    }
                });
    
                // Toggle the current accordion item
                const content = item.querySelector('.accordion-content');
                const plusSign = item.querySelector('.plus');
                content.classList.toggle('active');
                item.classList.toggle('active');
                plusSign.classList.toggle('active');
            });
        });
    });

// Drop-Down 
function myFunction() {
    document.getElementById("drop").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}