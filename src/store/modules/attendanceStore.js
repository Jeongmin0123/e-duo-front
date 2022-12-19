// // import router from "@/router";
// import { 
//     getloginInstance
// } from "@/api/index"
// const api = getloginInstance();

// const attendanceStore = {
//     namespaced: true,
//     state : {
//         lectures:[],
//     },
//     getters : {},
//     mutations : {
//         SET_LECTURES: (state, lectures) => {
//             state.lectures = lectures;
//         }
//     },
//     actions : {
//         async getLecture({ commit}, courseId) { 
//             const response = await api.get('/api/lecture')
//         }
//     }
// }

// export default attendanceStore;