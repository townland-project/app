import { App } from '../src';
import { TEventApp } from '../src/interface';

App.Event.once<TEventApp>('app:ready', () => {
    console.log("READY");
})

App.Character.get().then(console.log)