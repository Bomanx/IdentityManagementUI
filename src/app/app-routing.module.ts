import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent} from './landing/landing.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { CreateCompartmentComponent } from './create-compartment/create-compartment.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'Landing'},
  {path: 'Landing', component: LandingComponent},
  {path: 'CreateUser', component: CreateUserComponent},
  {path: 'CreateGroup', component: CreateGroupComponent},
  {path: 'DisplayUsers', component: DisplayUsersComponent},
  {path: 'CreateCompartment', component: CreateCompartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
