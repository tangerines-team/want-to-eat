/**
 * Created by Administrator on 29.06.2014.
 */
function showByType(type, arr) {
    var typeArr = [];
    for (var i = 0; i < arr.length; i++){
        if(arr[i].vegetarian === type) {
            typeArr.push(arr[i]);
        }
    }

    return typeArr;
}

showByType(false, data);