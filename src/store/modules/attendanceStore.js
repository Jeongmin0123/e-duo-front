// import { listAttendances } from "@/api/attendance";
// const api = listAttendances();

const attendanceStore = {
    namespaced: true,
    state : {
        attendances: [],
    },
    getters: {
        ATTENDANCESGETTER(state) { 
            return state.attendances;
        }
    },
    mutations : {
        SET_ATTENDANCE: (state, lectures) => {
            // state.lectures = lectures;
            console.log(state);
            console.log(lectures);
        }
    },
    actions: {
        getAttendance(context) { 
            context.commit('SET_ATTENDANCE');
        }
        // async getLecture({ commit}, courseId) { 
        //     const response = await api.get(`/api/lecture/${courseId}`)
        //     .catch((error) => {
        //         console.log(error);
        //     });
        //     let lecture = {};
        //     lecture.attendanceId = response.data.attendanceId;
        //     lecture.lectureId = response.data.lectureId;
        //     lecture.studentId = response.data.studentId;
        //     lecture.studentName = response.data.studentName;
        //     lecture.checkIn = response.data.checkIn;
        //     lecture.schoolName = response.data.schoolName;
        //     lecture.assignment = response.data.assignment;
        //     lecture.doneDate = response.data.doneDate;
        //     lecture.testScore = response.data.testScore;
        //     lecture.phone = response.data.phone;
        //     lecture.parentPhone = response.data.parentPhone;
        //     lecture.parent = response.data.parent;
        //     commit("SET_LECTURES", lecture);
        // }
    }
}

export default attendanceStore;