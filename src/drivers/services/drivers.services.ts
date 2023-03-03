import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Driver, DriverDocument } from '../entities/drivers.entity';

@Injectable()
export class DriverService {
    constructor(
        private readonly driverModel: Model<DriverDocument>,
    ) { }
    private driver: Driver[] = [
        {
            name: 'string',
            email: 'correo@mail.com',
            password: 'string',
            location: {
                type: 'string',
                coordinates: number[],
            };
            isAvailable: true,
        },
    ];

    async findAll(): Promise<Driver[]> {
        return this.driverModel.find().exec();
    }

    async findById(id: string): Promise<Driver> {
        return this.driverModel.findById(id).exec();
    }

    async create(driver: Driver): Promise<Driver> {
        const createdDriver = new this.driverModel(driver);
        return createdDriver.save();
    }

    async update(id: string, driver: Driver): Promise<Driver> {
        return this.driverModel.findByIdAndUpdate(id, driver, { new: true }).exec();
    }

    async delete(id: string): Promise<any> {
        return this.driverModel.findByIdAndDelete(id).exec();
    }
}
