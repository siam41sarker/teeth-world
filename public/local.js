let getDataFromLs = () => {
    const getStrData = localStorage.getItem("Appointment");
    return (getStrData ? JSON.parse(getStrData) : [])
}
let addToLs = (formInfo) => {
    const getData = getDataFromLs();
    const isExist = getData.some(each=>each.id === formInfo.id && each.date === formInfo.date && each.timeSlot === formInfo.timeSlot);
    if(!isExist)
            {
                getData.push(formInfo);
            }

    saveToLs(getData);
}
let saveToLs = (getArrData) => {
    const strData = JSON.stringify(getArrData);
    localStorage.setItem("Appointment", strData);
};
let deleteFromLs = delInfo => {
    const getFromLs = getDataFromLs();
    const remainingData = getFromLs.filter(eachData => !((eachData.date === delInfo.date) && (eachData.id === delInfo.id) && (eachData.timeSlot === delInfo.timeSlot)));
    saveToLs(remainingData)
}
export { getDataFromLs, addToLs, deleteFromLs };