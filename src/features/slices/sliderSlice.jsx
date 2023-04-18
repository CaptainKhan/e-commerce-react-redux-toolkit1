import { createSlice, configureStore } from '@reduxjs/toolkit'
import { sliderData } from '../../assets/data/dummyData'

export const sliderSlice = createSlice({
    name: 'slider',
    initialState: {
        value: 0,
        length: sliderData.length - 1,
    },

    reducers: {
        nextSlide(state, action) {
            console.log('action', action.payload)
            console.log('state', state)
            state.value = action.payload > state.length ? 0 : action.payload;

        },
        prevSlide(state, action) {
            console.log('action', action)
            console.log('state', state)
            state.value = action.payload < 0 ? state.length : action.payload;
        },
        dotSlide(state, action) {
         const slide = action.payload;
         console.log('dot', slide)
         state.value = slide 
        },
    }
})

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;