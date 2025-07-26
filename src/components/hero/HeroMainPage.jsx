import React, { useEffect, useState } from 'react'
import Login from '../login/Login';

function HeroMainPage({ children }) {
    const slides = [
        {
          title: '16th-Century Culverin Cannon',
          price: 'Rs: 350.00',
          image: 'https://theme.bitrixinfotech.com/bidzone/assets/images/auction-product-3.png'
        },
        {
          title: 'Vintage Gold Clock',
          price: 'Rs: 299.00',
          image: 'https://theme.bitrixinfotech.com/bidzone/assets/images/auction-product-13.png'
        },
        {
          title: 'Antique Rifle',
          price: 'Rs: 420.00',
          image: 'https://theme.bitrixinfotech.com/bidzone/assets/images/auction-product-2.png'
        },
      ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fade, setFade] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          setFade(true);
        }, 300);
      }, 7000);
      return () => clearInterval(interval);
    }, []);
  
  return (
    <section className="pt-24 bg-cover bg-center min-h-screen py-6 lg:py-0 px-4 flex items-center justify-center"
    style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full max-w-7xl mx-auto">
      {/* Left:Login signup */}
{children}
      {/* Right: Slidable Card */}
      {/* <div className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'} hidden lg:block w-full flex justify-center`}>
        <div className="bg-[var(--mainbg)] bg-opacity-95 rounded-xl shadow-xl p-4 w-[300px] md:w-[350px]">
          <img src={slides[currentSlide].image} alt="Product" className="rounded-lg w-full h-[400px] object-cover mb-4" />
          <h2 className="text-lg font-semibold text-[var(--mainColor)]">{slides[currentSlide].title}</h2>
          <p className="text-[var(--placeholderClr)] font-bold">{slides[currentSlide].price}</p>
        </div>
      </div> */}
    </div>
  </section>
  )
}

export default HeroMainPage
