import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateTypes {
    isSidebarCollapsed: boolean;
    isDarkMode: boolean;
}

const initialState = {
    isSidebarCollapsed: false,
    isDarkMode: false,
};

export const globalSlice = createSlice({
    name: "global", 
    initialState,
    reducers: {
        setIsSidebarCollapsed: ( state, action: PayloadAction<boolean>) =>{ 
            // This function changes the state
            state.isSidebarCollapsed = action.payload; //payload is going to be the value for this particular function,
        },
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        }
    },

});

export const {setIsSidebarCollapsed, setIsDarkMode} = globalSlice.actions;
export default globalSlice.reducer;
