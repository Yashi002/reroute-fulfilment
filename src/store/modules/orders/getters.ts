import { GetterTree } from "vuex";
import OrdersState from "./OrdersState"
import RootState from "../../RootState";

const getters: GetterTree<OrdersState , RootState> = {
    getOrders: (state) => {
        return state.orders.list;
    },
    getCurrent (state) {
        return state.current;
    }
}

export default getters;