import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings.component';
import { BookingsResolver } from '../../services/bookings.resolver';
import { AuthGuard } from '../../services/auth-services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BookingsComponent,
    resolve: { res2: BookingsResolver },
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [BookingsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BookingsModule {}
