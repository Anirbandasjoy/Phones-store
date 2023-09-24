export const getPhones = () => {
    const savePhones = localStorage.getItem("phones");
    if (savePhones) {
        return JSON.parse(savePhones)
    }
    return []
};

export const storedPhones = (id) => {
    const stored = getPhones();
    const exsist = stored.find((phoneId) => phoneId === id);
    if (exsist) {
        return "Already added Phone"
    }
    else {
        stored.push(id);
        localStorage.setItem("phones", JSON.stringify(stored));

    }
    return undefined
}