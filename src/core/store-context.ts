import React from 'react';
import { ListItem } from '../domain/list-model';

export interface StoreContextProps {
    items?: ListItem[];
    cartItems?: ListItem[];
}

export const StoreContext = React.createContext({} as StoreContextProps);

const { Provider: StoreContextProvider, Consumer: StoreContextConsumer } = StoreContext;

export { StoreContextProvider, StoreContextConsumer };
