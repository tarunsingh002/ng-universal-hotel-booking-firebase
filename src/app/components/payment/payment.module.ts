import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookingPaymentComponent } from './booking-payment.component';
import { FormsModule } from '@angular/forms';
import { HotelsResolver } from '../../services/hotels.resolver';
import { AuthGuard } from '../../services/auth-services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BookingPaymentComponent,
    resolve: [HotelsResolver],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [BookingPaymentComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class PaymentModule {}
