import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("login-form") as HTMLFormElement;
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    // Vérification du nom d'utilisateur et du mot de passe
    if (username === "admin" && password === "password") {
      alert("Connexion réussie !");
      // Redirection vers une autre page
      window.location.href = "accueil.html";
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect !");
    }
  });
});
