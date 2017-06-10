<template>
    <div id="tableOne">
        <!--第一步：用slot为ul列表占一个位置-->
        <slot name="ol-slot"></slot>
        <h2>我是第一个</h2>
        <!--第一步：用slot为ol列表占一个位置-->
        <slot name="ul-slot"></slot>
        <!--注意，这边的name值与第二步组件名中slot值是一一对应的-->
        <!--注意，slot的位置直接决定对应占位的显示位子-->
    </div>
</template>
<script></script>
<style scoped>
    #tableOne{
        color: #fff;
        font-width: 700;
        width: 200px;
        height: 200px;
        background-color: green;
    }
</style>