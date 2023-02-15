import { Component } from '@angular/core';

@Component({
  selector: 'app-khampha',
  templateUrl: './khampha.component.html',
  styleUrls: ['./khampha.component.css']
})
export class KhamphaComponent {
  img=[
    {
      img:"https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250313281452.jpg",
      title:"Phở",
    },
    {
      img:"https://cdn.tgdd.vn/2021/05/CookProduct/Banh-Mi-Bo-Nuong-Sa-(Vietnamese-Beef-Banh-Mi)-6-5-screenshot-1200x676.jpg",
      title:"Bánh mì",
    },
    {
      img:"https://cdn.tgdd.vn/Files/2018/12/16/1138609/cach-lam-bo-bit-tet-don-gian-nhung-ngon-tuyet-cu-meo-202201041019494331.jpg",
      title:"Bít tết",
    },
    {
      img:"https://images.foody.vn/res/g5/45973/prof/s576x330/foody-mobile-21106504_13834312151-202-636421187073256169.jpg",
      title:"Bánh mì ô long",
    },
  ];

  place=[
    {
      img:'https://toidicafe.vn/static/images/place/out-of-nowhere/out-of-nowhere-avatar.jpg?w=60&h=60',
      name:'Out of nowhere',
      info:'5 Ngõ Trạm, hàng Bông, Hoàn Kiếm',
    },
    {
      img:'https://toidicafe.vn/static/images/place/manh-ca-phe/manh-ca-phe-avatar-1648476383423.jpg?w=60&h=60',
      name:'Mành Cà Phê',
      info:'41B Triệu Việt Hương, Hai Bà Trưng',
    },
    {
      img:'https://toidicafe.vn/static/images/place/f29-golden-beef-restaurant/f29-golden-beef-restaurant-avatar.jpg?w=60&h=60',
      name:'F29 Golden Beef Restaurant',
      info:'B7 Giảng Võ, Ba Đình',
    },
  ]
}
