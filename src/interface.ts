export type TEvent = TEventApp | TEventCharacter | TEventNotification | TEventPhone

export type TEventApp = 'app:ready' | 'app:close' | 'app:back'

export type TEventCharacter = 'character:change' | 'character' | 'character:set'

export type TEventNotification = 'notification:push'

export type TEventPhone =
    'phone:theme:status' | 'phone:theme:status:set' | 'phone:theme' | 'phone:theme:set' |
    'phone:vibrate' | 'phone:vibration' | 'phone:vibration:set' |
    'phone:sound:mode' | 'phone:sound:mode:set' | 'phone:sound:ring' | 'phone:sound:ring:set' | 'phone:sound:notification' | 'phone:sound:notification:set' |
    'phone:wallpaper' | 'phone:wallpaper:set' | 'phone:brightness' | 'phone:brightness:set'


export type TPhoneSoundMode = 'sound' | 'vibrate' | 'mute'
export interface INotificationOption {
    body: string
}

export interface IPhoneTheme {
    border: string
    shadow: string
}

export interface IPhoneStatusTheme {
    background?: string
    content?: string
    blur?: number
}