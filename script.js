// Dummy function to simulate sending an email
function sendEmail(recipient, subject, body) {
    console.log(`Sending email to: ${recipient}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${body}`);
    // You can replace the console.log statements with actual API calls to a backend server
  }
  
  // Function to handle sending an email
  function handleSendEmail() {
    const recipient = document.getElementById("recipient").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const body = document.getElementById("body").value.trim();
  
    if (recipient === "" || subject === "" || body === "") {
      alert("Please fill in all fields before sending the email.");
      return;
    }
  
    sendEmail(recipient, subject, body);
    // Clear the input fields after sending the email
    document.getElementById("recipient").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("body").value = "";
  }
  
  // Event listener for the "Send Email" button
  const sendBtn = document.getElementById("sendBtn");
  sendBtn.addEventListener("click", handleSendEmail);
  