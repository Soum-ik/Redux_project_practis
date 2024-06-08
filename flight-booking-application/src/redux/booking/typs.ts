export interface Booking {
    from: string;
    to: string;
    date: string;
    guests: string;
    ticketClass: string;
}

export interface BookingState {
    bookings: Booking[];
}