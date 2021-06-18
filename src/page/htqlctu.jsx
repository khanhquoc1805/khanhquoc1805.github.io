import React, { useState } from 'react'
import '../css/htql.css'

function Htql() {
  return (
    <div className="htql">
        <form action="https://qldt.ctu.edu.vn/htql/sinhvien/dang_nhap.php"
        method="POST">
            <label htmlFor="txtDinhDanh">Mã Số Sinh Viên</label>
            <input type="text" name="txtDinhDanh" id="txtDinhDanh" />
            <label htmlFor="txtMatKhau">Mật Khẩu</label>
            <input type="password" name="txtMatKhau" id="txtMatKhau"/>
            <input type="submit" value="Đăng nhập" />
        </form>
    </div>
  )
}

export default Htql;
