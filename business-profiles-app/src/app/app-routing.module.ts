import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BusinessProfileDetailComponent } from './business-profiles/business-profile-detail/business-profile-detail.component'
import { BusinessProfileComponent } from './business-profiles/business-profile/business-profile.component'
import { BusinessProfilesComponent } from './business-profiles/business-profiles/business-profiles.component'
import { ActivationService } from './guards/activation-service'
import { LoginComponent } from './login/login/login.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profiles',
    canActivate: [ActivationService],
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            component: BusinessProfilesComponent,
            pathMatch: 'full',
          },
          {
            path: 'details/:id',
            component: BusinessProfileDetailComponent,
          },
        ],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
