import { Event, Listen } from "./event";
import { IPhoneStatusTheme, IPhoneTheme } from "../index";

export class CPhone {
    @Listen('phone:theme')
    public Theme!: IPhoneTheme

    @Listen('phone:theme:status')
    public StatusTheme!: IPhoneStatusTheme

    @Listen('phone:vibration')
    public Vibration!: number[]

    @Listen('phone:sound:notification')
    public NotificationSound!: string

    @Listen('phone:sound:ring')
    public RingSound!: string

    @Listen('phone:wallpaper')
    public Wallpaper!: string

    @Listen('phone:brightness')
    public Brightness!: number

    public Vibrate(...pattern: number[]): void {
        Event.emit('phone:vibrate', pattern)
    }
}