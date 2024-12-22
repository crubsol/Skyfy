const apiKey = 'earjlcNQctkLc3X5e9vAw9bFNfp2OwJPqngjopnn';
        const contentDiv = document.getElementById('content');
        const dateInput = document.getElementById('date');
        const fetchButton = document.getElementById('fetchImage');

        
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;

        
        const loadImage = (date) => {
            const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
            contentDiv.innerHTML = `<p>Uploading image...</p>`; 

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);  
                    if (data.error) {
                        contentDiv.innerHTML = `<p>Error: ${data.error.message}</p>`;
                    } else {
                        contentDiv.innerHTML = `
                            <h2 class="title_photo">${data.title}</h2>
                            <h2>${data.date}</h2>
                            <img id="imagen_nasa" src="${data.url}" alt="${data.title}">
                            <p class="explanation">${data.explanation}</p>
                        `;
                    }
                })
                .catch(error => {
                    contentDiv.innerHTML = `<p>Error when uploading the image. Please try again later.</p>`;
                    console.error('Error:', error);
                });
        };

        
        loadImage(today);

        
        fetchButton.addEventListener('click', () => {
            const selectedDate = dateInput.value;
            if (selectedDate) {
                loadImage(selectedDate);
            } else {
                alert('Please select a date');
            }
        });