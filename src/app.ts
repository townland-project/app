import { TEvent } from "./interface"
import { CCharacter } from "./core/character"
import { CEvent, Event } from "./core/event"

import "./core/background.event"

export class CApp {
    public Event: CEvent<TEvent> = Event

    constructor() { }

    get Character(): CCharacter {
        return new CCharacter()
    }
}