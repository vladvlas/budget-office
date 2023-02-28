import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegistrationService} from "../../services/registration.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})

export class RegistrationComponent implements OnInit {

  form = new FormGroup({
    userName: new FormControl<string>("", [Validators.required]),
    email: new FormControl<string>("", [Validators.email, Validators.required])
  })

  constructor(private registrationService: RegistrationService) {
  }

  get userName() {
    return this.form.controls.userName as FormControl
  }

  get email() {
    return this.form.controls.email as FormControl
  }


    ngOnInit(): void {
  }

  send(): void {
    this.registrationService.registration({
      userName: this.form.value.userName as string,
      email: this.form.value.email as string,
    }).subscribe(() => {
      console.log("регистрация")
      this.form.reset()
    })
  }

}
