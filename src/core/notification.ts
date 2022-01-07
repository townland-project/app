import { Event } from './event'
import { INotificationOption } from "../interface"

export class CNotification {
    public Push(option: INotificationOption): void {
        Event.emit('notification:push', option)
    }
}