import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { BusinessProfile } from '../models/business-profile'

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.scss'],
})
export class BusinessProfileComponent {
  @Input() businessProfile?: BusinessProfile

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  goToBusinessProfile(id: string): void {
    this.router.navigate([`details/${id}`], { relativeTo: this.activatedRoute })
  }
}
