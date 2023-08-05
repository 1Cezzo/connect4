// Import the uuid library
import { v4 as uuidv4 } from 'uuid';

// Function to generate a unique room ID using UUID
function generateRoomId() {
  return 'room-' + uuidv4();
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
