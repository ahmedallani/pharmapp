import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustumerComponent } from './custumer/custumer.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'custumer', component:CustumerComponent},
  {path:'product' , component:ProductComponent},
  {path:'navbar' , component:NavbarComponent},
  {path: 'member', component:MemberComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,CustumerComponent,ProductComponent]
