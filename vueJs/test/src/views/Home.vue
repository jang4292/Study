<template>
    <div>
         <h1>Welcome to {{title}}</h1>
         <input type="text" v-model="title"/>
         <button type="button" @click="reset">reset</button>

         <select class="form-control" v-model ="region" @change="changeRegion">
             <option :key = "index" :value="data.v" v-for="(data, index) in options"> {{data.t}}</option>
         </select> 

         <table class="table table-bordered" v-if="tableShow">
             <tr :key = "index" v-for="(data, index) in options">
                 <td>{{data.v}}</td>
                 <td>{{data.t}}</td>
             </tr>
         </table>
         <table class="table table-bordered" v-show="tableShow">
             <tr :key = "index" v-for="(data, index) in options">
                 <td>{{data.v}}</td>
                 <td>{{data.t}}</td>
             </tr>
         </table>
    </div>   
</template>
<script>
export default {
    data() { 
        return { 
            title:"제이의개발테스트",
            options:[
                {v:"S", t:"Seoul"},
                {v:"J", t:"Jeju"},
                {v:"B", t:"Busan"}
            ],
            region:"J",
            tableShow:true
        }
    },
    watch:{
        title() { 
            console.log(this.title);
        }
    },
    methods:{
        reset() {
            this.title = "";
        },
        changeRegion(){
            console.log(this.region);
        }
    }
}
</script>