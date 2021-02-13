export type Result<T, R> = 
    | { ok: true, value: T }
    | { ok: false, message: R }