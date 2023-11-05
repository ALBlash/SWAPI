// gets the title of the different models but one of them is called name
// so this function is going to "Help" us
export function getModelName(model) {
    if ('title' in model)
        return model.title;
    return model.name;
}
