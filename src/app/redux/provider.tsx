"use client"
import { Provider } from "react-redux";
import store from"../redux/store";
import {  ReactNode } from "react";
interface ProviderProps{
    children:ReactNode;
}
const Prvider:React.FC<ProviderProps>=({children})=>{
    return <Provider store={store}>{children}</Provider>;
};
export default Prvider;
