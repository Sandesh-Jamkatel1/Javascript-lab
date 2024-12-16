   // Create a new Date object
   const date = new Date();

   // Display various properties of the Date object
   const day = date.getDate();
   const month = date.getMonth() + 1; // Months are 0-indexed, so add 1
   const year = date.getFullYear();
   const hours = date.getHours();
   const minutes = date.getMinutes();
   const seconds = date.getSeconds();

   // Display current date and time in default format
   document.getElementById("current-date").innerText = `Current Date and Time: ${date}`;

   // Display date in "DD/MM/YYYY" format
   const formattedDate1 = `${day}/${month}/${year}`;
   
   // Display date in "Month Day, Year" format
   const monthNames = ["January", "February", "March", "April", "May", "June", 
                       "July", "August", "September", "October", "November", "December"];
   const formattedDate2 = `${monthNames[month - 1]} ${day}, ${year}`;
   
   // Output different date formats
   document.getElementById("formatted-date").innerHTML = `
       <strong>Formatted Dates:</strong><br>
       DD/MM/YYYY format: ${formattedDate1}<br>
       Month Day, Year format: ${formattedDate2}<br>
       Time: ${hours}:${minutes}:${seconds}
   `;