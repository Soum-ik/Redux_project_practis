// actions.ts
import { CREATE, DELETE } from './actionType';
import { Booking } from '../booking/typs';

export const createBooking = (booking: Booking) => {
 
    return {
        type: CREATE,
        payload: booking
    };
};

export const deleteBooking = (booking: Booking) => {
 
    return {
        type: DELETE,
        payload: booking
    };
};

 