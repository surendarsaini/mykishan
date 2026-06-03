document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass");

  const user = JSON.parse(localStorage.getItem("user"));

  console.log("Stored User:", user);
  console.log("Entered Email:", email);
  console.log("Entered Password:", pass);

  if(user && 
    user.email === email) 
   {
    alert("Login Successful");
     window.location.href = "index.html";
  } else {
    alert("Invalid Email");
  }
});