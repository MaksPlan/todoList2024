import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../mock/data";
import { useDispatch } from "react-redux";

type TCardListState = { cardList: IData[] }



const initialState: TCardListState = {
    cardList: [],
};

const cardListSlice = createSlice({
    name: 'cardList',
    initialState,
    reducer: {
        addToList: (state, action: PayloadAction<IData>) => {
            state.cardList = [...state.cardList, action.payload]
        },
        deleteFromList: (state, action: PayloadAction<IData>) => {
            state.cardList.forEach(
                (card) => {
                    if (card.id == !action.payload.id) {
                        state.cardList.push(card)
                    }

                }
            )
            /*Пробегаем по циклу и пушим в массив все обьекты подхоядие по усдловию 
            далее делаем из масиива коллекцию уникальных значений и разворачсиваем ее в наш стейт*/
            let localState = new Set(state.cardList);
            state.cardList = [...localState]

        }
    }
})

const store = configureStore({
    reducer: {
        cardList: cardListSlice.reducer,
    }
});

export const getCardList = (state: RootState) => state.cardList;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store