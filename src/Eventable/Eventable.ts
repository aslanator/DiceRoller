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

    dispatch(type: string, args: Object) {
        const eventsOfThisType = this.events.get(type);
        if(typeof eventsOfThisType !== 'undefined'){
            for(const event of eventsOfThisType) {
                event.call(args);
            }
        }
    }
}