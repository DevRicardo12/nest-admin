import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { User } from './models/user.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcryptjs';
import { UserCreateDto } from './models/user-create.dto';
import { AuthGuard } from '../auth/auth.guard';
import { UserUpdateDto } from './models/user-update.dto';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller('users')
export class UserController {
    constructor(private userservice: UserService){}


    @Get()
    async all(@Query('page') page:number=1):Promise<User[]>{
        return this.userservice.paginate(page);
    }

    @Post()
    async create(@Body() body: UserCreateDto): Promise<User> {
        const password =  bcrypt.hashSync('1234',12);

        return this.userservice.create({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            password,
        });
    }

    @Get(':id')
    async get(@Param('id') id:number){
        return this.userservice.findone({id:id});
    }

    @Put(':id')
    async update(
        @Param('id') id:number,
        @Body() body: UserUpdateDto
    ){

        await this.userservice.update(id,body);
        
        return this.userservice.findone({ id: id });
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.userservice.delete(id);
    }

}
