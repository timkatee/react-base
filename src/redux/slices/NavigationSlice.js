import {createSlice} from "@reduxjs/toolkit";

const navigationSlice = createSlice(
    {
        name:"navigation",
        initialState:{
            drawer : {
                open : true
            }
        },
        reducers:{
            toggleAppDrawer:(state, action) =>{
                if (!(action.payload.eventType === 'keydown' && (action.payload.eventKey === 'Tab' || action.payload.eventKey === 'Shift'))) {
                    state.drawer.open = action.payload.open ? action.payload.open : !state.drawer.open
                }
            },
        }
    }
);

export const {toggleAppDrawer} = navigationSlice.actions
export default navigationSlice.reducer