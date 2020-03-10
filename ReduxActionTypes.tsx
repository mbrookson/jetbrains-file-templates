export enum $NAME$Action {
    ACTION_FETCH = '$NAME$_ACTION_FETCH',
    ACTION_FETCH_FAILED = '$NAME$_ACTION_FETCH_FAILED',
    ACTION_STORE = '$NAME$_ACTION_STORE',
    ACTION_CLEAR = '$NAME$_ACTION_CLEAR',
}

type Fetch$NAME$Action = {
    type: typeof $NAME$Action.ACTION_FETCH;
};

type FetchFailed$NAME$Action = {
    type: typeof $NAME$Action.ACTION_FETCH_FAILED;
};

type Store$NAME$Action = {
    type: typeof $NAME$Action.ACTION_STORE;
};

type Clear$NAME$Action = {
    type: typeof $NAME$Action.ACTION_CLEAR;
};

export type $NAME$ActionTypes =
    | Fetch$NAME$Action
    | FetchFailed$NAME$Action
    | Store$NAME$Action
    | Clear$NAME$Action;
