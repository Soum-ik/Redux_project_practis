import { COLORCHANGED, STATUSCHANGED } from "./actionsTypes";

export const colorChanged = (color: String, changeType: String) => {
    return {
        type: COLORCHANGED,
        payload: {
            color,
            changeType,
        },
    };
};

export const statusChanged = (status: String) => {
    return {
        type: STATUSCHANGED,
        payload: status,
    };
}