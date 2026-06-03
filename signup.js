

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Button Clicked");

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    

    const user = {
        name,
        email,
        pass
    
    };

    localStorage.setItem("user", JSON.stringify(user));

    console.log(user);

    alert("Signup Successful");
    window.location.href = "index.html";
});