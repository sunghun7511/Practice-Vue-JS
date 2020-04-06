import Vue from 'vue';
import VueRouter from 'vue-router';
import RockScissorsPaper from "../05_가위바위보/RockScissorsPaper";
import LottoGenerator from "../06_로또/LottoGenerator";
import MineSweeper from "../08_지뢰찾기/MineSweeper";
import GameMatcher from "./GameMatcher"

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {path: '/rock-scissors-paper', component: RockScissorsPaper},
        {path: '/lotto', component: LottoGenerator},
        {path: '/mine-sweeper', component: MineSweeper},
        {path: '/game/:name', component: GameMatcher}
    ]
});