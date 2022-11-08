import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [HomeComponent, HeaderComponent, FooterComponent]
})
export class CoreModule {}
