/* var vs let vs const */
function compareVariable() {
    let num1 = 10;
    const num2 = 30;

    num1 = 20; // 먼저 들어간 값을 빼고 해당 값을 넣음
    alert('num2 : ' + num2);
}

/* ID 란에 입력된 값을 팝업창에 띄어주는 함수 */
function popId() {
    let userId = document.getElementById("txt_id").value;
    
    if (!userId) {
        // = document.getElementById("txt_id").value == ""
        alert('아이디를 입력해주세요.');
    } else {
        alert(userId);
    }

}

/* 나만의 함수를 만들고, 버튼을 클릭하면 호출 */
function myFunction() {
    alert('1');
    alert('2');
    alert('3');
}