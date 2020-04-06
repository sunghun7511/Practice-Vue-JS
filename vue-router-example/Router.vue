<template>
    <div>
        <div>
            <router-link to="/game">게임 매쳐</router-link>
            <router-link to="/game/rock-scissors-paper">가위바위보</router-link>
            <router-link to="/game/lotto-generator">로또</router-link>
            <router-link to="/game/mine-sweeper">지뢰찾기</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import router from './routes';

    export default {
        router
    };
</script>

<style>
    table {
        border-collapse: collapse;
    }

    td {
        border: 1px solid black;
        width: 40px;
        height: 40px;
        text-align: center;
    }
</style>