<template>
    <v-form ref="form" @submit.prevent="signUp">
        <v-container>
            <!-- <v-btn
                class="ma-1"
                outlined
                color="indigo"
                @click="anyAssignment"
            >전원 미제출</v-btn>
            <v-btn
                class="ma-1"
                outlined
                color="indigo"
                @click="allAssignment"
            >전원 제출</v-btn> -->
            <v-virtual-scroll
                :items="studentsCopy"
                :item-height="80"
                height="300"
                width="auto"
            > 
                <template v-slot="{ item }">
                <v-list-item @click="handleClick(item)">
                    <v-list-item-content>
                        <v-list-item-title>{{item.name}}</v-list-item-title>
                        <v-list-item-subtitle>{{item.school}}</v-list-item-subtitle>
                        <v-list-item-subtitle class="moveShowing">{{item.id}}</v-list-item-subtitle>
                    </v-list-item-content>
                    <!-- <v-list-item-content>
                        <v-list-item-subtitle>{{item.school}}</v-list-item-subtitle>
                    </v-list-item-content> 
                    <v-list-item-content>
                        <v-list-item-subtitle class="moveShowing">{{item.id}}</v-list-item-subtitle>
                    </v-list-item-content> -->
                    
                    <v-list-item-action>
                        <v-switch
                            v-model="submitter"
                            color="primary"
                            :label= "item.assignment==1?'제출함':'미제출'"
                            :value="item"
                            @click="submitEvent(item)"
                            dense
                        ></v-switch>
                    </v-list-item-action>
                </v-list-item>
                </template>
            </v-virtual-scroll>
            <div class="text-center">
                <v-btn
                    class="ma-1"
                    outlined
                    color="indigo"
                    plain
                    @click="anyAssignment"
                >전원 미제출</v-btn>
                <v-btn
                    class="ma-1"
                    outlined
                    color="indigo"
                    plain
                    @click="allAssignment"
                >전원 제출</v-btn>
                <v-btn 
                    :loading="loading"
                    class="ma-1"
                    outlined
                    color="indigo" 
                    @click="saveAssignment"
                >저장하기</v-btn>
            </div>
        </v-container>
    </v-form>
</template>

<script>
export default {
    props: {
        students: Array,
    },
    created() {
        this.students.forEach((student)=>{
            this.studentsCopy.push(Object.assign({}, student));
            if(student.assignment==1){
                this.submitter.push(student);
            }
        })
    },
    watch: {
        studentsCopy: function(){
            console.log(this.studentsCopy);
        },
        // submitter: function(){
        //     // console.log(this.submitter);
        //     // this.students.forEach((student)=>{
        //     //     student.assignment = 0;
        //     // })
        //     // this.submitter.forEach((submit)=>{
        //     //     if(student.includes())
                
        //     // })
        //     // this.submitter.forEach((submit)=>{
        //     //     var student = this.students.find(submit);
        //     //     student.assignment = 1;
        //     // })
        // }
    },
    data() {
        return {
            studentsCopy:[],
            submitter:[],
            switch1: '제출',
            switch2: '미제출',
            loading: false,
        }
    },
    methods: {
        handleClick(item){
            console.log(item);
        },
        anyAssignment(){
            this.studentsCopy.forEach((item)=>{
                item.assignment = 0;
            })
            this.submitter = [];
        },
        allAssignment(){
            this.studentsCopy.forEach((item)=>{
                item.assignment = 1;
            })
            this.submitter = this.studentsCopy;
        },
        submitEvent(item){
            if(item.assignment==1){
                item.assignment = 0;
            }else{
                item.assignment = 1;
            }
        },
        async saveAssignment(){
            this.loading = true;
            await new Promise(resolve => setTimeout(resolve, 3000));
            this.loading = false;
        }
    },
}
</script>

<style>
    .v-input--selection-controls__ripple{
        display: none;
    }
    
    .moveShowing:hover {
        overflow: visible;
        white-space: normal;
        height: auto;
    }
</style>