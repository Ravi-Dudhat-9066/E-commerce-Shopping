import React, { useEffect, useState } from 'react'
import './Header.css'
import Img from '../img/6364542.png'
import Fitness from '../img/1.jpg'
import s1 from '../img/s-5.jpg'
import s2 from '../img/s-6.jpg'
import s3 from '../img/seller1.jpg'
import s4 from '../img/seller2.jpg'
import s5 from '../img/seller3.jpg'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Animated } from "react-animated-css";
import { getalbumsApi, loginApiCall } from '../../redux/services/AuthServices'
// import Employess from './Employees'


const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [name, setname] = useState('')
    const [Email, setEmail] = useState('')
    const [post, setPost] = useState('')
    const [postdata, setpostdata] = useState([])


    useEffect(() => {
        getAlbums()
    }, [])

    const getAlbums = () => {
        getalbumsApi()
            .then(result => {
                setpostdata(result.data)
            })
            .catch(error => {
                console.log(error)
            })

    }

    const handlename = (e) => {
        setEmail(e.target.value)
    }

    const handleEmail = (e) => {
        setname(e.target.value)
    }
    const handlepost = (e) => {
        setPost(e.target.value)
    }

    const handleApi = () => {
        const body = {
            name: name,
            Email: Email,
            post: post
        }
        loginApiCall(body)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className='Header-bar'>
                <div className='Header-left'>
                    <ul>
                        <li className='menu'>Logo</li>
                    </ul>
                </div>
                <div className='Header-right'>
                    <button onClick={() => setShowMenu(!showMenu)}>
                        <img src={Img} alt="" />
                    </button>
                </div>
            </div>
            {showMenu &&
                <div className='Menubar'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                </div>
            }

            <div className='Part1'>
                <div className='gray'>
                    <Animated animationIn="wobble" animationOut="fadeOut" isVisible={true}>
                        <div className='Fitness'>
                            <img src={Fitness} alt="" />
                        </div>
                    </Animated>
                    <Animated animationIn="shake" animationOut="fadeOut" isVisible={true}>
                        <div className='blue'>
                            <h1>Fitness & Yoga</h1><br />
                        </div>
                    </Animated>
                </div>
            </div>
            <div className='Slider'>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >

                    <SwiperSlide className='Slide'>
                        <img src={s1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='Slide'>
                        <img src={s2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='Slide'>
                        <img src={s3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='Slide'>
                        <img src={s4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='Slide'>
                        <img src={s5} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='Part2'>
                <div className='cir1'>
                </div>
                <div className='cir2'>
                    <img src={s3} alt="img" />
                </div>
                <div className='cir3'>
                </div>
            </div>

            <div className='table'>


                <table>
                    <thead>
                        <tr>
                            <th className='s1'>Id</th>
                            <th className='s1'>Name</th>
                            <th className='s1'>Age</th>
                        </tr>
                    </thead>

                    <tbody>
                        {postdata?.map((i) => {
                            return (
                                <>
                                    <tr>
                                        <td>{i.userId}</td>
                                        <td>{i.id}</td>
                                        <td>{i.title}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>




            <div className='Form' >
                <h1>Join Our Newsletter</h1><br />
                <label for="Name">Name</label><br />
                <input type="text" name="Name" defaultValue={name} onChange={handlename}></input><br />
                <label for="Email">Email</label><br />
                <input type="Email" name="Email" defaultValue={Email} onChange={handleEmail}></input><br />
                <label for="Message">Message</label><br />
                <input required type="text" defaultValue={post} onChange={handlepost} placeholder="Enter Post Title" /><br /><br />
                <button onClick={handleApi}>SUBMIT</button>
                <button>Edit</button>
                <button>Delete</button>

            </div>


        </div >
    );
}

export default Header;