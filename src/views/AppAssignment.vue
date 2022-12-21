<template>
    <div>
        <v-container style="max-width: 600px" fill-height>
            <v-layout align-center>
                <v-flex xs12>
                    <h2 style="text-align:center">{{courseName}} 과제관리</h2>
                    <v-row>
                        <v-col cols="12">
                            <p class="text-center">오늘의 강의 : 00주차-0 <span  @click="moveToday()"><v-icon color="indigo">mdi-link-variant</v-icon>이동하기</span></p>
                            
                        </v-col>
                    </v-row>
                    <v-card
                        v-for="(lecture, index) in lectures" :key="index"
                        class="mx-auto mb-4"
                        :id="[`index--${index}`]"
                        max-width="600"
                    >
                        <v-card-title>
                            {{lecture.name}}
                        </v-card-title>

                        <v-card-subtitle>
                            <v-icon>mdi-account-remove</v-icon> 미제출 인원수 : {{lectures.length}} 명
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-btn
                                @click="showDetails(lecture)"
                                color="orange lighten-2"
                                text
                            >
                            명단 확인하기
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                icon
                                @click="showDetails(lecture)"
                            >
                            <v-icon>{{ lecture.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                            </v-btn>
                        </v-card-actions>
                        <v-expand-transition>
                            <div v-show="lecture.show">
                            <v-divider></v-divider>
                            <v-card-text>
                                <!-- <student-list :students="students"></student-list> -->
                                <student-list :lectureId="lecture.lectureId"></student-list>
                            </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <div class="add-assignment-button" role="button" @click="addAssignment">+</div>
    </div>
</template>
<script>
import StudentList from '@/components/attendance/StudentList.vue';
// import {mapState, mapActions} from "vuex";

export default {
    name:'AppAssignment',
    components: {
        StudentList,
    },
    created(){
        // this.courseId = this.$route.params.courseId;
        this.courseId = 'KsZ1-teac-9Zw2';
        // this.courseName = this.$route.params.courseName;
        this.courseName = 'Network'
    },
    data() {
        return {
            lecturesHeight:[],
            today: '9',
            show: false,
            switch1: '출석',
            switch2: '결석',
            courseId: '',
            courseName: '',

            lectures:[{name: '1주차-1 : spring Boot', lectureId: '1'}, {name: '1주차-2 : spring Boot', lectureId: '2'}, {name: '2주차-1 : spring Boot', lectureId: '3'},{name: '3주차-1 : spring Boot', lectureId: '4'}, {name: '3주차-2 : spring Boot', lectureId: '5'}, {name: '4주차-1 : spring Boot', lectureId: '6'},{name: '5주차-1 : spring Boot', lectureId: '7'}, {name: '5주차-2 : spring Boot', lectureId: '8'}, {name: '6주차-1 : spring Boot', lectureId: '9'},{name: '7주차-1 : spring Boot', lectureId: '10'}],
            // students:[{studentName: '장정민', schoolName: '사피고등학교', id: 'jang@test.com', assignment:'1'}, {studentName: '이다운', schoolName: '강남고등학교', id: 'dawoon12312345678@test.com', assignment:'1'}, {studentName: '황준현', schoolName: '사피고등학교', id: 'Hwang@test.com', assignment:'0'}, {studentName: '이영차', schoolName: '사피고등학교', id: 'cha@test.com', assignment:'0'}, {studentName: '이호준', schoolName: '사피고등학교', id: 'ho@test.com', assignment:'0'}, {studentName: '서지상', schoolName: '사피고등학교', id: 'Seo@test.com', assignment:'1'}, {studentName: '정우진', schoolName: '사피고등학교', id: 'Woo@test.com', assignment:'1'}, {studentName: '박지현', schoolName: '사피고등학교', id: 'Park@test.com', assignment:'0'}, {studentName: '안태현', schoolName: '사피고등학교', id: 'Ahn@test.com', assignment:'1'},],
            students:[],
            books: ['History', 'Fiction', 'Philosophy'],
            codes: ['C#', 'JavaScript', 'PHP'],
            submitter: [],
        }
    },
    computed: {
        // ...mapState("attendanceStore", ["attendances"])
    },
    methods: {
        // ...mapActions("attendanceStore", ["getAttendance"]),
        showDetails(item){
            console.log(item.lectureId);
            item.show = !item.show;
            this.$forceUpdate();
        },
        handleClick(item){
            console.log(item);
            console.log(this.submitter);
            
        },
        addAssignment(item){
            alert(item);
        },
        moveToday(){
            window.scrollTo({top:this.lecturesHeight[this.today], behavior:'smooth'})
        }
    },
    mounted() {
        for (let i = 0; i < this.lectures.length; i++) {
            var temp = 'index--' + i;
            var Elem = document.getElementById(temp).offsetTop;
            this.lecturesHeight.push(Elem);
        }
        console.log(this.lecturesHeight);
    },
}
</script>

<style>
.add-assignment-button{
    user-select: none;
    transition: opacity 700ms ease 0s;
    color: 700ms ease 0s;
    cursor: pointer;
    position: fixed;
    align-items: center;
    display: flex;
    justify-content: center;
    background: white;
    bottom: 26px;
    right: 26px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;
    transform: translateX(0px) translateZ(0px);
    z-index: 100;
    /* position: sticky;
    top: 0;
    padding: 1rem; */
}   

.add-assignment-button:hover{
    background: rgb(239, 239, 238);
}

::-webkit-scrollbar {
    width: 15px;
}

::-webkit-scrollbar-track {
    background: #e6e6e6;
    border-left: 1px solid #dadada;
}

::-webkit-scrollbar-thumb {
    background: #b0b0b0;
    border: solid 3px #e6e6e6;
    border-radius: 7px;
}

::-webkit-scrollbar-thumb:hover {
    background: black;
}

.v-list-item__content{
    padding: 0;
}

.v-input--selection-controls {
    margin-top: 0;
    padding-top: 0;
} 

.v-input__slot {
    margin-bottom: 0;
}
.v-messages {
    display: none;
}

.sticky {
    position: sticky;
    top: 0;
    background-color: lightcoral;
    padding: 1rem;
}

span:hover{
    background-color: rgb(239, 239, 238);
}

</style>