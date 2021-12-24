import { GetterTree } from "vuex";
import OrderState from "./OrderState"
import RootState from "../../RootState";

const getters: GetterTree<OrderState , RootState> = {
  getOrder: (state) => {
    return state.order;
  }
}

export default getters;