export interface ICharacter {
    username: string
    access: TCharacterAccess
    gender: TCharacterGender
    dress: ICharacterDress
}

export interface ICharacterDress {
    body?: string
    hair?: string
    eyes?: string
    mouth?: string
    beard?: string
    tops?: string
    bottoms?: string
    shoes?: string
    accessories?: string
}

export type TCharacterGender = 'male' | 'female'

export type TCharacterAccess = 'vip' | 'admin' | 'member'

export type TEventApp = 'app:ready' | 'app:close'

export type TEventCharacter = 'character:change' | 'character:get' | 'character:assets:get' | 'character:set'