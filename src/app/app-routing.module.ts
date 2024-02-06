import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarthComponent } from './earth/earth.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: 'earth',
    component: EarthComponent,
  },
  {
    path: 'hd',
    component: HeaderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
