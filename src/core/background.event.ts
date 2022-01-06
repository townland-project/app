import { Event } from "./event";

Event.on('app:back', () => {
    if (window.history.length == 0) Event.emit('app:close')
    else window.history.back()
})
