import {Body, Controller, Header, Post} from '@nestjs/common';
import {RegistrationUserDto} from "./dto/registration-user.dto";
import {UsersService} from "./users.service";

@Controller()
export class UsersController  {

    constructor(private readonly usersService: UsersService) {
    }

    @Post("/registration")
        @Header('Content-Type', 'application/json')
        registration(@Body() registrationUser: RegistrationUserDto): any {
          return this.usersService.registration(registrationUser);
        }
}
