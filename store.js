export const createStore = (reducer, initialState) => {
    const state = initialState;
    const callbacks = [];

    const getState = () => state;

    const dispatch = action => {
        state = reducer(state, action);
        callbacks.map(cb => cb());
    }

    const subscribe = callback => {
        callbacks.push(callback);

        return () => callbacks.filter(cb => cb !== callback);
    }

    dispatch({});

    return { getState, dispatch, subscribe}
}
