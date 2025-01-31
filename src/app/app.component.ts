import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import Swal from 'sweetalert2'
import { UserServiceService } from './service/user-service.service';
import { User } from './model/user.interfaz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {




  public form: FormGroup;
  public user?: boolean
  public usuarios: User[] = []

  title = 'prueba-conocimiento';


  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService


  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required]

    });

  }

  enviar() {
    this.userService.postUser(this.form.value).subscribe((res: any) => {

      Swal.fire({
        title: 'Enviado',
        text: `Gracias por contactarnos ${this.form.value.name}`,
        icon: 'success'
      })
    })

  }


  getUser() {
    this.userService.getUser().subscribe((res: any) => {
      this.user = true
      this.usuarios = res
    })

  }


}
