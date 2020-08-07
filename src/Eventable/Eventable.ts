import Event from "./Event";

export default class Eventable {
    events: Map<string, Event[]> = new Map;

    addEventListener(type: string, callback: Function) {
        if(!this.events.has(type))
            this.events.set(type, []);
        const eventsOfThisType = this.events.get(type);
        if(typeof eventsOfThisType !== 'undefined'){
            eventsOfThisType.push(new Event(type, callback));
            this.events.set(type, eventsOfThisType);
        }
    }

    removeEventListener(type: string, callback: Function): void;
    removeEventListener(type: string): void;
    removeEventListener(type: string, callback?: Function): void {
        if(typeof callback !== 'undefined' && this.events.has(type)){
            let eventsOfThisType = this.events.get(type);
            if(typeof eventsOfThisType !== 'undefined'){
                eventsOfThisType = eventsOfThisType.filter(event => event.callback !== callback);
                this.events.set(type, eventsOfThisType);
            }
        }
        else
            this.events.delete(type);
    }

    dispatch(type: string, args: Object) {
        const eventsOfThisType = this.events.get(type);
        if(typeof eventsOfThisType !== 'undefined'){
            for(const event of eventsOfThisType) {
                event.call(args);
            }
        }
    }
}