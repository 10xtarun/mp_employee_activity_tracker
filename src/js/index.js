const { ipcRenderer } = require("electron")
const ipc = ipcRenderer

function call() {
    console.log("clicked!!!")
    ipc.send("process-msg", "ping")
}
ipc.on("process-reply", (event, arg) => {
    console.log(arg)
})