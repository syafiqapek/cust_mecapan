import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CalendarModule } from "ion2-calendar";
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ConfirmBookingPageModule } from '../pages/confirm-booking/confirm-booking.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { StartPageModule } from '../pages/start/start.module';
import { SetTimeAppointmentPageModule } from "../pages/set-time-appointment/set-time-appointment.module";
import { TreatmentprovidersPageModule } from "../pages/treatmentproviders/treatmentproviders.module";
import { ListprovidersPageModule } from "../pages/listproviders/listproviders.module";
import { SetDayAppointmentPageModule } from "../pages/set-day-appointment/set-day-appointment.module";
import { LoginService } from '../pages/service/login.service';
import { LogInMeccapanPage } from '../pages/log-in-meccapan/log-in-meccapan';
import { SignInPageModule } from '../pages/sign-in/sign-in.module';
import { BookingDetailsPageModule } from '../pages/booking-details/booking-details.module';
import { ForgetPasswordPageModule } from '../pages/forget-password/forget-password.module';
import { Ionic2RatingModule } from 'ionic2-rating';
import { Facebook } from '@ionic-native/facebook';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GooglePlus } from '@ionic-native/google-plus';
//import { NgCalendarModule } from 'ionic2-calendar';
import { ServiceApiProvider } from '../providers/service-api/service-api';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { Ng2Webstorage } from 'ng2-webstorage';
import { NguiMapModule } from '@ngui/map';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { ResetPasswordPageModule } from '../pages/reset-password/reset-password.module';
import { ReviewPageModule } from '../pages/review/review.module';
import { CountryPhoneNumberPageModule } from '../pages/country-phone-number/country-phone-number.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LogInMeccapanPage
  ],
  imports: [
    CalendarModule,
    // NgCalendarModule,
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot({
      name: 'CustomerMeccapan',
      driverOrder: ['localstorage', "sqllite"]
    }), BrowserModule,
    ListprovidersPageModule,
    TreatmentprovidersPageModule,
    SetTimeAppointmentPageModule,
    SetDayAppointmentPageModule,
    ConfirmBookingPageModule,
    RegisterPageModule,
    Ionic2RatingModule,
    StartPageModule,
    SignInPageModule,
    BookingDetailsPageModule,
    ForgetPasswordPageModule,
    ResetPasswordPageModule,
    Ng2Webstorage,
    ReviewPageModule,
    CountryPhoneNumberPageModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBSy0GEQeCrUgJ9LvrYHUBemGUjHE1PhcU' }),
    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
      autoFocusAssist: false
    }),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LogInMeccapanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    Facebook,
    ServiceApiProvider,
    Geolocation
  ]
})
export class AppModule { }
