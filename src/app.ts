import { CCharacter } from "./core/character"
import { CEvent, Event } from "./core/event"

export class CApp {
    public Event: CEvent = Event

    constructor() {}

    get Character(): CCharacter {
        return new CCharacter()
    }
}