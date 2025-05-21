import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app-routing.module';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './app/auth/auth.interceptor'; // ✅

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(
    withInterceptors([AuthInterceptor]) // ✅ use this
    ),
    importProvidersFrom(FormsModule)
  ]
});
// This is the main entry point for the Angular application. It bootstraps the AppComponent and sets up routing and HTTP client with interceptors.
// The AuthInterceptor is used to handle authentication tokens for API requests.  