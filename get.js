document.querySelector("#getBtn").addEventListener("click", () => { 
    let xhr = new XMLHttpRequest(); 
  
    xhr.open("GET", "https://raw.githubusercontent.com/ruhulaminn1316/ajax/refs/heads/main/ajax.json", true); 
  
    xhr.onload = () => { 
      if (xhr.status === 200) { // Success 
        console.log("Data successfully fetched!"); 
        console.log("Response:", xhr.responseText);
  
        let data = JSON.parse(xhr.responseText);
  
        displayFetchedData(data); 
      } else { 
        console.error("Failed to fetch data. Status:", xhr.status); 
        document.querySelector("#output").innerHTML = "Failed to fetch data."; 
      } 
    }; 
  
    xhr.onerror = () => { 
      console.error("Network error occurred."); 
      document.querySelector("#output").innerHTML = "Network error occurred."; 
    };
  
    xhr.send(); 
  });
  
  function displayFetchedData(data) { 
    let out = "<h2>Your Information:</h2>";
    out += "<h2>Data Get:</h2>";
  
    out += "<p><strong>Name:</strong> " + data.name + "</p>"; 
    out += "<p><strong>Student ID:</strong> " + data.myid + "</p>"; 
    out += "<p><strong>Email:</strong> " + data.email + "</p>"; 
    out += "<p><strong>Phone:</strong> " + data.phone + "</p>"; 
    out += "<p><strong>Social Media:</strong> " + data.social_media + "</p>"; 
    out += "<p><strong>Languages:</strong> " + data.languages.join(", ") + "</p>"; 
    out += "<p><strong>Hobbies:</strong> " + data.hobbies.join(", ") + "</p>"; 
  
    document.querySelector("#output").innerHTML += out; 
  }
  