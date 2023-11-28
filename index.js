//Tính tiền lương
document.getElementById('tongLuong').onclick = function(){
    // var soGioLam = document.getElementById('gioLam').value*1
    const soGioLam = 100000
    var soNgayLam = document.getElementById('ngayLam').value*1
    console.log(soNgayLam)
    var tinhLuong = 0;
    tinhLuong = soGioLam * soNgayLam
    document.getElementById('ketQua1').innerHTML= tinhLuong
}


//Tính trung bình 5 số

document.getElementById('tinhTrungBinh').onclick=function(){
    var no1 = document.getElementById('no1').value*1
    var no2 = document.getElementById('no2').value*1
    var no3 = document.getElementById('no3').value*1
    var no4 = document.getElementById('no5').value*1
    var no5 = document.getElementById('no5').value*1
    var tTB = 0;
    tTB= (no1+no2+no3+no4+no5)/5
    console.log(tTB)
    document.getElementById('ketQua2').innerHTML=tTB
}

//Quy đổi tiền USD
document.getElementById('quyDoiTien').onclick=function(){
    var doiTien = document.getElementById('doiTien').value*1
    var quyDoiTien = doiTien * 23500
    console.log(quyDoiTien)
    document.getElementById('ketQua3').innerHTML = quyDoiTien.toLocaleString('it-IT', {
                style: 'currency',
                currency: 'VND',})
}

// Tính diện tích, chu vi hình chữ nhật
document.getElementById('tinhToan').onclick=function(){
    var chieuDai = document.getElementById('chieuDai').value*1
    var chieuRong = document.getElementById('chieuRong').value*1
    var dienTich = chieuDai * chieuRong
    var chuVi = (chieuDai + chieuRong)*2
    console.log(dienTich)
    console.log(chuVi)
    document.getElementById('ketQua4').innerHTML = `Diện tích là: ${dienTich}; Chu vi là: ${chuVi}`
}

// Tính tổng 2 ký số
document.getElementById('tinhTong').onclick=function(){
    var soNhap = document.getElementById('soNhap').value*1
    soNhap = Math.floor(soNhap % 10) + Math.floor(soNhap /10)
    console.log(soNhap)
    document.getElementById('ketQua5').innerHTML=soNhap
}
