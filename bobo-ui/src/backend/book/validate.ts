import {Result} from "../../types/Result";
import Book, {NewBook, RequiredBookFields} from "../../types/Book";

export const clean = (b: Book) => {
    const {id, updatedAt, ...rest} = b;
    return rest;
};

interface ValidFields {
    [field: string]: boolean
}

export const validate = (b: NewBook): Result<NewBook, ValidFields> => {
    const message = validateBook(b)
    if (!isValid(message)) return {ok: false, message}
    return  {ok: true, value: b};
};

const validateBook = (b: NewBook): ValidFields => {
    return RequiredBookFields.reduce((obj: ValidFields, e: string) => {
        obj[e] = hasField(b, e);
        return obj;
    }, {});
};

type KeyableNewBook = NewBook & {[key: string]: string | number | string[]};

const hasField = (b: KeyableNewBook, field: string): boolean => {
    const value = b[field];
    let fieldExists = b.hasOwnProperty(field) && !!(value);
    if(isStringArray(value)) fieldExists = fieldExists && containsValues(value)
    return fieldExists
};

const containsValues = (v: string[] | string | number): boolean => {
    return typeof v === "object" && v.length > 0
}

const isValid = (f: ValidFields): boolean => {
    return Object.values(f).every((b) => b)
};

const isStringArray = (v: string[] | string | number): v is string[] => {
    return typeof v === "object";
}
