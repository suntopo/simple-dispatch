/**
 * Created by suntopo on 17-1-10.
 */
'use strict'
export default class Dispatcher {
    constructor() {
        this._namespace = [];
        this._handlers = {};
    }

    when(ns, handler) {
        let namsespace = this._namespace, handlers = this._handlers;
        if(!handlers[ns]) {
            namsespace.push(ns);
            handlers[ns] = handler;
        }
    }

    dispatch(ns) {
        let namsespace = this._namespace, handlers = this._handlers;
        if(namsespace.includes(ns)) {
            let handler = handlers[ns];
            return handler.call(this);
        } else {
            return Promise.reject('no specific namespace')
        }
    }
}