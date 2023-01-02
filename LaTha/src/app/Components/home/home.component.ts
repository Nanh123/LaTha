import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  khuyenmai=[
    {
      tieude: 'THÔNG TIN HẤP DẪN',
    },
    {
      link:'https://tocotocotea.com/',
      anh:'https://tocotocotea.com/wp-content/uploads/2021/03/image-15.webp',
      p:'Mua ngay',
    },
    {
      link:'https://tocotocotea.com/',
      anh:'https://tocotocotea.com/wp-content/uploads/2021/03/image-15.webp',
      p:'Kỉ niệm 1 năm',
    },
    {
      link:'https://tocotocotea.com/',
      anh:'https://tocotocotea.com/wp-content/uploads/2021/03/image-15.webp',
      p:'Mua 1 tặng 1',
    },
    {
      link:'https://tocotocotea.com/',
      anh:'https://tocotocotea.com/wp-content/uploads/2021/03/image-15.webp',
      p:'Giảm giá 50%',
    },
    {
      link:'https://tocotocotea.com/',
      anh:'https://tocotocotea.com/wp-content/uploads/2021/03/image-15.webp',
      p:'Giảm giá 100%',
    },

  ];
  khampha=[
    {
      tieude:'KHÁM PHÁ',
    },
    {
      anh:'https://i.pinimg.com/564x/8e/1c/fa/8e1cfa3a51ba0c8e06705d99ae7e1215.jpg',
      p:'Short Videos',
    },
    {
      anh:'https://i.pinimg.com/564x/8e/1c/fa/8e1cfa3a51ba0c8e06705d99ae7e1215.jpg',
      p:'Bữa ngon cuối ngày',
    },
    {
      anh:'https://i.pinimg.com/564x/8e/1c/fa/8e1cfa3a51ba0c8e06705d99ae7e1215.jpg',
      p:'Cùng bạn hẹn hò',
    },
    {
      anh:'https://i.pinimg.com/564x/8e/1c/fa/8e1cfa3a51ba0c8e06705d99ae7e1215.jpg',
      p:'Ăn xong đi đâu',
    },
  ];

}
