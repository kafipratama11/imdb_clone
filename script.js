document.addEventListener("DOMContentLoaded", function() {
    const films = [
        {
            src: "https://i.pinimg.com/736x/e1/7f/06/e17f06f19fb26c3601828159ccb096e3.jpg",
            title: "SE7EN",
            rating: 8.1
        },
        {
            src: "https://i.pinimg.com/736x/ea/60/03/ea6003c04ce74b1015b165b5ae4e2877.jpg",
            title: "The Architecture of Love",
            rating: 6.7
        },
        {
            src: "https://i.pinimg.com/564x/cf/e8/72/cfe8727a852a062613ef6324db883684.jpg",
            title: "1917",
            rating: 7.7
        },
        {
            src: "https://i.pinimg.com/564x/07/dd/63/07dd6308bb98140d85a2131f008e55d6.jpg",
            title: "The Architecture of Love",
            rating: 7.7
        },
        {
            src: "https://i.pinimg.com/736x/9f/2b/20/9f2b200761a6139b9712e8e7b3c67683.jpg",
            title: "The Architecture of Love",
            rating: 7.7
        },
        {
            src: "https://i.pinimg.com/564x/d6/f8/ae/d6f8ae21420e294d1ccef8b4fb25f490.jpg",
            title: "The Architecture of Love",
            rating: 7.7
        },
        {
            src: "https://i.pinimg.com/564x/a0/9e/89/a09e89eb6c8485cc8b9573b52036736c.jpg",
            title: "The Architecture of Love",
            rating: 7.7
        },
        {
            src: "https://i.pinimg.com/736x/2f/52/05/2f52055265e9aa33c7dd76395f64e4b4.jpg",
            title: "The Architecture of Love",
            rating: 7.7
        },
        {
            src: "https://i.pinimg.com/564x/36/b1/bc/36b1bc9ed61e8aa5794ffb51af821e95.jpg",
            title: "The Architecture of Love",
            rating: 7.7
        },
        {
            src: "https://i.pinimg.com/564x/6c/22/5e/6c225e200f1c0f89dbd5917d2d30f809.jpg",
            title: "The Architecture of Love",
            rating: 7.7
        },
        {
            src: "https://i.pinimg.com/564x/da/24/66/da2466684057440006bb732942fd6738.jpg",
            title: "The Architecture of Love",
            rating: 7.7
        },
        {
            src: "https://i.pinimg.com/564x/da/b0/9e/dab09e9a53a39abf8ef1246b3fd605e6.jpg",
            title: "The Architecture of Love",
            rating: 7.7
        },
        {
            src: "https://i.pinimg.com/564x/2f/21/86/2f218681cf5e1b798a6664a039844b96.jpg",
            title: "The Architecture of Love",
            rating: 7.7
        },
        {
            src: "https://i.pinimg.com/736x/33/de/e7/33dee75ae48326c1c55d9782cebbf5e9.jpg",
            title: "The Architecture of Love",
            rating: 7.7
        },
        {
            src: "https://i.pinimg.com/564x/8b/da/b1/8bdab1c9909ba4fd08c84aeacd09b10c.jpg",
            title: "The Architecture of Love",
            rating: 7.7
        },
        {
            src: "https://i.pinimg.com/564x/ce/5e/b7/ce5eb757aecc5b601e0145d62f86ba5a.jpg",
            title: "The Architecture of Love",
            rating: 7.7
        },
        {
            src: "https://i.pinimg.com/564x/d2/0c/e6/d20ce633dead693ecedf760dfd115ac2.jpg",
            title: "The Architecture of Love",
            rating: 7.7
        },
        {
            src: "https://i.pinimg.com/564x/ad/f3/8c/adf38c90cbc44792a42ecf317ab72631.jpg",
            title: "The Architecture of Love",
            rating: 7.7
        },
    ];

    const carouselItems = document.querySelectorAll('.carousel-item .row');
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
    const carousel = document.getElementById('carouselExampleIndicators');

    films.forEach((film, index) => {
        const col = document.createElement('div');
        col.classList.add('col-2');

        const card = `
            <div class="card card-film border-0 shadow-sm">
                <a href="#" class="btn-img">
                    <img src="${film.src}" class="card-img-top" alt="${film.title}">
                    
                </a>
                <div class="card-body text-white px-2" style="background-color: #1c1c1c;">
                    <div class="rate-film d-flex gap-2 align-items-center">
                        <i class="bi bi-star text-warning"></i>
                        ${film.rating}
                    </div>
                    <div class="pt-2 title-film">${film.title}</div>
                    <button class="border-0 py-2 mt-2 fw-semibold btn-watchlist w-100"><i class="bi bi-plus-lg me-2"></i>Watchlist</button>
                    <div class="d-flex justify-content-center">
                        <button class="border-0 mt-2 fw-medium btn-trailer bg-transparent px-3"><i class="bi bi-play-fill me-2"></i>Trailer</button>
                    </div>
                </div>
            </div>
        `;

        col.innerHTML = card;
        carouselItems[index % 3].appendChild(col); // Distribusi film ke dalam carousel item
    });
    function updateCarouselControls() {
        const activeIndex = Array.from(carousel.querySelectorAll('.carousel-item')).findIndex(item => item.classList.contains('active'));
        if (activeIndex === 0) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'block';
        }

        if (activeIndex === carouselItems.length - 1) {
            nextButton.style.display = 'none';
        } else {
            nextButton.style.display = 'block';
        }
    }
    // Initial update of the carousel control buttons
    updateCarouselControls();

    // Add event listener to update the buttons when the carousel slides
    carousel.addEventListener('slid.bs.carousel', updateCarouselControls);
});

document.addEventListener("DOMContentLoaded", function() {
    const personContainer = document.getElementById('personContainer');
    const persons = [
        {
            src: "https://i.pinimg.com/564x/8c/43/91/8c439161a9d6403444f9f7ccad30c8d8.jpg",
            name: "Seo Yi Ra",
            age: 28
        },
        {
            src: "https://i.pinimg.com/564x/5d/8a/8f/5d8a8f6d9bc867042cda9d1af83a8a5d.jpg",
            name: "Matt Demon",
            age: 30
        },
        {
            src: "https://i.pinimg.com/564x/0b/db/99/0bdb997bdb94b1e70d9f71ce500cf536.jpg",
            name: "Emma Watson",
            age: 37
        },
        {
            src: "https://i.pinimg.com/564x/9c/8b/16/9c8b165933ea94a1a42c27f7f0fd6744.jpg",
            name: "Dwayne Johnson",
            age: 33
        },
        {
            src: "https://i.pinimg.com/736x/f1/c7/a8/f1c7a89bc563ee75c3aaf246311576f5.jpg",
            name: "Dwayne Johnson",
            age: 26
        },
        // Tambahkan data orang lainnya di sini
    ];

    persons.forEach(person => {
        const col = document.createElement('div');
        col.classList.add('col-2');

        const personElement = `
            <a href="#" class="person-wrapp link-underline link-underline-opacity-0">
                <div class="img-person-wrapp rounded-circle">
                    <img src="${person.src}" alt="${person.name}">
                </div>
                <div class="person-name mt-2">${person.name}</div>
                <div class="person-age">${person.age}</div>
            </a>
        `;

        col.innerHTML = personElement;
        personContainer.appendChild(col);
    });
});
