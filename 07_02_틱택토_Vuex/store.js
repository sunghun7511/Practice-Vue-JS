import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";
export const RESET_GAME = "RESET_GAME";
export const CLEAR_WINNER = "CLEAR_WINNER";

export default new Vuex.Store({
    state: {
        tableData: [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ],
        turn: 'O',
        winner: '',
    },
    getters: {},
    mutations: {
        [SET_WINNER](state, winner) {
            state.winner = winner;
        },
        [CLICK_CELL](state, {row, cell}) {
            Vue.set(state.tableData[row], cell, state.turn);
        },
        [CHANGE_TURN](state) {
            state.turn = state.turn === "O" ? "X" : "O";
        },
        [RESET_GAME](state) {
            state.turn = "O";
            state.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
        },
        [CLEAR_WINNER](state) {
            state.winner = "";
        }
    },
    actions: {}
});