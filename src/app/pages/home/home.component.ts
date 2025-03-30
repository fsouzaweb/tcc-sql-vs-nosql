import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private authService: AuthService) { }

  usuario = this.authService.obterUsuarioLogado();
}
