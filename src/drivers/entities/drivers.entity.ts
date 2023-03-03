import { Document } from 'mongoose';

export interface Driver {
    name: string;
    email: string;
    password: string;
    location: {
        type: string;
        coordinates: number[];
    };
    isAvailable: boolean;
}

export interface DriverDocument extends Driver, Document { }
