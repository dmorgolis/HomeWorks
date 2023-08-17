function displayUserInfo() {
  // Get the user's information from the form
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var position = document.getElementById("position").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var taxId = document.getElementById("taxId").value;
  var residenceCity = document.getElementById("residenceCity").value;
  
  // Create a string with the user's information
  var userInfo = "שם מלא: " + firstName + " " + lastName + "<br>" +
                 "Email: " + email + "<br>" +
                 "תפקיד: " + position + "<br>" +
                 "מספר פלאפון: " + phoneNumber + "<br>" +
                 "מספר זהות: " + taxId + "<br>" +
                 "עיר מגורים: " + residenceCity + "<br>";
  
  // Get the user's profile picture
  var profilePicture = document.getElementById("profilePicture");
  
  // Create a new image element
  var img = document.createElement("img");
  
  // Set the source of the image to the user's selected file
  img.src = URL.createObjectURL(profilePicture.files[0]);
  
  // Set the alt text of the image to the user's name
  img.alt = firstName + " " + lastName;
  
  // Get the modal element
  var modal = document.getElementById("userInfoModal");
  
  // Get the element where we will display the user's information
   var userDetails = document.getElementById("userDetails");
  
   // Get the element where we will display the user's profile picture
   var profileImage = document.getElementById("profile");
}
