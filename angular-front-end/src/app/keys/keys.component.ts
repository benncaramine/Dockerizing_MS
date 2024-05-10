import {Component} from '@angular/core';

@Component({
  selector: 'app-keys',
  standalone: true,
  imports: [],
  templateUrl: 'keys.component.html',
  styleUrl: './keys.component.css'
})
export class KeysComponent {

}
document.addEventListener('DOMContentLoaded', function () {
  const lengthInput = document.getElementById('length') as HTMLInputElement;
  const generateBtn = document.getElementById('generateBtn') as HTMLButtonElement;
  const apiKeyInput = document.getElementById('apiKey') as HTMLInputElement;

  generateBtn.addEventListener('click', () => {
    const length = parseInt(lengthInput.value);
    if (isNaN(length) || length <= 0) {
      alert('Please enter a valid positive number for the length.');
      return;
    }
    apiKeyInput.value = generateAPIKey(length);
  });

  function generateAPIKey(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

});


