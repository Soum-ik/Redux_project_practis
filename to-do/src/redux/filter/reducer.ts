import initialState, { state } from "./initialState";
import { colorChanged, statusChanged } from "./actions"

interface payload {
    status?: String,
    color?: String,
    changeType?: String,

}


const filterReducer = (state: state = initialState, action: { payload: payload }) => {
    switch (action.payload) {

        case statusChanged:
            return {
                ...state,
                status: action.payload
            }


        case colorChanged:
            const { color, changeType } = action.payload;

            switch (changeType) {
                case "added":
                    return {
                        ...state,
                        colors: [...state.colors, color],
                    };

                case "removed":
                    return {
                        ...state,
                        colors: state.colors.filter(
                            (existingColor) => existingColor !== color
                        ),
                    };

                default:
                    return state;
            }

    }
}
export default filterReducer