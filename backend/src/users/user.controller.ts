import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './User';
import { UserDto } from './UserDto';

@Controller('users')
export class UsersController {
	constructor(private userService: UsersService) { }

	@Get()
	findAll() {
		return this.userService.findAll();
	}

	@Get(':id')
	findById(@Param('id', ParseIntPipe) id) {
		return this.userService.findByid(id).catch((e) => {
			throw new NotFoundException(e.User);
		});
	}

	@Post()
	create(@Body() user: UserDto) {
		return this.userService.create(user)
	}

	@Put(':id')
	update(@Param('id', ParseIntPipe) id, @Body() user: UserDto) {
		return this.userService.update(id, user).catch((e) => {
			throw new NotFoundException(e.User);
		});
	}

	@Delete(':id')
	delete(@Param('id', ParseIntPipe) id) {
		return this.userService.delete(id).catch((e) => {
			throw new NotFoundException(e.User);
		});
	}
}
