import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Contact } from './contact/contact';
import { AboutUs } from './about-us/about-us';
import { Villas } from './villas/villas';
import { Studios } from './studios/studios';
import { PentHouses } from './pent-houses/pent-houses';
import { Favourite } from './favourite/favourite';
import { SellRent } from './sell-rent/sell-rent';
import { BlogLifestyle } from './blog-lifestyle/blog-lifestyle';
import { Blogdetail } from './blogdetail/blogdetail';
import { VillaDetail } from './villa-detail/villa-detail';
import { Studiodetails } from './studiodetails/studiodetails';
import { Penthousedetails } from './penthousedetails/penthousedetails';
import { Userlogin } from './userlogin/userlogin';
import { authGuard } from './auth-guard';


export const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:Home, canActivate: [authGuard]},
  { path: 'contact', component: Contact,canActivate: [authGuard] },
  { path: 'about-us', component: AboutUs,canActivate: [authGuard] },
  { path: 'villas', component: Villas,canActivate: [authGuard] },
  { path: 'villa-detail/:id', component: VillaDetail },
  { path: 'studios', component: Studios , canActivate: [authGuard]},
  { path: 'studiodetails/:id', component: Studiodetails },
  { path: 'pent-houses', component: PentHouses,canActivate: [authGuard]},
  { path: 'penthousedetails/:id', component: Penthousedetails},
  { path: 'favourite', component: Favourite,canActivate: [authGuard] },
  { path: 'sell-rent', component: SellRent,canActivate: [authGuard]},
  { path: 'blog-lifestyle', component: BlogLifestyle,canActivate: [authGuard] },
  { path: 'blog-lifestyle/:id', component: Blogdetail },
  { path: 'login', component: Userlogin },
  // { path: '**', redirectTo: '/home' }
];

