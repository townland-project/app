import { TEvent } from ".."

export class CEvent<T> {
    private callback: Callback = {}
    private stack: Stack = {}

    constructor() {
        this._listen()
    }

    public has(name: string): boolean {
        return name in this.callback
    }

    public isStacked(name: string): boolean {
        return name in this.stack
    }

    /**
     * Listen to an event
     * @param name event name
     * @param callback event callback
     * @returns id of callback
     */
    public on(name: T, callback: CallbackFunction): EventCallbackResult {
        return this._add(name, callback, false)
    }

    /**
     * Listen once to an event
     * @param name event name
     * @param callback event callback
     * @returns id of callback
     */
    public once(name: T, callback: CallbackFunction): EventCallbackResult {
        return this._add(name, callback, true)
    }

    /**
     * Emit to an event
     * @param name event name
     * @param params some optinal params
     */
    public emit(name: T, ...params: any[]): void {
        window.parent.postMessage({ id: 'townland:app', name: name, params: params })
    }

    private _add(name: any, callback: CallbackFunction, once: boolean): EventCallbackResult {
        if (name in this.callback == false)
            this.callback[name] = []

        this.callback[name].push({
            once: once,
            function: callback
        })

        let stack = this._getStackDataParams(name)

        if (stack != undefined)
            this.emit(name, ...stack)

        return {
            remove: () => this._remove(name, this.callback[name].length - 1)
        }
    }

    private _remove(name: string, index: number): void {
        this.callback[name].splice(index, 1)
        if (this.callback[name].length == 0) delete this.callback[name]
    }

    /**
     * Get stored event
     * @param name event name
     */
    private _getStackDataParams(name: string): any[] | undefined {
        let params = this.stack[name]

        // defer delete stack
        setTimeout(() => {
            if (name in this.stack)
                delete this.stack[name]
        }, 0);

        return params
    }

    /**
     * Listen to message from out of iframe
     */
    private _listen(): void {
        window.addEventListener('message', event => {
            let { name, params } = event.data

            if (name in this.callback) {
                this.callback[name].forEach((item: CallbackItem, index: number) => {
                    item.function(...params)
                    if (item.once) this._remove(name, index)
                })
            } else {
                this.stack[name] = params
            }
        })
    }
}

/**
 * Q: Why ?
 * A: Because every part of this SDK need this class
 */
export const Event: CEvent<TEvent> = new CEvent()

// ============= Private Interfaces ============ //

interface Event {
    key: string
    params: any[]
}

interface Stack {
    // event name and events params value
    [name: string]: any[]
}

interface Callback {
    [name: string]: CallbackItem[]
}

interface CallbackItem {
    once: boolean
    function: CallbackFunction
}

interface CallbackFunction {
    (...params: any[]): void
}

interface EventCallbackResult {
    remove: () => void
}