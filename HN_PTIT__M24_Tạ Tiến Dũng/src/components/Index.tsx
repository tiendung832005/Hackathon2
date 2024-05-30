import React,{useState, useEffect} from 'react'
import './style.scss'
import { CiSearch } from "react-icons/ci";
import { FaSearch, FaShoppingCart, FaList, FaRegHeart,FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa';
import './Base.scss'
import img1 from '../img/banner/banner-1.jpg'
import img2 from '../img/banner/banner-2.jpg'
import img3 from '../img/banner/banner-3.jpg'
import img4 from '../img/banner/banner-4.jpg'
import img5 from '../img/banner/banner-5.jpg'
import img6 from '../img/products/ThietBiDienTu/iphone6.jpg'
import img7 from '../img/products/ThietBiDienTu/iphone6plus.jpg'
import img8 from '../img/products/ThietBiDienTu/iphone7.jpg'
import img9 from '../img/products/ThietBiDienTu/iphone7plus.jpg'
import img10 from '../img/products/ThietBiDienTu/iphone8.jpg'
import img11 from '../img/products/ThietBiDienTu/iphone8plus.jpg'
import img12 from '../img/products/ThietBiDienTu/iphonex.jpg'
import img13 from '../img/products/ThietBiDienTu/iphonexr.jpg'
import img14 from '../img/products/ThietBiDienTu/iphonexs.jpg'
import img15 from '../img/products/ThietBiDienTu/iphonexsmax.jpg'
import img16 from '../img/products/ThietBiDienTu/iphone11.jpg'
import img17 from '../img/products/ThietBiDienTu/iphone11pro.jpg'
import img18 from '../img/products/ThietBiDienTu/iphone11promax.jpg'
import img19 from '../img/products/ThietBiDienTu/iphone12.jpg'
import img20 from '../img/products/ThietBiDienTu/iphone12mini.jpg'
import img21 from '../img/products/ThietBiDienTu/iphone12pro.jpg'
import img22 from '../img/products/ThietBiDienTu/iphone12promax.jpg'
import img23 from '../img/products/Sach/HoangTuBe.jpg'
import img24 from '../img/products/Sach/MuonKiepNhanSinh.jpg'
import img25 from '../img/products/Sach/NhaGiaKim.jpg'










export default function Index() {
        const [currentSlide, setCurrentSlide] = useState(0);
        const slides = [img1, img2, img3, img4, img5];
        const nextSlide = () => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        };
        const prevSlide = () => {
          setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
        };
        const handleSlideChange = (newIndex:any) => {
            setCurrentSlide(newIndex);
        };
        const slideInterval = 5000;
        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
            }, slideInterval);
            return () => clearInterval(interval); // Xóa interval khi component unmount
        }, []);
        
  return (
    <div className='html'>
        {/* header */}
        <div className="home_app">
        <header className="header">
            <ul className="header-items">
            <li className="header-item">
                    <a href="" className="header-item-link logo">Rikkei_Shop</a>
                </li>
                <li className="header-item">
                    <input type="search" className='search-bar' placeholder="Nhập để tìm kiếm"/>
                    <button className="search-icon">
                        <i><CiSearch/></i>
                    </button>
                </li>
                <li className="header-item">
                    <a href="" className="header-item-link header-cart">
                    <i><FaShoppingCart /></i>
                        Giỏ hàng
                    </a>
                </li>
                <li className="header-item">
                    <a className="header-item-link header-login">
                        Đăng nhập
                    </a>
                </li>
                <li className="header-item">
                    <a className="header-item-link header-signup">
                        Đăng ký
                    </a>
                </li>
            </ul>
        </header>
        {/* banner */}
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={index}
                        className={index === currentSlide ? 'active' : ''}
                        aria-current={index === currentSlide ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => handleSlideChange(index)}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
                        <img src={slide} className="d-block w-100" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={prevSlide}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={nextSlide}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <br></br>
        {/* body */}
            <div className='container' >
                <div className='grid'>
                    <div className='grid__row'>
                        <div className='grid__column-2'>
                            <nav className='category'>
                                <h3 className='category_heading'>
                                    <i className='category_heading_icon'><FaList /></i>
                                        Danh mục sản phẩm
                                </h3>
                                <ul className='category-list'>
                                <li className="category-item category-item--active">
                                    <a id="all" className="category-item__link">Tất cả sản phẩm</a>
                                </li>    
                                <li className="category-item category-item">
                                    <a id="thietBiDienTu" className="category-item__link">Thiết bị điện tử</a>
                                </li>
                                <li className="category-item">
                                    <a id="sach" className="category-item__link">Sách</a>
                                </li>
                                <li className="category-item">
                                    <a id="doTieuDung" className="category-item__link">Đồ tiêu dùng</a>
                                </li>
                                <li className="category-item">
                                    <a id="thoiTrang" className="category-item__link">Thời trang</a>
                                </li>
                                </ul>
                            </nav>
                        </div>

                        <div className='grid__column-10'>
                            <div className='product'>
                                <div id='product_items' className='grid__row'>
                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img6} alt="" /></div>
                                        <h4 className="product-item_name">Iphone 6</h4>
                                        <div className="product-item_price">29.000.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">30 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand">Apple</span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>


                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img7} alt="" /></div>
                                        <h4 className="product-item_name">Iphone 6 Plus</h4>
                                        <div className="product-item_price">3.000.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">500 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand">Apple</span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>


                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img8} alt="" /></div>
                                        <h4 className="product-item_name">Iphone 7</h4>
                                        <div className="product-item_price">35.000.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">500 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand">Apple</span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img9} alt="" /></div>
                                        <h4 className="product-item_name">Iphone 7 Plus</h4>
                                        <div className="product-item_price">35.000.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">48 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand">Apple</span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img10} alt="" /></div>
                                        <h4 className="product-item_name">Iphone 8</h4>
                                        <div className="product-item_price">35.000.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">48 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand">Apple</span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img11} alt="" /></div>
                                        <h4 className="product-item_name">Iphone 8 Plus</h4>
                                        <div className="product-item_price">35.000.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">48 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand">Apple</span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img12} alt="" /></div>
                                        <h4 className="product-item_name">Iphone X</h4>
                                        <div className="product-item_price">35.000.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">48 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand">Apple</span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img13} alt="" /></div>
                                        <h4 className="product-item_name">Iphone Xr</h4>
                                        <div className="product-item_price">35.000.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">48 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand">Apple</span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img14} alt="" /></div>
                                        <h4 className="product-item_name">Iphone XS</h4>
                                        <div className="product-item_price">35.000.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">48 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand">Apple</span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img15} alt="" /></div>
                                        <h4 className="product-item_name">Iphone XS Max</h4>
                                        <div className="product-item_price">35.000.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">48 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand">Apple</span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img16} alt="" /></div>
                                        <h4 className="product-item_name">Iphone 11</h4>
                                        <div className="product-item_price">35.000.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">48 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand">Apple</span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>
                                
                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img17} alt="" /></div>
                                        <h4 className="product-item_name">Iphone 11 Pro</h4>
                                        <div className="product-item_price">35.000.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">48 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand">Apple</span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img18} alt="" /></div>
                                        <h4 className="product-item_name">Iphone 11 Pro Max</h4>
                                        <div className="product-item_price">35.000.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">48 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand">Apple</span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img19} alt="" /></div>
                                        <h4 className="product-item_name">Iphone 12 Mini</h4>
                                        <div className="product-item_price">35.000.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">48 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand">Apple</span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img20} alt="" /></div>
                                        <h4 className="product-item_name">Iphone 12</h4>
                                        <div className="product-item_price">35.000.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">48 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand">Apple</span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>
                                
                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img21} alt="" /></div>
                                        <h4 className="product-item_name">Iphone 12 Pro</h4>
                                        <div className="product-item_price">35.000.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">48 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand">Apple</span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img22} alt="" /></div>
                                        <h4 className="product-item_name">Iphone 12 Pro Max</h4>
                                        <div className="product-item_price">35.000.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">48 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand">Apple</span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img23} alt="" /></div>
                                        <h4 className="product-item_name">Hoàng Tử Bé</h4>
                                        <div className="product-item_price">53.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">7893 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand"></span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img24} alt="" /></div>
                                        <h4 className="product-item_name">Muôn kiếp nhân sinh</h4>
                                        <div className="product-item_price">109.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">4321 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand"></span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img25} alt="" /></div>
                                        <h4 className="product-item_name">Nhà Giả Kim</h4>
                                        <div className="product-item_price">55.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">3211 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand"></span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img25} alt="" /></div>
                                        <h4 className="product-item_name">Tôi tự học</h4>
                                        <div className="product-item_price">32.900đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">3211 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand"></span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img25} alt="" /></div>
                                        <h4 className="product-item_name">Đắc Nhân Tâm</h4>
                                        <div className="product-item_price">56.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">9872 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand"></span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img25} alt="" /></div>
                                        <h4 className="product-item_name">Mắt biếc</h4>
                                        <div className="product-item_price">77.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">3214 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand"></span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img25} alt="" /></div>
                                        <h4 className="product-item_name">Không Gia Đình</h4>
                                        <div className="product-item_price">75.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">12232 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand"></span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img25} alt="" /></div>
                                        <h4 className="product-item_name">Your Name</h4>
                                        <div className="product-item_price">45.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">4532 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand"></span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img25} alt="" /></div>
                                        <h4 className="product-item_name">Hai Số Phận</h4>
                                        <div className="product-item_price">98.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">1231 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand"></span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="grid__column-2-4">
                                    <a className="product-item" href="#">
                                        <div className="product-item_img" ><img src={img25} alt="" /></div>
                                        <h4 className="product-item_name">Đi tìm lẽ sống</h4>
                                        <div className="product-item_price">62.000đ</div>
                                        <div className="product-item_action">
                                            <span className="product-item_like">
                                                <i><FaRegHeart/></i>
                                            </span>
                                            <div className="product-item_rating">
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="product-item_star-gold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="product-item_sold">2512 đã bán</span>
                                        </div>
                                        <div className="product-item_origin">
                                            <span className="product-item_brand"></span>
                                            <span className="product-item_place">Hà Nội</span>
                                        </div>
                                    </a>
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/*Footer*/}
            <footer className="footer">
            <div className="grid">
                <div className="grid__row">
                    <div className="grid__column-2-4">
                        <h3 className="footer_heading">Chăm sóc khách hàng</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item_link">Trung tâm trợ giúp</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item_link">Hướng dẫn mua hàng</a>
                                </li>
                        </ul>
                    </div>
                    <div className="grid__column-2-4">
                        <h3 className="footer_heading">Giới thiệu</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item_link">Điều khoản</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item_link">Chính sách bảo mật</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item_link">Tuyển dụng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid__column-2-4">
                        <h3 className="footer_heading">Danh mục sản phẩm </h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item_link">Thời trang</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item_link">Đồ tiêu dùng</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item_link">Thiết bị điện tử</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item_link">Sách</a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid__column-2-4">
                        <h3 className="footer_heading">Theo dõi chúng tôi</h3> 
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item_link footer-item_icon">
                                    <i><FaFacebook /></i>
                                    Facebook
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item_link footer-item_icon">
                                    <i><FaInstagram /></i>
                                    Instagram
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item_link footer-item_icon">
                                    <i><FaTwitter/></i>
                                    Twitter
                                </a>
                            </li>
                        </ul> 
                    </div>
                    <div className="grid__column-2-4">
                        <h3 className="footer_heading">Đội ngũ phát triển</h3>
                        <ul className="footer-list">
                            
                            <li className="footer-item">
                                <span className="footer-item_member">Tạ Tiến Dũng</span>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    </div>    
  )
}
