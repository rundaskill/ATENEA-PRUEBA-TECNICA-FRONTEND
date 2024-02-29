import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { AreaModule } from './pages/Area/Area.module';
import { PersonModule } from './pages/Person/Person.module';
import { FixedAssetModule } from './pages/FixedAsset/FixedAsset.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    AreaModule,
    PersonModule,
    FixedAssetModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
