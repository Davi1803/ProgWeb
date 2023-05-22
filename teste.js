function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential)
  
    fullName.textContent = data.name
    sub.textContent = data.sub
    given_name.textContent = data.given_name
    family_name.textContent = data.family_name
    email.textContent = data.email
    verifiedEmail.textContent = data.email_verified
    picture.setAttribute("src", data.picture)
  }
  
  window.onload = function () {
    const clientID = window.prompt("876233185926-0h8866cv2qd0rmra117j1co1210optdb.apps.googleusercontent.com", "")
  
    google.accounts.id.initialize({
      client_id: "876233185926-0h8866cv2qd0rmra117j1co1210optdb.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"), {
      theme: "filled_black",
      size: "large",
      type: "standard",
      shape: "pill",
      locale: "pt-BR",
      logo_alignment: "left",
    } // customization attributes
    );
  
    google.accounts.id.prompt(); // also display the One Tap dialog
  }