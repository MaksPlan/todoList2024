import { configureStore, createSlice, isAction, PayloadAction } from "@reduxjs/toolkit";
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
        updateCard: (state, action: PayloadAction<IData>) => {
            state.cardList.forEach((card, i) => {
             if   (card.id == action.payload.id ) {
                 state.cardList[i] =  action.payload
             }
            })
            state.cardList 
        },
        addFetchData: (state, action: PayloadAction<IData[]>) => {
                state.cardList = action.payload
        },
        searchData: (state, action: PayloadAction<IData[]>) => {
            state.cardList = action.payload.length > 0 ? action.payload : state.cardList
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
export const { addToList, deleteFromList, addFetchData, updateCard, searchData } = cardListSlice.actions

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store