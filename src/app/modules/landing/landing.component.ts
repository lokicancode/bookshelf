import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  heroTextStr = 'All your favourite BOOKS 📚';
  heroSubTextStr = '@ your fingertips 🖐';
  heroBtnLabel = 'Go to your shelf now';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onGoToSelf() {
    this.router.navigateByUrl('/home');
  }
}
