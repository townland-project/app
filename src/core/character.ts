import { ICharacter } from '@townland-project/interfaces'
import { Event } from './event'


export class CCharacter {
    constructor() { }

    public change(callback: ChangeCallback): void {
        Event.on('character:change', data => callback(data))
    }

    public get(): Promise<ICharacter> {
        return new Promise((resolve) => {
            Event.once('character:get', data => resolve(data))

            Event.emit('character:get')
        })
    }

    public set(character: ICharacter): void {
        Event.emit('character:set', character)
    }

    public getAssetsUrl(): Promise<string[]> {
       return new Promise((resolve)=> {
        Event.once('character:assets:get', data => resolve(data))

        Event.emit('character:assets:get')
       })
    }
}

// =============== Private Interfaces  ================ //

interface ChangeCallback {
    (character: ICharacter): void
}