import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"studiovogue-c0e63","appId":"1:489431177459:web:7443eb716b8914b9457f86","storageBucket":"studiovogue-c0e63.appspot.com","apiKey":"AIzaSyDLZ1rMmIfRl96FgxxEEJ_vNhOhqtUxcuE","authDomain":"studiovogue-c0e63.firebaseapp.com","messagingSenderId":"489431177459","measurementId":"G-6283Z0HWH5"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase()))]
};
