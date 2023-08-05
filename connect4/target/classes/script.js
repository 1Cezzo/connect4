// Function to generate a shorter unique room ID
function generateRoomId() {
  const timestamp = Date.now().toString(36); // Get the current timestamp as a shorter string
  const randomId = Math.random().toString(36).substr(2, 4); // Generate a random string of 4 characters

  return 'room-' + timestamp + '-' + randomId;
}


// Function to handle the "Play with Friend" button click
function handlePlayButtonClick() {
  // Generate a unique room ID
  const roomId = generateRoomId();

  // Navigate to the new game page with the generated room ID as a query parameter
  window.location.href = 'game.html?room=' + roomId;
}

// Add event listener to the "Play with Friend" button
const playButton = document.getElementById('play-button');
playButton.addEventListener('click', handlePlayButtonClick);
