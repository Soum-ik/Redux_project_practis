export interface state {
 

    id: Number,
    text: String,
    completed: Boolean,
    color?: String
}

const initialState: state[] = [
    {
        id: 1,
        text: "Learn  MERN Stack",
        completed: true,
    },
    {
        id: 2,
        text: "Learn Redux",
        completed: false,
        color: "red",
    },
];

export default initialState;