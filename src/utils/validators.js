export const required = (text) => {
    if (text) return undefined;
    return "The field is required to have a value";
}

export const maxLengthCreator = (length) => {
    return (text) => {
        if (text  && text.length > length) return `The text should be no longer than ${length} symbols`;
        return undefined;
    }
}