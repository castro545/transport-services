import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassengersController } from './controllers/passengers.controller';
import { PassengersService } from './services/passengers.service';
import { Passenger, PassengerSchema } from './models/passenger.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Passenger.name, schema: PassengerSchema },
        ]),
    ],
    controllers: [PassengersController],
    providers: [PassengersService],
    exports: [PassengersService],
})
export class PassengersModule { }
