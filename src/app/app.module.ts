import { APP_INITIALIZER, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { fakeBackendProvider } from './helpers/fake-backend'
import { initializeApp } from './helpers/initializeApp'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    fakeBackendProvider,
    {
      provide: APP_INITIALIZER,
      useFactory: () => initializeApp,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
