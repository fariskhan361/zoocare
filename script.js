        const animals = [
            {
                img: 'loin.jpg',
                name: 'asiatic loin',
                status: 'endangered'
            },
            {
                img: 'leopard.jpg',
                name: 'american jaguar',
                status: 'vulnurable'
            },
            {
                img: 'elephant.jpg',
                name: 'african elephant',
                status: 'endangered'
            },{
                img: 'tiger.jpg',
                name: 'indian tiger',
                status: 'vulnerable'
            },
        ]


        let nameAnimal = document.querySelector('h1');
        let status = document.querySelector('h3');
        let background = document.querySelector('.background');
        let body = document.querySelector('body');

        //btn

        let prevBtn = document.querySelector('.prevBtn');
        let nextBtn = document.querySelector('.nextBtn');

        window.addEventListener('click', () => {
            showAnimals();
        });

        let currentAnimal = 0;

        function showAnimals() {
            let item = animals[currentAnimal];
            background.src = item.img;
            nameAnimal.textContent = item.name;
            status.textContent = item.status;
        }

        prevBtn.addEventListener('click', () => {
            currentAnimal--;
            if (currentAnimal < 0) {
                currentAnimal = animals.length -1;
            }
            showAnimals();
        })

        nextBtn.addEventListener('click', () => {
            currentAnimal++;
            if (currentAnimal > animals.length -1) {
                currentAnimal = 0;
            }
            showAnimals();
        })