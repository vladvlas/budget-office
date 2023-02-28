import { Injectable } from '@nestjs/common';
import {RegistrationUserDto} from "./dto/registration-user.dto";

@Injectable()
export class UsersService {
    registration(registrationUser: RegistrationUserDto): void {
      console.log("data: ", registrationUser);
    }
}