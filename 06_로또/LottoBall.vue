<template>
    <div class="ball" :style="styleObject">
        <div class="ball-inner">
            {{ number }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LottoBall',
        props: {
            number: Number,
        },
        computed: {
            styleObject() {
                let background;

                if (this.number <= 10)  {
                    background = 'red';
                } else if (this.number <=20) {
                    background = 'orange';
                } else if (this.number <= 30) {
                    background = 'yellow';
                } else if (this.number <= 40) {
                    background = 'blue';
                } else {
                    background = 'green';
                }

                return {
                    background,
                };
            }
        }
    }
</script>

<style>
    .ball {
        display: inline-block;
        border-radius: 20px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        text-align: center;
        margin-right: 20px;
        position: relative;
    }
    .ball-inner {
        display: inline-block;
        background: white;
        border-radius: 20px;
        width: 28px;
        height: 28px;
        line-height: 28px;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
    }
</style>