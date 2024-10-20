function toggleColorOptions() {
    var colorOptions = document.getElementById('colorOptions');
    if (colorOptions.style.display === 'none') {
        colorOptions.style.display = 'block';
    } else {
        colorOptions.style.display = 'none';
    }
}

function changeTitleColor(color) {
    document.getElementById('formTitle').style.color = color;
}

function validateForm() {
    var ho = document.getElementById('ho').value;
    var ten = document.getElementById('ten').value;
    var phone = document.getElementById('phone').value;
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    
    if (ho === "") {
        alert("Thiếu cái Họ rồiiii -_-!!!!");
        return false;
    }
    if (ten === "") {
        alert("Tên bạn là gì????");
        return false;
    }
    if (phone === "" || !/^\d{10}$/.test(phone)) {
        alert("Đưa tôi cái số điện thoạiiii!!");
        return false;
    }
    if (day === "" || month === "" || year === "") {
        alert("Ê sinh nhật khi nào vậy? sinh năm bao nhiêu??");
        return false;
    }
    
    alert("Ngon!! Đã lưu thông tin hehe");
    return true;
}