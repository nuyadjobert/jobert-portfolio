import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PROFILE } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit, OnDestroy {

  profile = PROFILE;

  // =========================
  // NAME
  // =========================

  firstName = '';
  restName = '';

  private fullFirstName = PROFILE.name.split(' ')[0];
  private fullRestName = PROFILE.name.split(' ').slice(1).join(' ');


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
  // TIMERS
  // =========================

  private typingInterval?: ReturnType<typeof setInterval>;
  private deletingInterval?: ReturnType<typeof setInterval>;
  private cycleTimeout?: ReturnType<typeof setTimeout>;


  // =========================
  // START
  // =========================

  ngOnInit(): void {
    this.startTyping();
  }


  // =========================
  // DESTROY
  // =========================

  ngOnDestroy(): void {
    this.clearTimers();
  }


  // =========================
  // TYPING
  // =========================

  private startTyping(): void {

    this.clearTimers();

    this.firstName = '';
    this.restName = '';
    this.currentRole = '';

    const role = this.roles[this.roleIndex];

    let firstIndex = 0;
    let restIndex = 0;
    let roleIndex = 0;

    this.typingInterval = setInterval(() => {

      // -------------------------
      // TYPE FIRST NAME
      // -------------------------

      if (firstIndex < this.fullFirstName.length) {

        this.firstName += this.fullFirstName[firstIndex];
        firstIndex++;

      }

      // -------------------------
      // TYPE REST OF NAME
      // -------------------------

      else if (restIndex < this.fullRestName.length) {

        this.restName += this.fullRestName[restIndex];
        restIndex++;

      }


      // -------------------------
      // TYPE ROLE
      // -------------------------

      if (roleIndex < role.length) {

        this.currentRole += role[roleIndex];
        roleIndex++;

      }


      // -------------------------
      // EVERYTHING FINISHED
      // -------------------------

      if (
        firstIndex >= this.fullFirstName.length &&
        restIndex >= this.fullRestName.length &&
        roleIndex >= role.length
      ) {

        clearInterval(this.typingInterval);

        // Pause before deleting
        this.cycleTimeout = setTimeout(() => {
          this.startDeleting();
        }, 2000);
      }

    }, 70);
  }


  // =========================
  // DELETING
  // =========================

  private startDeleting(): void {

    this.clearIntervals();

    this.deletingInterval = setInterval(() => {

      // -------------------------
      // DELETE REST OF NAME
      // -------------------------

      if (this.restName.length > 0) {

        this.restName = this.restName.slice(0, -1);

      }

      // -------------------------
      // DELETE FIRST NAME
      // -------------------------

      else if (this.firstName.length > 0) {

        this.firstName = this.firstName.slice(0, -1);

      }


      // -------------------------
      // DELETE ROLE
      // -------------------------

      if (this.currentRole.length > 0) {

        this.currentRole = this.currentRole.slice(0, -1);

      }


      // -------------------------
      // EVERYTHING DELETED
      // -------------------------

      if (
        this.firstName.length === 0 &&
        this.restName.length === 0 &&
        this.currentRole.length === 0
      ) {

        clearInterval(this.deletingInterval);

        // Move to next role
        this.roleIndex =
          (this.roleIndex + 1) % this.roles.length;

        // Small pause before typing again
        this.cycleTimeout = setTimeout(() => {
          this.startTyping();
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