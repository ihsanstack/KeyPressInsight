// Select the container element where we'll display our results
const container = document.querySelector(".container");

// Create an empty array to store the history of keypresses
let keyLog = [];

// Log the initial empty array to the console
console.log(keyLog);

// Add an event listener to the entire window that triggers when any key is pressed
window.addEventListener("keydown", (event) => {
  // Keep only the 10 most recent keypresses by removing the oldest entry when we reach 10
  if (keyLog.length >= 10) keyLog.shift();

  // Add the new keypress information to our array as an object with three properties
  keyLog.push({
    // If spacebar (which shows as " ") is pressed, display "Space" instead, otherwise show the actual key
    // Fixed the typo: "Sapace" to "Space"
    key: event.key == " " ? "Space" : event.key,

    // The numeric code for the key (this property is deprecated but still works)
    keyCode: event.keyCode,

    // The physical key identifier (more modern approach)
    code: event.code,
  });

  // Replace the entire HTML content of the container with a new table
  container.innerHTML = `
    <p>Press any key to see the magic</p>
    <div class="tableData">
      <table>
        <tr>
          <th>Key</th>
          <th>KeyCode</th>
          <th>Code</th>
        </tr>
        ${
          // Transform each entry in the keyLog array into an HTML table row
          keyLog
            .map(
              (enter) => `
        <tr>
          <td>${enter.key}</td>
          <td>${enter.keyCode}</td>
          <td>${enter.code}</td>
        </tr>`
            )
            // Join all the HTML rows together with no separator between them
            .join("")
        }
      </table>
    </div>
  `;
});
