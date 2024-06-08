import { CREATE, DELETE } from "./actionType"
import { Booking, BookingState } from './typs'

const initialState: BookingState = {
    bookings: []
}

interface CREATE {
    payload: Booking
    type: typeof CREATE;
}

interface DELETE {
    payload: Booking
    type: typeof DELETE;
}

type Action = CREATE | DELETE


const bookingReducer = (state: BookingState = initialState, action: Action) => {
    switch (action.type) {
        case CREATE:
            if (state.bookings.length >= 3) {
                alert('Bookings are full!');
                return state;
            }
            return {
                ...state,
                bookings: [...state.bookings, action.payload]
            }
        case DELETE:
            return {
                ...state,
                bookings: state.bookings.filter(
                    booking => booking !== action.payload
                )
            }
        default:
            return state;
    }
}

export default bookingReducer