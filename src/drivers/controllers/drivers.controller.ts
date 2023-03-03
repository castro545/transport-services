import { Controller, Get, Post, Body } from '@nestjs/common';
import { DriversService } from '../services/drivers.service';
import { Driver } from '../models/driver.schema';

@Controller('drivers')
export class DriversController {
    constructor(private driversService: DriversService) { }

    @Get()
    async findAll(): Promise<Driver[]> {
        return this.driversService.findAll();
    }

    @Post()
    async create(@Body() driver: Driver): Promise<Driver> {
        return this.driversService.create(driver);
    }
}
