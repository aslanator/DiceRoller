export default class Event {
    type: string;
    callback: Function;

    constructor(type: string, callback: Function) {
        this.type = type;
        this.callback = callback;
    }

    call(args: Object) {
        this.callback(args);
    }
}