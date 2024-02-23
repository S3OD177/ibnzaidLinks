// List of names to choose from
        let names = [];

        // Function to pick a random name and display the result
        // Function to pick a random name and display the result
function pickWinner() {
    if (names.length == 0) {
        return
    }
    var subName = [...names];

    const result = document.getElementById('result');
    let i = subName.length;
    const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * subName.length);
        const playerName = subName[randomIndex];
        console.log(playerName);
        result.innerHTML = `
            <h2>... بدأت القرعة</h2>
            <p>${playerName}</p>
        `;
        subName.splice(randomIndex, 1);
        i = subName.length;
        console.log(i);
        if (i === 0) {
            clearInterval(interval);
            result.innerHTML = `
                <h2>الفائز هو :</h2>
                <p>${playerName}</p>
            `;
            result.classList.add('animated', 'bounceIn');
            setTimeout(() => {
                result.classList.remove('animated', 'bounceIn');
            }, 1000);
            // Show a modal with the winner's name
            var modal = document.getElementById("myModal");
            var span = document.getElementsByClassName("close")[0];
            document.getElementById("winner-text").innerText = `الفائز هو : ${playerName}`;
            modal.style.display = "block";
            span.onclick = function() {
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
    }, 300);
}


        // Function to display the list of names
        function displayNames() {
            if (names.length != 0) {
                var namesDiv = document.getElementById("names-list");
                namesDiv.style.display = "block";
            } else {
                var namesDiv = document.getElementById("names-list");
                namesDiv.style.display = "none";
            }

            var list = document.getElementById('name-list');
            list.innerHTML = '';
            for (var i = 0; i < names.length; i++) {
                var li = document.createElement('li');
                li.innerText = names[i];
                list.appendChild(li);
            }
        }

        // Function to add a new player to the list
        function addPlayer() {
            const newPlayerInput = document.getElementById('new-name');
            const newPlayerNames = newPlayerInput.value.split('\n').map(name => name.trim());
            for (const newPlayerName of newPlayerNames) {
                if (newPlayerName !== '') {
                    // check if the name already exists
                    if (!names.includes(newPlayerName)) {
                        names.push(newPlayerName);
                        displayNames();
                    } else {
                        console.log("Dup name: " + newPlayerName);
                    }
                }
            }
            newPlayerInput.value = ''; // clear the input field at the end
        }

        function reset() {
            names.length = 0;
            displayNames();
            console.log("ok");
            
        }
        

        // Add click event listener to button
        const button = document.getElementById('pick-winner');
        button.addEventListener('click', pickWinner);

        // Add click event listener to add button
        const addPlayerButton = document.getElementById('add-name');
        addPlayerButton.addEventListener('click', addPlayer);

        const resetButton = document.getElementById('reset');
        resetButton.addEventListener('click', reset);

        // Display the initial list of names
        document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
        displayNames();