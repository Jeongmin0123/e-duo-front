import axios from "@/api/util/httpUtil";

function listAttendances(payload, success, fail, lectureId) { 
    const config = {
        headers: {
            "Content-Type": "text/plain",
            "Authorization": `Bearer ${payload.accessToken}`
        },
        params: {
            role: payload.role,
        },
    };
    axios.get("/api/attendance/" + lectureId, config)
        .then(success)
        .catch(fail);
}

export { listAttendances }