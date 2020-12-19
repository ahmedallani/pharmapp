import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
{path: 'login', component: LoginComponent},
{path: 'navbar', component: NavbarComponent},
{path: 'member', component: MemberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
