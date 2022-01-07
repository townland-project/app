import { ICharacter } from '@townland-project/interfaces'
import { TEvent } from "./interface"
import { CEvent, Event, Listen } from "./core/event"
import { CNotification } from "./core/notification"
import { CPhone } from "./core/phone"

export class CApp {
    private _Notification: CNotification = new CNotification()
    private _Phone: CPhone = new CPhone()

    @Listen('character')
    public Character!: ICharacter;

    get Event(): CEvent<TEvent> {
        return Event
    }

    get Notification(): CNotification {
        return this._Notification
    }

    get Phone(): CPhone {
        return this._Phone
    }
}