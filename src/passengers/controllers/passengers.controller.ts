import { Controller, Get, Post, Body } from '@nestjs/common';
import { PassengersService } from '../services/passengers.service';
import { Passenger } from '../models/passenger.schema';

@Controller('passengers')
export class PassengersController {
    constructor(private passengersService: PassengersService) { }

    @Get()
    async findAll(): Promise<Passenger[]> {
        return this.passengersService.findAll();
    }

    @Post()
    async create(@Body() passenger: Passenger): Promise<Passenger> {
        return this.passengersService.create(passenger);
    }
}
