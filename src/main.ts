import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { UserService } from './app/services/user.service';
import { TableService } from './app/services/table.service';
import { provideRouter } from '@angular/router';
import routes from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), UserService, TableService]
})
  .catch((err) => console.error(err));
