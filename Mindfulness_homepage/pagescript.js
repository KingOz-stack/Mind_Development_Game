// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Play the chirping sound in a loop
    const audio = new Audio("assets\chirping.wav"); // Replace with the correct path to your .wav file
    audio.loop = true;
    audio.volume = 0.5; // Adjust volume level
    audio.play().catch((error) => {
      console.warn("Autoplay failed. User interaction required to start sound.");
    });
  
    // Attach event listeners to navigation buttons
    const navButtons = document.querySelectorAll(".nav-button");
    navButtons.forEach((button) => {
      button.addEventListener("click", () => {
        alert(`You clicked on ${button.textContent}!`); // Replace with actual functionality
      });
    });
  
    // Attach event listeners to exercise buttons
    const exerciseButtons = document.querySelectorAll(".exercise-button");
    exerciseButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const exercise = button.textContent.trim();
        alert(`Starting exercise: ${exercise}`); // Replace with actual functionality
      });
    });
  });
  