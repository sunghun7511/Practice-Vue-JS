<template>
    <div>
        <div v-if="currentGame === 'rock-scissors-paper'">
            <rock-scissors-paper></rock-scissors-paper>
        </div>
        <div v-else-if="currentGame === 'lotto-generator'">
            <lotto-generator></lotto-generator>
        </div>
        <div v-else-if="currentGame === 'mine-sweeper'">
            <mine-sweeper></mine-sweeper>
        </div>
        <div v-else>
            일치하는 게임이 없습니다.
        </div>
    </div>
</template>

<script>
    import RockScissorsPaper from "../05_가위바위보/RockScissorsPaper";
    import LottoGenerator from "../06_로또/LottoGenerator";
    import MineSweeper from "../08_지뢰찾기/MineSweeper";

    export default {
        components: {
            RockScissorsPaper,
            LottoGenerator,
            MineSweeper
        },
        mounted() {

        },
        computed: {
            currentGame() {
                return this.$route.params.name;
            }
        }
    }
</script>