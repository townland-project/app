import { App } from '../src';

App.Event.once('app:ready', () => {
    console.log("READY");

    console.log(App.Character);

    App.Notification.Push({
        body: 'Hello World'
    })
})