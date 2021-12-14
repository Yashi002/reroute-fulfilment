import { OrderService } from "@/services/OrderService";
import { ActionTree } from 'vuex'
import RootState from '@/store/RootState'
import OrdersState from './OrdersState'
import * as types from './mutation-types'
import { hasError , showToast } from "@/utils";
import { translate } from "@/i18n";
import emitter from '@/event-bus'

const actions: ActionTree<OrdersState , RootState> ={
  async getOrders ({ commit , state}, payload) {
    // Show loader only when new query and not the infinite scroll
    if (payload.viewIndex === 0) emitter.emit("presentLoader");
    let resp;
    const obj = {
        "sortBy": payload.sortBy,
        "sortOrder": payload.sortOrder,
        "viewSize": payload.viewSize,
        "viewIndex": payload.viewIndex,
        "facilityId": payload.facilityId
    };
    try {
        resp = await OrderService.getOrders(obj)
        if(resp.status === 200 && resp.data.count > 0 && !hasError(resp)) {
            let orders = resp.data.docs ;
            const ordersCount = resp.data.count ;
            if(payload.viewIndex && payload.viewIndex > 0) orders = state.orders.concat(orders)
            commit(types.OPEN_ORDERS_INITIAL, {orders: orders , ordersCount: ordersCount})
        }else{
            showToast(translate("Orders Not Found"))
        }
        if(payload.viewIndex === 0) emitter.emit("dismissLoader");
    }   catch(err){
        console.log(err)
        showToast(translate("Something went wrong"))
    }
    return resp;
  },
  async getDetails ({ state }) {
    console.log(types.OPEN_ORDERS_INITIAL)
  },
}

export default actions;