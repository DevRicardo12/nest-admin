import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from './models/role.entity';

@Controller('roles')
export class RoleController {
    constructor(private roleServices: RoleService){}

    @Get()
    async all(): Promise<Role[]>{
       return  this.roleServices.all();
    }

    @Post()
    async create(@Body('name') name:string) {
        return this.roleServices.create({ name});
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.roleServices.findone({ id: id });
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body('name') name: string
    ) {

        await this.roleServices.update(id, {name});

        return this.roleServices.findone({ id: id });
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.roleServices.delete(id);
    }
}
