import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, DetailsComponent],
  template: `
    <header class="w-full h-16 flex items-center bg-black top-0 z-10 fixed">
      <h1 class="text-3xl font-bold ml-4 text-white">Employee Management</h1>
    </header>
    <main>
      <section>
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'employee-management';
}
