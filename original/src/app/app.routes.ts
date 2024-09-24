import { Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration/registration.component';
import { StatusComponent } from './status/status.component';
import { InternalRegistrationComponent } from './internalregistration.component'; // Ensure this import is correct
import { HomeComponent } from './home/home.component';
import { ExternalRegistrationComponent } from './externalregistration.component'; // Update with the correct path
import { FacultyComponent } from './faculty.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegistrationFormComponent,  },
  { path: 'status', component: StatusComponent, },
  { path: 'internal', component: InternalRegistrationComponent,  },
  { path: 'external', component: ExternalRegistrationComponent, }, // Add this line
  { path: 'faculty', component:FacultyComponent, },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
