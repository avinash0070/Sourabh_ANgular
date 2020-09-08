import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { IndexComponent } from './index/index.component';
import { CompanyComponent } from './company/company.component';
import { TermsComponent } from './terms/terms.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
	 { path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'about_us', component: AboutUsComponent },
	{ path: 'home', component: IndexComponent, },
	{ path: 'company', component: CompanyComponent, },
	{ path: 'terms', component: TermsComponent,},
	{ path: 'login', component: LoginComponent,},
	{ path: 'signup', component: SignupComponent ,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
