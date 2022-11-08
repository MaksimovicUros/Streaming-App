import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [HomeComponent, HeaderComponent, FooterComponent]
})
export class CoreModule {}
