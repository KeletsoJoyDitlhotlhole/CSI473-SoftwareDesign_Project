import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-newsletter",
  template: `
    <article class="newsletter">
      <h2 class="newsletter-title">Monthly Newsletter</h2>
      <p class="newsletter-date">October 2024 Edition</p>
      <p class="newsletter-intro">
        We are excited to bring you the latest updates and health tips from our practice. Our goal is to keep you informed and engaged with valuable information to support your health and well-being.
      </p>
      <section>
        <h3>Upcoming Events:</h3>
        <p>Join us for our annual Health Fair on [Date]. This event will feature free health screenings, informative workshops, and fun activities for the whole family.</p>
      </section>
      <section>
        <h3>Health Tips of the Month</h3>
        <ul>
          <li>Stay Hydrated: Drinking enough water is essential for maintaining good health. Aim for at least 8 glasses a day.</li>
          <li>Exercise Regularly: Incorporate at least 30 minutes of physical activity into your daily routine to boost your overall health.</li>
          <li>Get Your Flu Shot: With flu season approaching, it's important to get vaccinated to protect yourself and others.</li>
        </ul>
      </section>
    </article>
  `,
  styles: [`
    .newsletter {
      color: #000;
      flex-grow: 1;
      width: 861px;
      font: 400 24px Inter, sans-serif;
    }
    .newsletter-title {
      font-weight: 700;
      font-style: italic;
      font-size: 36px;
      margin-bottom: 10px;
    }
    .newsletter-date {
      margin-bottom: 20px;
    }
    .newsletter-intro {
      margin-bottom: 20px;
    }
    h3 {
      font-weight: 700;
      margin-bottom: 10px;
    }
    ul {
      padding-left: 20px;
    }
    li {
      margin-bottom: 10px;
    }
    @media (max-width: 991px) {
      .newsletter {
        max-width: 100%;
      }
    }
  `],
  standalone: true,
  imports: [CommonModule],
})
export class Newsletter {}