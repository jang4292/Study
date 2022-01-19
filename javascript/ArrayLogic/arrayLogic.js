function arrayLogic() {
    const arr = [false, false, false, true, false];
    const fixedArray = arr.reduce((prev, data) => {
        prev.isCheck = prev.isCheck || data;
        prev.array.push(prev.isCheck ? data : !data)
        return prev;
    }, { isCheck: false, array: [] }).array

    console.log(fixedArray);
}

arrayLogic();