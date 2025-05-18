import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // make sure this is your route file

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
// This configuration file sets up the Angular application with routing.
// It imports the necessary modules and provides the router with the defined routes.