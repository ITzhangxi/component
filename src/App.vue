<template>
  <div id="app">
    <button @click="btn1">切换到第一个table</button>
    <br>
    <button  @click="btn2">切换到第2个table</button>
    <!--只需要写一个组件component(这是固定写法)，同通过:is属性，将判断该组件显示哪个子组件，这里的子组件有两个，一个是tableOne和tableTwo组件-->
    <!--is的值，必须是变量，变量的值是哪个组件名是哪个，这个组件就是显示哪个-->
    <component :is="zujian">
      <!--第二步：这个使用solt值与组件中slot的name值是一一对应的，一定要注意，这里的ul和ol展示的位置不是他们书写的位置，而是组件中对应的slot位置决定的-->
      <ul slot="ul-slot">
        <li>一</li>
        <li>二</li>
        <li>三</li>
      </ul>
      <ol slot="ol-slot">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ol>
    </component>
  </div>
</template>
<script>
  //      第1步：在component文件中写好组件
    //    第2步：将被切换出来的组件引进来
    import tableOne from './components/tableOne.vue'
    import tableTwo from './components/tableTwo.vue'
export default {
  name: 'app',
  data () {
    return {
//        申明一个数据，用作判断component组件显示哪个子组件
        zujian:tableOne   // 这里我默认是第一个tableOne组件
    }
  },
    methods:{
//      点击将第一个组件名字赋值给zujian
        btn1(){
            this.zujian = tableOne
        },
//      点击将第二个组件名字赋值给zujian
        btn2(){
            this.zujian = tableTwo
        },
    },
//    第3步这里是调用组件
    components:{
//      只要写在第2步引用的名字
        tableOne,
        tableTwo
    }
}
</script>

<style>

</style>
