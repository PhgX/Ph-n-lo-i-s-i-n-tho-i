function GetFirstThreeNumber(value) {
    return value.substring(0, 3);
}
function SortPhoneNumbersByCarrier(list, viettel, vinaphone, mobiphone) {
    let viettelList = [];
    let vinaphoneList = [];
    let mobiphoneList = [];
    for (let phone of list) {
        let checkNumber = GetFirstThreeNumber(phone);
        for (let value of viettel) {
            if (value == checkNumber) {
                viettelList.push(phone);
            }
        }
        for (let value of vinaphone) {
            if (value == checkNumber) {
                vinaphoneList.push(phone);
            }
        }
        for (let value of mobiphone) {
            if (value == checkNumber) {
                mobiphoneList.push(phone);
            }
        }
    }
    return console.log('Danh sách số thuộc nhà mạng Viettel: ' + viettelList +
        'Danh sách số thuộc nhà mạng Vinaphone: ' + vinaphoneList +
        'Danh sách số thuộc nhà mạng Mobiphone: ' + mobiphoneList);
}
const Viettel = ['086', '096', '097', '098', '039', '038', '037', '036', '034', '033', '032'];
const Vinaphone = ['091', '094', '088', '083', '084', '085', '081', '082'];
const Mobiphone = ['070', '079', '077', '076', '078', '089', '090', '093'];
const phoneList = ['0914643536', '096635677', '0983465325', '0836654366', '08532456236', '09023452626', '0332334626', '03632462272'];
SortPhoneNumbersByCarrier(phoneList, Viettel, Vinaphone, Mobiphone);
//# sourceMappingURL=main.js.map