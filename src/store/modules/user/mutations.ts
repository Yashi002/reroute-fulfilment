import { MutationTree } from 'vuex'
import UserState from './UserState'
import * as types from './mutation-types'

const mutations: MutationTree <UserState> = {
    [types.USER_TOKEN_CHANGED] (state, payload) {
        state.token = payload.newToken
    },
    [types.USER_END_SESSION] (state) {
      state.token = ''
      state.current = null
      state.currentFacility = {}
    },
    [types.USER_INFO_UPDATED] (state, payload) {
        state.current = payload
    },
    [types.USER_CURRENT_FACILITY_UPDATED] (state, payload) {
        state.currentFacility = payload;
    },
    [types.USER_SHIPMENT_DETAILS] (state, payload) {
      state.shipmentAddress = payload;
    }
}   
export default mutations;