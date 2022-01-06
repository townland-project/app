export type TEvent = TEventApp | TEventCharacter

export type TEventApp = 'app:ready' | 'app:close' | 'app:back'

export type TEventCharacter = 'character:change' | 'character:get' | 'character:assets:get' | 'character:set'