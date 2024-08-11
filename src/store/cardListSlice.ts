import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../mock/data";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export type TCardListState = { cardList: IData[] | [] }



const initialState: TCardListState = {
    cardList: [],
};

export const cardListSlice = createSlice({
    name: 'cardList',
    initialState,
    reducers: {
        addToList: (state, action: PayloadAction<IData>) => {
            state.cardList = [...state.cardList, action.payload]
        },
        deleteFromList: (state, action: PayloadAction<IData>) => {
            state.cardList = state.cardList.filter(
                (card: IData) => card.id !== action.payload.id
            )
    },
        addFetchData: (state, action: PayloadAction<IData[]>) => {
                state.cardList = action.payload
        }
}
}
)

const store = configureStore({
    reducer: {
        cardList: cardListSlice.reducer,
    }
});



export const getCardList = (state: RootState) => state.cardList.cardList;
export const { addToList, deleteFromList, addFetchData } = cardListSlice.actions

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store