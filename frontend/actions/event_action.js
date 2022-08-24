export * as Event_Util from '../util/event_util'


export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECIEVE_EVENT_ERRORS = 'RECIEVE_EVENT_ERRORS';
export const REMOVE_EVENT_ERRORS = 'REMOVE_EVENT_ERRORS';
export const CLEAR_EVENTS = 'CLEAR_EVENTS';

const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
});



const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
});

const removeEvent = eventId => ({
    type: REMOVE_EVENT,
    eventId
});

export const clearEvents = () => ({
    type: CLEAR_EVENTS
})

const receiveErrors = errors => ({
    type: RECIEVE_EVENT_ERRORS,
    errors
});

export const clearEventErrors = () => ({
    type: REMOVE_EVENT_ERRORS
})

export const fetchEvents = () => dispatch => (
    Event_Util.fetchEvents()
        .then(events => dispatch(receiveEvents(events)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchEvent = eventId => dispatch => (
    Event_Util.fetchEvent(eventId)
        .then(event => dispatch(receiveEvent(event)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const createEvent = event => dispatch => (
    Event_Util.createEvent(event)
        .then(event => dispatch(receiveEvent(event)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const updateEvent = event => dispatch => (
    Event_Util.updateEvent(event)
        .then(event => dispatch(receiveEvent(event)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const deleteEvent = eventId => dispatch => (
    Event_Util.deleteEvent(eventId)
        .then(() => dispatch(removeEvent(eventId)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
);