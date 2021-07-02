import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice(
    {
        name:"ui",
        initialState:{
            navigation : {
                drawer: {
                    open: false
                },
                navigatedToPageName: ''
            }
        },
        reducers:{
            toggleAppDrawer:(state, action) =>{
                if (!(action.payload.eventType === 'keydown' && (action.payload.eventKey === 'Tab' || action.payload.eventKey === 'Shift'))) {
                    state.navigation.drawer.open = action.payload.open ? action.payload.open : !state.navigation.drawer.open
                }
            },
            updateNavigatedToPageName: (state, action)=>{
                state.navigation.navigatedToPageName = action.payload.name
            }
        }
    }
);

export const {toggleAppDrawer, updateNavigatedToPageName} = uiSlice.actions
export default uiSlice.reducer