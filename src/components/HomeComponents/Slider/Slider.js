import React, { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import avatar1 from './avatar1.jpg';
import 'keen-slider/keen-slider.min.css';
import './Slider.css';

export default function Slider(props) {
  const [mobile, setMobile] = useState(() => {
    return window.innerWidth < 768 ? true : false;
  });
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slidesPerView: mobile ? 1 : 2,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  useEffect(() => {
    const resizeListener = () => {
      window.innerWidth < 768 ? setMobile(true) : setMobile(false);
    };
    window.addEventListener('resize', resizeListener);

    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  return (
    <>
      <div className='navigation-wrapper'>
        <div ref={sliderRef} className='keen-slider'>
          <div className='keen-slider__slide number-slide1'>
            <div className='slide-header'>
              <div className='image'>
                <img src={avatar1} alt='user avatar' />
              </div>
              <div className='details'>
                <p>Mason K</p>
                <p>Professional teacher</p>
              </div>
            </div>
            <div className='slide-body' style={{ borderColor: 'hotpink' }}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae nobis alias enim dicta qui! Officiis temporibus maxime
                modi magni, ad repellat vel fugiat at labore inventore assumenda
                dolores rem illo.
              </p>
            </div>
            <div className='slide-footer'>
              <p>12/04/202</p>
              <p>
                <i className='fab fa-twitter'></i>
              </p>
            </div>
          </div>
          <div className='keen-slider__slide number-slide2'>
            <div className='slide-header'>
              <div className='image'></div>
              <div className='details'>
                <p>James Muhoro</p>
                <p>Software Enginner</p>
              </div>
            </div>
            <div className='slide-body' style={{ borderColor: 'orange' }}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae nobis alias enim dicta qui! Officiis temporibus maxime
                modi magni, ad repellat vel fugiat at labore inventore assumenda
                dolores rem illo.
              </p>
            </div>
            <div className='slide-footer'>
              <p>12/04/202</p>
              <p>
                <i className='fab fa-facebook'></i>
              </p>
            </div>
          </div>
          <div className='keen-slider__slide number-slide3'>
            <div className='slide-header'>
              <div className='image'></div>
              <div className='details'>
                <p>Julius Mucheru</p>
                <p>Construction Manager</p>
              </div>
            </div>
            <div className='slide-body' style={{ borderColor: 'aqua' }}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae nobis alias enim dicta qui! Officiis temporibus maxime
                modi magni, ad repellat vel fugiat at labore inventore assumenda
                dolores rem illo.
              </p>
            </div>
            <div className='slide-footer'>
              <p>12/04/202</p>
              <p>
                <i className='fab fa-twitter'></i>
              </p>
            </div>
          </div>
          <div className='keen-slider__slide number-slide4'>
            <div className='slide-header'>
              <div className='image'></div>
              <div className='details'>
                <p>Jeff Kennedy</p>
                <p>Medical doctor</p>
              </div>
            </div>
            <div className='slide-body' style={{ borderColor: 'slateblue' }}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae nobis alias enim dicta qui! Officiis temporibus maxime
                modi magni, ad repellat vel fugiat at labore inventore assumenda
                dolores rem illo.
              </p>
            </div>
            <div className='slide-footer'>
              <p>12/04/202</p>
              <p>
                <i className='fab fa-instagram'></i>
              </p>
            </div>
          </div>
          <div className='keen-slider__slide number-slide5'>
            <div className='slide-header'>
              <div className='image'></div>
              <div className='details'>
                <p>Brad Jonathan</p>
                <p>Content creator</p>
              </div>
            </div>
            <div className='slide-body' style={{ borderColor: 'crimson' }}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae nobis alias enim dicta qui! Officiis temporibus maxime
                modi magni, ad repellat vel fugiat at labore inventore assumenda
                dolores rem illo.
              </p>
            </div>
            <div className='slide-footer'>
              <p>12/04/202</p>
              <p>
                <i className='fab fa-twitter'></i>
              </p>
            </div>
          </div>
          <div className='keen-slider__slide number-slide6'>
            <div className='slide-header'>
              <div className='image'></div>
              <div className='details'>
                <p>Jason Welbeck</p>
                <p>Technical writer</p>
              </div>
            </div>
            <div className='slide-body' style={{ borderColor: 'springgreen' }}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae nobis alias enim dicta qui! Officiis temporibus maxime
                modi magni, ad repellat vel fugiat at labore inventore assumenda
                dolores rem illo.
              </p>
            </div>
            <div className='slide-footer'>
              <p>12/04/202</p>
              <p>
                <i className='fab fa-github'></i>
              </p>
            </div>
          </div>
        </div>
        {slider && (
          <>
            <ArrowLeft
              onClick={e => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={e => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className='dots'>
          {[...Array(slider.details().size).keys()].map(idx => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

function ArrowLeft(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={'arrow arrow--left' + disabeld}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
    </svg>
  );
}

function ArrowRight(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={'arrow arrow--right' + disabeld}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
    </svg>
  );
}
