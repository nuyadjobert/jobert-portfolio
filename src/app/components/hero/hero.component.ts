import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PROFILE } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {

  profile = PROFILE;

  // =========================
  // NAME
  // =========================

  firstName = PROFILE.name.split(' ')[0];
  restName = PROFILE.name.split(' ').slice(1).join(' ');


  // =========================
  // ROLES
  // =========================

  roles = [
    'FRONT END DEVELOPER',
    'FULL STACK DEVELOPER',
    'UI/UX DESIGNER'
  ];

  currentRole = '';

  private roleIndex = 0;


  // =========================
  // TIMER
  // =========================

  private typingInterval?: ReturnType<typeof setInterval>;
  private deletingInterval?: ReturnType<typeof setInterval>;
  private cycleTimeout?: ReturnType<typeof setTimeout>;


  // =========================
  // START
  // =========================

  ngOnInit(): void {
    this.startTypingRole();
  }


  // =========================
  // DESTROY
  // =========================

  ngOnDestroy(): void {
    this.clearTimers();
  }


  // =========================
  // TYPE ROLE
  // =========================

  private startTypingRole(): void {

    this.clearTimers();

    this.currentRole = '';

    const role = this.roles[this.roleIndex];

    let index = 0;

    this.typingInterval = setInterval(() => {

      if (index < role.length) {

        this.currentRole += role[index];
        index++;

      } else {

        clearInterval(this.typingInterval);

        // Pause before deleting
        this.cycleTimeout = setTimeout(() => {
          this.startDeletingRole();
        }, 2000);
      }

    }, 70);
  }


  // =========================
  // DELETE ROLE
  // =========================

  private startDeletingRole(): void {

    this.clearIntervals();

    this.deletingInterval = setInterval(() => {

      if (this.currentRole.length > 0) {

        this.currentRole = this.currentRole.slice(0, -1);

      } else {

        clearInterval(this.deletingInterval);

        // Move to next role
        this.roleIndex =
          (this.roleIndex + 1) % this.roles.length;

        // Small pause before typing again
        this.cycleTimeout = setTimeout(() => {
          this.startTypingRole();
        }, 500);
      }

    }, 45);
  }


  // =========================
  // CLEANUP
  // =========================

  private clearIntervals(): void {

    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }

    if (this.deletingInterval) {
      clearInterval(this.deletingInterval);
    }
  }


  private clearTimers(): void {

    this.clearIntervals();

    if (this.cycleTimeout) {
      clearTimeout(this.cycleTimeout);
    }
  }
}
