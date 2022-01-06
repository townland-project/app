import { App } from '../src';

App.Event.once('app:ready', () => {
    console.log("READY");
})

App.Character.get().then(console.log)