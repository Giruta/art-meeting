import React, {useEffect} from "react";
import useFetch from "../Helpers/useFetch";
import About from "./About.js";
import {Button, Col, Container, Form, Image, ListGroup, ListGroupItem, Nav, Row} from "react-bootstrap";
import Header from "../Components/Header";
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from "react-router-dom";

import main from '../assets/main.jpeg';
import photo from '../assets/photo.jpeg';
import call from '../assets/call.svg';
import link from '../assets/link.svg';
import email from '../assets/email.svg';
import Footer from "../Components/Footer";
import {FaFacebook, FaInstagram, FaLinkedinIn, FaTelegram, FaYoutube} from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';

import arrow from '../assets/arrow.svg';
import template from "../assets/template.png";

const Home = () => {
  // const { data: about, isPending, error } = useFetch('http://localhost:8080/');
  useEffect(()=> {
    Aos.init({ duration: 2000 });
  }, []);

  return(
    <div id='home' className='home'>
      <Header background={'gray-bg'}/>
      <Image
        src={main}
        className='img-fluid shadow-4 header-img'
        alt='background'
      />
      <section className='header-wrapper'>
        {/*{ error && <div>{ error }</div>}*/}
        {/*{ isPending && <div>Loading...</div>}*/}
        {/*{ about && <About about={about} title='Main page' */}
        {/*/> }*/}
        <Container>
          <div className='header-content'>
            <h1
              className='header-title title'
              data-aos="fade-up"
              // data-aos-offset="200"
              // data-aos-delay="50"
              // data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              Марина Мельник
            </h1>
            <p className='header-subtitle'>
              Помогаю сориентироваться в море возможностей, достичь своих
              целей с помощью проектного подхода. Понятно. Пошагово. Кайфово.
            </p>
            <Link to="/about">
              <button className="btn-wrapper btn btn-orange" type="button">Узнать больше</button>
            </Link>
          </div>
          <div className='header-social mt-4 d-flex align-items-baseline'>
            <Container>
              <Row>
                <Col md={4} xs={12}>
                  <Nav className='footer-nav justify-content-md-start justify-content-center mt-4'>
                    <Link className='link me-3' to='https://www.linkedin.com/in/oceanme/'>
                      <FaLinkedinIn/>
                    </Link>
                    <Link className='link me-3' to='http://telegram.org/marmeliko'>
                      <FaTelegram/>
                    </Link>
                    <Link className='link me-3' to='https://www.youtube.com/channel/UCtyXv6q-k-X89AXfsJMpqXA'>
                      <FaYoutube/>
                    </Link>
                    <Link className='link me-3' to='https://www.instagram.com/marmeliko/'>
                      <FaInstagram/>
                    </Link>
                    <Link className='link me-3' to='https://www.facebook.com/marina.melnick/'>
                      <FaFacebook/>
                    </Link>
                  </Nav>
                </Col>
                <Col md={4} xs={12} className='text-center mt-xs-2 mt-md-0'>
                  <a href='tel:+38(050)3636467' className='mt-sm-4 phone-text link'>+38 (050) 363 64 67</a>
                </Col>
                <Col md={4} className='text-end'>
                  <a href="#about" className='h-xs-50 h-md-100'>
                    <Image src={arrow} className='h-xs-50 h-md-100' />
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </section>
      <section className='info'>
        <Container>
          <Row className='text-center'>
            <h2 className='info-title blu-dot'>Marmeliko</h2>
          </Row>
          <Row>
            <Col md={6}>
              <p data-aos='fade-right'>Каждый проходит свой интересный, неповторимый
                путь познания и развития. Я прохожу свой.
              </p>
              <p data-aos='fade-right'>
                Мне повезло выбрать профессию, где важен результат,
                целеполагание и есть много подходов по достижению
                задуманного.
              </p>
              <p data-aos='fade-right'>
                Начав применять эти техники за пределами профессиональной
                деятельности, я добилась значительных результатов и в
                сфере личностного роста и в социальной, и в творческой
                сферах. Позже начала консультировать и обучать топ-менеджеров,
                настраивать эффективные бизнес-процессы в компаниях.
              </p>
            </Col>
            <Col md={6}>
              <p data-aos='fade-left'>
                И во всем мне помогает проектный подход. Я верю, что умение
                реализовывать проекты встроено в нашу ДНК. Как проект мы можем
                представить что угодно.
              </p>
              <p data-aos='fade-left'>
                Даже наши состояния - это мини проекты и, если результат этих
                проектов над не подходит, мы всегда может стартовать разработку
                следующей версии и выйти на другие ощущения.
              </p>
              <p data-aos='fade-left'>
                Здесь я буду делиться практиками проектного менеджмента и показывать,
                как они работают в любой сфере нашей жизни.
              </p>
              <p data-aos='fade-left'>
                Я буду приводить личные примеры - в основном,  а также примеры моих
                клиентов, коллег
              </p>
            </Col>
          </Row>
          <Row>
            <blockquote className="text-center info-quote">Всё то, что есть в нашей жизни когда-то было нашим или чьим-то
              проектом.
            </blockquote>
          </Row>
        </Container>

      </section>
      <section className='send'>
        <Container>
          <Row className='color-wrapper'>
            <div className='border-wrapper'></div>
            <Col sm={12}>
              <div className='send-wrapper'>
                <Row>
                  <Col lg={6} sm={12}>
                    <h3 className='send-title yellow-dot'>
                      Давайте обсудим  чем я могу вам помочь..
                    </h3>
                    <p className='send-text'>
                      Запишитесь на бесплатную 30-минутную онлайн консультацию, и я свяжусь с вами,
                      чтобы согласовать время.
                    </p>
                    <Form id='form-send' className='form-send'>
                      {/*<input type="hidden" name="key" value="def2" />*/}
                      {/*<input type="hidden" name="csrfmiddlewaretoken"*/}
                      {/*       value="cnsP7ZO37H4fYPOo1ZJOJw0QM16m9culd3knTi8BZ6Mu9dUC9GObtvZ9oDfsRJ36" />*/}
                      <Form.Control id='name' className='send-input' type='text' placeholder="Имя" />
                      <Form.Control id='phone' className='send-input' type='phone' placeholder='+38 (___) ___-__-__ ' />
                      <Button className="btn-send btn btn-orange text-center" type="submit">Записаться</Button>
                      <div className="form-group form-check">
                        <input className="form-check-input" id="exampleCheck1" type="checkbox" name="agree"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Даю согласие на обработку
                          данных</label>
                      </div>
                      {/*<Form.Text className="mt-5">*/}
                      {/*  Нажимая на кнопку, вы соглашаетесь на обработку персональных данных*/}
                      {/*  и соглашаетесь с <a href="https://skillsup.ua/about/gdpr/">Политикой конфиденциальности</a>*/}
                      {/*  и <a href="https://skillsup.ua/about/public-offer/">Договором офертой</a>*/}
                      {/*</Form.Text>*/}
                    </Form>
                  </Col>
                  <Col lg={6} sm={12} className='text-center'>
                    <Image className='send-photo' src={photo}/>
                    <p>Марина Мельник. Эксперт в области проектного подхода.
                      Карьерный терапевт
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='blog section'>
        <Container>
          <Row>
            <Col sm={12} className='text-center'>
              <h2 className='blog-title blu-dot title'>Blog</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} data-aos='fade-right'>
              <Link to={/#/} className='d-block'><Image className='blog-img image' src={template}/></Link>
            </Col>
            <Col sm={12} md={6} className='mt-md-0 mt-3' data-aos='fade-left'>
              <h4 className='blog-title'>Публикация в блоге(пример)</h4>
              <h6>Some new</h6>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis na…
              </p>
              <p>
                <span className='blog-date'>11 ноября 2020 г.</span>
                <span className='blog-time'>12:53</span>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='video section pt-0'>
        <Container>
          <Row>
            <Col sm={12} className='text-center'>
              <h2 className='video-title blu-dot title'>Video</h2>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col sm={7} className='position-relative'>
              {/*<Link to={/example/} classname='d-block'><Image className='video-img image' src={template}/></Link>*/}
              <iframe
                src="https://www.youtube.com/embed/vmCWyB9VDpM"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              <h4 className='video-subtitle'>Видео(пример)</h4>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='contact'>
        <Container>
          <Row>
            <Col sm={12}>
              <h2 className='yellow-dot title-contact'>Давайте свяжемся</h2>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col md={3}>
              <Image src={call}/>
              <p className='phone-img'>Позвонить:</p>
              <a href='tel:+38(050)3636467' className='phone-text link'>+38 (050) 363 64 67</a>
            </Col>
            <Col md={3} className='mt-5 mt-md-0'>
              <Image src={email}/>
              <p className='email-img'>Напишите:</p>
              <a  className='link email-text' href="mail:marmeliko@gmail.com">marmeliko@gmail.com</a>
            </Col>
            <Col md={3} className='mt-5 mt-md-0'>
              <Image src={link}/>
              <p className='link-img'>LinkedIn:</p>
              <a className='link link-text' href="#">LinkedIn</a>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </div>
  );
}

export default Home;
