// List of names to choose from
        let names = [];

        // Function to pick a random name and display the result
        // Function to pick a random name and display the result
// Function to pick a random name and display the result
// Function to pick a random name and display the result
// Function to pick a random name and display the result
function pickWinner() {
    if (names.length == 0) {
        return
    }
    var subName = [...names];

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var winnerText = document.getElementById("winner-text");
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    let i = 0;
    const interval = setInterval(() => {
        const playerName = subName[i];
        console.log(playerName);
        winnerText.innerText = `... بدأت القرعة\n${playerName}`;
        i++;
        if (i === subName.length) {
            clearInterval(interval);
            const winnerIndex = Math.floor(Math.random() * subName.length);
            const winnerName = subName[winnerIndex];
            winnerText.innerText = `الفائز هو : ${winnerName}`;
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