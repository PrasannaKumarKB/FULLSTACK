import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container">
      <nav class="navbar">
        <div class="navbar-left">
          <span>Welcome, {{ username }}</span>
        </div>
        <div class="navbar-right">
          <button class="icon-button" (click)="toggleTheme()">🌙</button>
          <button class="icon-button" (click)="toggleNotifications()">🔔</button>
        </div>
      </nav>

      <main>
        <h2 class="project-title">Registration Portal</h2>
        <div class="options">
          <div class="option-box">
            <button (click)="openProjectChoiceModal()" class="option-link">
              <h2>Registration Form</h2>
            </button>
          </div>
          <div class="option-box">
            <button (click)="goToStatus()" class="option-link">
              <h2>Registration Status</h2>
            </button>
          </div>
        </div>
      </main>

      <footer class="footer">
        <p>© Bannari Amman Institute of Technology, 2024. All Rights Reserved.</p>
      </footer>

      <!-- Notifications Modal -->
      <div class="modal" *ngIf="showNotifications">
        <div class="modal-content">
          <span (click)="toggleNotifications()" class="close-button">&times;</span>
          <h3>Notifications</h3>
          <ul>
            <li *ngFor="let notification of notifications">{{ notification }}</li>
          </ul>
        </div>
      </div>

      <!-- Project Choice Modal -->
      <div class="modal" *ngIf="showProjectChoice">
        <div class="modal-content">
          <span (click)="closeProjectChoiceModal()" class="close-button">&times;</span>
          <h3>Select Project Type</h3>
          <p>Are you choosing an Internal or External Project?</p>
          <div class="button-group">
            <button (click)="navigateToInternal()" class="project-button">Internal Project</button>
            <button (click)="navigateToExternal()" class="project-button">External Project</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    body {
      font-family: 'Poppins', sans-serif;
      margin: 0;
      padding: 0;
      background: #f4f7f9;
      color: #333;
      transition: background-color 0.3s, color 0.3s;
      overflow: hidden;
    }

    body.dark-mode {
      background-color: #1a1a1a;
      color: #f0f0f0;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 15px 30px;
      background-color: #0061f2;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      color: white;
      border-radius: 10px;
      margin-bottom: 30px;
    }

    .navbar-left {
      font-size: 20px;
      font-weight: 600;
    }

    .navbar-right {
      display: flex;
      gap: 20px;
    }

    .icon-button {
      background: transparent;
      border: none;
      color: white;
      cursor: pointer;
      font-size: 24px;
      transition: transform 0.3s ease, color 0.3s ease;
    }

    .icon-button:hover {
      color: #e0e0e0;
      transform: scale(1.1);
    }

    .project-title {
      font-size: 32px;
      color: #00509e;
      margin-bottom: 40px;
      text-align: center;
      font-weight: 600;
    }

    .options {
      display: flex;
      justify-content: center;
      gap: 50px;
    }

    .option-box {
      width: 300px;
      height: 200px;
      border-radius: 15px;
      background: linear-gradient(145deg, #ffffff, #f4f7f9);
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .option-box:hover {
      transform: translateY(-10px);
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15);
    }

    .option-link {
      font-size: 20px;
      color: #00509e;
      background: transparent;
      border: none;
      cursor: pointer;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: color 0.3s ease;
    }

    .option-link:hover {
      color: #003f7e;
    }

    .footer {
      text-align: center;
      color: #888;
      margin-top: auto;
      padding: 20px 0;
      font-size: 14px;
    }

    .modal {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1000;
    }

    .modal-content {
      background-color: white;
      border-radius: 15px;
      padding: 20px 30px;
      width: 400px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      position: relative;
      text-align: center;
    }

    .close-button {
      position: absolute;
      top: 10px;
      right: 20px;
      cursor: pointer;
      font-size: 20px;
      color: #888;
      transition: color 0.3s ease;
    }

    .close-button:hover {
      color: #000;
    }

    .button-group {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
    }

    .project-button {
      background-color: #00509e;
      color: white;
      border: none;
      border-radius: 8px;
      padding: 12px 20px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
      width: 100%;
      margin: 0 10px;
      font-size: 16px;
      font-weight: 600;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .project-button:hover {
      background-color: #003f7e;
      transform: translateY(-2px);
    }
  `],
  imports: [CommonModule]
})
export class HomeComponent {
  username: string = 'User'; // Placeholder for actual username
  showNotifications: boolean = false;
  notifications: string[] = ['Notification 1', 'Notification 2', 'Notification 3'];
  showProjectChoice: boolean = false;

  constructor(private router: Router) {}

  openProjectChoiceModal() {
    this.showProjectChoice = true; 
  }

  closeProjectChoiceModal() {
    this.showProjectChoice = false; 
  }

  navigateToInternal() {
    this.router.navigate(['/internal']);
    this.closeProjectChoiceModal();
  }

  navigateToExternal() {
    this.router.navigate(['/external']);
    this.closeProjectChoiceModal();
  }

  goToStatus() {
    this.router.navigate(['/status']);
  }

  toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications; 
  }
}
