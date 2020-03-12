const findObj = (arr, toFindId) => {
    let obj = arr.find((a) => a.id === toFindId)
    return obj
}

export default findObj