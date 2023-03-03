import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DriversController } from './controllers/drivers.controller';
import { DriversService } from './services/drivers.service';
import { Driver, DriverSchema } from './models/driver.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Driver.name, schema: DriverSchema }]),
    ],
    controllers: [DriversController],
    providers: [DriversService],
    exports: [DriversService],
})
export class DriversModule { }
