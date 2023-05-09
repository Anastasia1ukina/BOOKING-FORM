const floors = Arr(new Array(25), 3, 27);
const meetingRooms = Arr(new Array(10), 1, 10);

function Arr(array, start, end) {
    let length = (end - start + 1);
    
    for (let i = 0; i < length; i++){
        array[i] = {
            value: start, 
            label: start
        }
        start++;
    }

    return array;
}

export const formData = {
    floors,
    meetingRooms,
}