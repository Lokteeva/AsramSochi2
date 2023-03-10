import './App.css';
import React from 'react';
import Modal from './Components/Modal/Modal'
import ModalZayavka from './Components/ModalZayavka/ModalZayavka';
import MySlider from "./Components/mySlider"
import { Link, Route, Routes } from 'react-router-dom'
import Form from './Components/Form/Form';


function App() {
  return (
    <div className='container'>
    <div className="app">
      <header>
      <h1 className='logo'>Духовное развитие, активный отдых и оздоровление!</h1>
                       
      </header>
      <div className='bannerSection'>               
                <img src={'/img10.jpg'} alt="img" className='imgBanner' width="100%"/> 
                </div>
        <h3 className='ZagolovokGrey'>Проведи свой незабываемый отпуск в Ашраме Сочи!</h3>

          <div className='nav2'>
            <div></div>            
            <div className='center-div'>
          
            <Link exact to={'/form'}>
              <button className='btn1'>Оставить заявку</button> 
            </Link>            

            <Modal />
            </div>
          </div>         
         <ModalZayavka/>
<h3 className='Zagolovok'>Что для Вас важно?</h3>
                  
<div className="liSection">
<div>
  <table className="table" cellSpacing="20" >
  <tbody>
    <tr>
      <th scope="row">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>духовная практика</td>
    </tr>
    <tr>
    <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>обучение и правильное общение</td>
    </tr>
    <tr>
      <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>спорт, море, горы и  путешествия</td>
    </tr>
    <tr>
      <th scope="row">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>интересный детский досуг</td>
    </tr>
    <tr>
    <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>комфортное комплексное оздоровление</td>
    </tr>
   </tbody>
  </table>
</div> 

<div className='center-div'>
<img src="/img61.jpg" className="imgLi" alt="img"></img>
</div>
</div>

<center>
		<iframe className='video' src="https://www.youtube.com/embed/V2YEKpL_plI" 
    title="YouTube video player" frameborder="0" allow="accelerometer; 
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>


<h3 className='Zagolovok'>Приглашаем Вас в Ашрам Сочи и …</h3>

<div>
<img src="/placat.jpg" className="placat " alt="img"></img>
</div>

<div className='grid1 Candara2'>  
    <div className='ww'><img src="/img111.jpg" className="imgSircl" alt="img"></img></div>
    <div>
      <p>Погрузиться в духовную атмосферу и укрепить свою садхану</p>
      <p>Получить вкус к джаппа-медитации и слушанию священных писаний</p>
    </div>
</div>

    <div className='grid1 Candara2 '>
        <div className='ww'><img src="/img113.jpg" className="imgSircl" alt="img"></img></div>
        <div>
          <p className='text1'>Окунуться в совместное служение и научиться сотрудничеству</p>
          <p>Найти единомышленников и обрести новых друзей</p>
        </div>
    </div>

<div className='grid1 Candara2'>
        <div className='ww'><img src="/img119.jpg" className="imgSircl" alt="img"></img></div>
        <div>
          <p>Эффективно пройти обучение по Вашей образовательной программе в комфортных условиях и располагающей к занятиям атмосфере</p>
        </div>
</div>
  
<div className='Candara3 liSection2'>
<div>
<img src="/img128.png" className="imgSirclBigPolovina" alt="img"></img>
</div>

<div><h3 className='Zagolovok'>И еще бонусы ...</h3>
<h3 className='Candara2'>Спорт, активный отдых с хорошей компанией на море, в горах или в национальном парке, 
увлекательные путешествия и оздоровительные программы, детский досуг</h3><br/>
<div className='GridThree'>
  <div><img src="/img132.jpg" className="imgSirclBig" alt="img"></img></div>
  <div><img src="/img130.jpg" className="imgSirclBig" alt="img"></img></div>
  <div><img src="/img134.jpg" className="imgSirclBig" alt="img"></img></div>
</div>
</div>
</div>

<h3 className='Zagolovok'>О нас:</h3>  

<div className="liSection">
<div >
  <table className="table" cellSpacing="20">
  <tbody>
    <tr>
      <th scope="row">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>Ведический Храм
      </td>
    </tr>
    <tr>
    <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Брахмачари и Брахмачарини ашрамы</td>
    </tr>
    <tr>
      <th scope="row">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>Центр ведической культуры</td>
    </tr>
    <tr>
    <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Гостевой дом</td>
    </tr>    
  </tbody>
  </table>
</div> 
<div>
  <div><img src="/img149.jpg" className="img" alt="img"></img></div>
<br/>  
</div>
</div>

<div className='GridThree'>
  <div><img src="/10.jpg" className="imgSirclBig2" alt="img"></img></div>
  <div><img src="/img147.jpg" className="imgSirclBig2" alt="img"></img></div>
  <div><img src="/img144.jpg" className="imgSirclBig2" alt="img"></img></div>
</div>
<br/>
<br/>
<br/>
  <div className="">
      <h3 className='Zagolovok'>Ведический храм </h3>
      <h3 className='ZagolovokGrey'>Храм Их Светлостей Шри Шри Нитай Гаурасундары<br/>
и Шри Шри Джаганнатха Баладева и Субхарды</h3>
  </div>
<br/>
<div className="liSection">
  <div><img src="/11.jpg" className="img" alt="img"></img></div>
  <div>
  <table className="table" cellSpacing="20">
  <tbody>
    <tr>
      <th scope="row">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>Высокий стандарт поклонения</td>
    </tr>
    <tr>
    <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Ежедневные храмовые службы </td>
    </tr>
    <tr>
      <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Классы по священным писаниям</td>
    </tr>
    <tr>
      <th scope="row">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>Еженедельные киртаны</td>
    </tr>
    <tr>
    <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Ведические обряды и церемонии</td>
    </tr>    
  </tbody>
  </table>
</div> 
</div>
<br/>
<br/>
<div className='GridThree'>
  <div><img src="/img163.jpg" className="imgSirclBig" alt="img"></img></div>
  <div><img src="/img161.jpg" className="imgSirclBig" alt="img"></img></div>
  <div><img src="/img159.jpg" className="imgSirclBig" alt="img"></img></div>
</div>
<br/>
<br/> 
      <h3 className='Zagolovok'>Центр ведической культуры</h3> 
        
<div className="liSection">
<div>
  <table className="table" cellSpacing="30">
  <tbody>
    <tr>
      <th scope="row">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>Образовательные проекты</td>
    </tr>
    <tr>
    <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Фестивали и ретриты </td>
    </tr>
    <tr>
      <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>МАНТРА-концерты</td>
    </tr>
    <tr>
      <th scope="row">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>Проповеднические программы</td>
    </tr>
    <tr>
    <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Благотворительные проекты:<br/> «Пища жизни» и др.</td>
    </tr>    
  </tbody>
  </table>
</div> 

<div className='Grid2x2'>
  <div><img src="/img173.jpg" className="imgCub" alt="img"></img></div>
  <div><img src="/img175.jpg" className="imgCub" alt="img"></img></div>
  <div><img src="/img172.jpg" className="imgCub" alt="img"></img></div>
  <div><img src="/img174.jpg" className="imgCub" alt="img"></img></div>
</div>
</div>
<br/>
      <h3 className='Zagolovok'>Гостевой дом</h3> 
   
<div className="liSection">
<div>
  <table className="table" cellSpacing="20">
  <tbody>
    <tr>
      <th scope="row" valign="top">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>Гостевые номера
      <details>
        <summary className='Podrobnee'>подробнее</summary>
        <p>2х, 3х, 4х, 6ти –местные</p>
      </details>
      </td>
    </tr>
    <tr>
    <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
    <td className='Candara2'>
    Вегетарианское питание  
      <details>
        <summary className='Podrobnee'>подробнее</summary>
        <p>2х разовое вегетарианское (прасад)</p>
      </details>
      </td>
    </tr>
    <tr>
    <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
    <td className='Candara2'>
      Ресурсы для обучения и мероприятий</td>
    </tr>
    <tr>
      <th scope="row">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>
        Собственная зеленая территория</td>
    </tr>        
  </tbody>
  </table>
  </div>

  <div>
  <table className="table" cellSpacing="20">
  <tbody>
  <tr>
    <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
    <td className='Candara2'>
      Удобное расположение и уникальное окружение</td>
    </tr>
    <tr>
      <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Вегетарианское кафе 
      <details>
        <summary className='Podrobnee'>подробнее</summary>
        <p>вегетарианское меню (прасад, возможен заказ и кэйтеринг)</p>
      </details>
       </td>
    </tr>
    <tr>
      <th scope="row">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>Индийский магазин</td>
    </tr>      
    <tr>
    <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
    <td className='Candara2'>
      Дополнительные сервисы и возможности*<br/> 
      <details>
        <summary className='Podrobnee'>подробнее</summary>
        <p>Детский досуг, оздоровительные программы и увлекательные
 путешествия, спорт, активный отдых</p>
 <p className='Candara4'>
  * Дополнительные сервисы не входят в стоимость проживания, 
  организуются по запросу и предварительной договоренности</p>
      </details>  
      </td>
    </tr>
  </tbody>
  </table>
  </div>
</div>
<br/>

<div >
<div className='center-div'>
<img src="/img9.jpg" className="imgLi" alt="img"></img>
</div>
</div>
<br/>

<h3 className='Zagolovok'>Ресурсы для обучения и мероприятий</h3> 
 
<div className="liSection">
<div className='center-div'>
<img src="/img210.jpg" className="imgLi" alt="img"></img>
</div>
<div>
<table className="table" cellSpacing="20">
  <tbody>
    <tr>
      <th scope="row" valign="top">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'> Конференц-зал (60 м2)
      <details>
        <summary className='Podrobnee'>подробнее</summary>
        <p>Зал вместимостью более 50 человек</p>
        <p>Светлое просторное помещение, отдельный вход, высокие потолки и окна</p>
        <p>2 мощных кондиционера</p>
        <p>Телевизор для презентаций/трансляций</p>
        <p>Проектор с экраном</p>
        <p>Звуковое оборудование, микрофоны</p>
        <p>Доска маркерная и доска с блокнотом</p>
        <div>
        </div>
      </details>
      </td>
    </tr>
    <tr>
    <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Коворкинг зона * 
      <details>
        <summary className='Podrobnee'>подробнее</summary>
        <p>Просторная комната для индивидуальных и групповых занятий/встреч (до 10 человек)</p>
        <p>Удобные рабочие места</p>
        <p>Офисное оборудование: ноутбуки, принтер</p>
        <p>Мультимедия телевизор для презентаций</p>
        <p className='Candara4'>* Дополнительные сервисы не входят в стоимость проживания, организуются по запросу и предварительной договоренности</p>
      </details></td>
    </tr>
    <tr>
      <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Wi-Fi , выделенный скоростной интернет (100Mб)</td>
    </tr>
    </tbody>
  </table>
</div>
</div>
<br/>

<h3 className='Zagolovok'>Территория Ашрама</h3> 
 
<div className="liSection ">  
<div>
  <table className='table' cellSpacing="20">
  <tbody>
    <tr>
      <th scope="row">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'> Открытый пандал с навесом перед<br/>входом «Гаруда Холл»;</td>
    </tr>
    <tr>
    <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'> Большая, огороженная зона отдыха,<br/>утопающая в зелени и цветах;</td>
    </tr>
    <tr>
      <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'> Безопасная детская площадка;</td>
    </tr>
    <tr>
      <th scope="row">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>Беседка для общения и проведения ягий<br/>(ягьякунда);</td>
    </tr>
    <tr>
    <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2 '>Парковка с видеонаблюдением</td>
    </tr>
    <tr>
      <th scope="row">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>Wi-Fi на всей территории</td>
    </tr>
    </tbody>
  </table>
</div> 
<div className='center-div'>
<img src="/img8.jpg" className="imgLi" alt="img"></img>
</div>
</div>
<br/>

<h3 className='Zagolovok'>Расположение и окружение</h3> 
 
<div className="liSection">
<div>
<img src="/img11.jpg" className="imgLi" alt="img"></img>
</div>
<div>
  <table className="table" cellSpacing="20">
  <tbody>
    <tr>
      <th scope="row" valign="top">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'> Самый  зеленый и экологически чистый район
      <details>
        <summary className='Podrobnee'>подробнее</summary>
        <p>Расположен в окружении национального парка (реликтовый заповедник) </p>
      </details>
       
</td>
    </tr>
    <tr>
    <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Море 15 мин. ходьбы</td>
    </tr>
    <tr>
    <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Удаленность от городского шума
      <details>
        <summary className='Podrobnee'>подробнее</summary>
        <p>А также от суеты, рядом нет высоток и автотрасс, чистейший воздух и тишина, слышно журчание ручья
           и пение птиц, встречаются дикие звери - еноты, белки, ежи ... :)</p>
      </details>
       </td>
    </tr>
    <tr>
      <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Рядом горная река Мацеста
      <details>
        <summary className='Podrobnee'>подробнее</summary>
        <p>Обустроенная набережная с велодорожками  и спортивными островками</p>
      </details>       
</td>
    </tr>
    <tr>
      <th scope="row" valign="top">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>Рядом горы с водопадами «Орлиные скалы»
      <details>
        <summary className='Podrobnee'>подробнее</summary>
        <p>В шаговой доступности здесь открываются великолепные виды с 
          одной стороны на заснеженные пики высокогорья и на море с другой стороны. 
          В этом же месте - живописные водопады и пещера</p>
      </details>
      </td>
    </tr>
    </tbody>
  </table>
  </div> 
</div>
<br/>
<div className="liSection">
<div>
  <table className="table" cellSpacing="20">
  <tbody>   
    <tr>
    <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Высокогорье Красная поляна (до 2500 м) 
    <details>
        <summary className='Podrobnee'>подробнее</summary>
        <p>40 мин.  на комфортабельном экспрессе можно добраться до с подъемниками возле ж/д станции </p>
    </details>
</td>
    </tr>
    <tr>
      <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Водопады, горы, пещеры, туристические маршруты разной сложности, пляж с 
      лечебными грязями и другие достоприме-чательности  Сочи 
      <details>
      <summary className='Podrobnee'>подробнее</summary>
      <p> в 10-30 минутной зоне  езды различные ????</p>
      </details>
      </td>
    </tr>
    <tr>
      <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Аэропорт и ж/д вокзала 20-30 мин. такси</td>
    </tr>
    <tr>
    <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Центр Сочи 15-20 мин. Автобус</td>
    </tr>
    </tbody>
  </table>
  </div>

  <div className='Grid2x2'>
  <div><img src="/img247.jpg" className="imgCub" alt="img"></img></div>
  <div><img src="/img245.jpg" className="imgCub" alt="img"></img></div>
  <div><img src="/img246.jpg" className="imgCub" alt="img"></img></div>
  <div><img src="/img243.jpg" className="imgCub" alt="img"></img></div>
</div> 
</div>
<br/>
<div className="liSection">
<div className='Grid2x2'>
  <div><img src="/img254.jpg" className="imgCub" alt="img"></img></div>
  <div><img src="/img257.jpg" className="imgCub" alt="img"></img></div>
  <div><img src="/img255.jpg" className="imgCub" alt="img"></img></div>
  <div><img src="/img256.jpg" className="imgCub" alt="img"></img></div>
</div> 
<div>
  <table className="table" cellSpacing="20">
  <tbody>
    <tr>
      <th scope="row" valign="top">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>Живописная «Тропа Здоровья» 10 мин. пешком
      <details>
      <summary className='Podrobnee'>подробнее</summary>
      <p>Тропа утопает в зелени тропических растений и  проходящая вдоль моря, 
        со спортивными островками, смотровыми площадками и зонами отдыха</p>
      </details>
</td>
    </tr>
    <tr>
    <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Инфраструктура в шаговой доступности
      <details>
      <summary className='Podrobnee'>подробнее</summary>
      <p>Магнит, Пятерочка, ярмарка с местными фруктами, овощами, фермерскими молочными продуктами и пр.</p>
      </details>
      </td>
    </tr>   
    <tr>
      <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Ж/д станция Мацеста 15 мин пешком</td>
    </tr>
    <tr>
    <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Бальнео-курорт Мацеста 30 мин.
      <details>
      <summary className='Podrobnee'>подробнее</summary>
      <p>Прогулки вдоль красивой набережной или 12 мин на маршрутке </p>
      </details>
      </td>
    </tr>
    <tr>
      <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>25 мин. езды до аюрведической клиники «Расаяна»</td>
    </tr>
    </tbody>
  </table>
  </div>
</div>
<br/>

    <h3 className='ZagolovokGrey'>Дополнительные сервисы и возможности<br/> 
    <span className='Zagolovok'>ОЗДОРОВЛЕНИЕ и СПОРТ</span></h3>       
 
<div className="liSection">
<div>
  <table className="table" cellSpacing="20">
  <tbody>
    <tr>
      <th scope="row">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>Йога и танцы</td>
    </tr>
    <tr>
    <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Массажи
      <details>
      <summary className='Podrobnee'>подробнее</summary>
      <p>Классический, висцеральный, Чампи (масляный массаж головы), коррекция суставов и 
        позвоночника, остеопатический</p>
      </details>
      </td>
    </tr>
    <tr>
      <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Биоэнергетическое лечение, лечение натуральными маслами
      </td>
    </tr>    
    </tbody>
  </table>
</div>

<div >
  <div><img src="/img265.jpg"  className='imgSicleSuperBig' alt="img"></img></div>
</div> 
</div>

<div className="liSection">
<div >
  <div><img src="/img272.jpg"  className='imgSicleSuperBig' alt="img"></img></div>
</div>
<div>
  <table className="table" cellSpacing="20">
  <tbody>
  <tr>
    <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Консультации по оздоровительным программам
      <details>
      <summary className='Podrobnee'>подробнее</summary>
      <p>Очищение и лечение организма с помощью дыхательных техник, голодания, физических 
        упражнений, питания, подбор диеты</p>
      </details>
      </td>
    </tr>
    <tr>
      <th scope="row" valign="top"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>25 мин. езды до аюрведической клиники «Расаяна»</td>
    </tr>
    <tr>      
      <th scope="row" valign="top">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>Тренировки по скандинавской ходьбе на Терренкуре 
      <details>
      <summary className='Podrobnee'>подробнее</summary>
      <p>10 мин. пешком от Ашрама</p>
      <p>«Тропа Здоровья» проходит вдоль моря и среди
разнообразных тропических деревьев и растений.</p>
    <p>Терренкур переводится как лечение на местности — это
метод санаторно-курортного лечения, который предусматривает физические нагрузки в виде активных пеших
прогулок по гористой местности.</p>
    <p>Этот вид спорта улучшает работу сердечно-сосудистой
системы, органов дыхания, ускоряет обмен веществ, и приводит в порядок нервную систему и способствует
психоэмоциональной стабильности. Помогает укрепить вестибулярный и опорно-двигательный аппараты, суставы,
выпрямить осанку, снизить уровень плохого холестерина, нормализовать сон и избавиться от депрессии.</p>
    <p>А еще вы будете в отличной форме, так как задействуются
90% мышц корпуса, больше чем при беге и велоспорте.</p>    
      </details>
      </td>
    </tr>    
    </tbody>
  </table>
  </div> 
</div>

<div className="liSection ">
<div>
<table className="table" cellSpacing="20">
  <tbody>    
    <tr>
      <th scope="row" valign="top">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>Оздоровительные программы в бальнеологическом курорте Мацеста* 
      
      <details>      
      <summary className='Podrobnee'>подробнее</summary>
      <div >
      <p className='Candara2'>* 30 мин. прогулки вдоль красивой набережной 
или 12 мин на маршрутке </p>
      <p><span className='Candara3'>Бальнеотерапия</span>- это оздоровление минеральными водами и лечебными грязями.</p>
    <p>Мацеста рекомендуется при заболеваниях суставов, расстройствах нервной системы, сердечно-сосудистых и кожных
заболеваниях, урологических и гинекологических, гастроэнтерологических, а также нарушении обменных процессов в организме.</p>
    <p>Минздравом РФ утверждены методики лечения на Мацесте<span className='Candara3'> более 1500</span>  заболеваний, с помощью сероводородных, родоновых,
йодобромных ванн, питьевой минеральной мацестинской воды и грязелечения.</p>
    <p>Ученые в ходе исследований выяснили, что Мацестинский
сероводород замедляет процесс старения, активизируя «гормон молодости» - <span className='Candara3'>Сиртуин-1</span></p>
      </div> 
    <div><img src="/img12.jpg"  className='imgLi' alt="img"></img></div>
      </details>
      </td>
    </tr>    
    </tbody>
  </table>
</div>

<div >
  <div ><img src="/12.jpg"  className='imgSicleSuperBig ' alt="img"></img></div>
</div> 
</div>
<br/>

<h3 className='Zagolovok'>АКТИВНЫЙ ОТДЫХ и ДЕТСКИЕ ПРОГРАММЫ</h3>       

<div className='oo'>
      <div></div>
 <div className='center-div'>
 <table className="table" cellSpacing="20">
  <tbody>
    <tr>
      <th scope="row">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'> Детские программы</td>
    </tr>
    <tr>
    <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Кулинарные мастер-классы</td>
    </tr>
    <tr>
      <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Походы</td>
    </tr>    
    </tbody>
  </table>
 </div>
</div>

<div className="liSection">
  <div><img src="/img287.jpg"  className='imgLi' alt="img"></img></div>
  <div><img src="/img13.jpg"  className='imgLi' alt="img"></img></div>
</div>
<br/>

<h3 className='Zagolovok'>ПУТЕШЕСТВИЯ и ЭКСКУРСИИ</h3>       
 

<div className="liSection5">
<div>
  <table className="table" cellSpacing="20">
  <tbody>
    <tr>
      <th scope="row">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>Экскурсии по г.Сочи</td>
    </tr>
    <tr>
    <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Путешествия в Абхазию (однодневные)</td>
    </tr>     
    </tbody>
  </table>
  </div> 

<div className='Grid2x2'>
  <div><img src="/img302.jpg" className="imgCub" alt="img"></img></div>
  <div><img src="/img300.jpg" className="imgCub" alt="img"></img></div>
  <div><img src="/img301.jpg" className="imgCub" alt="img"></img></div>
  <div><img src="/img299.jpg" className="imgCub" alt="img"></img></div>
</div>
</div>
<br/>

<h3 className='Zagolovok'>ДОСУГ и АКТИВНЫЙ ОТДЫХ</h3>       
 

<div className="liSection5">
  <div>
  <p className='Candara2'>Что еще интересного рядом с Ашрамом:</p>
  <table className="table" cellSpacing="20">
  <tbody>
    <tr>
      <th scope="row">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'> SUP-станция (школа и прокат сап-бордов) *
</td>
    </tr>
    <tr>
    <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>Серф-станция (обучение виндсерфингу и покат)</td>
    </tr>
    <tr>
      <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'> Электросамокаты и самокаты</td>
    </tr>
    <tr>
    <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'> Закрытый бассейн с банным комплексом</td>
    </tr>
    <tr>
      <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'> Культурное Сочи: Зимний театр, Органный зал, Дендрарий</td>
    </tr>
    </tbody>
  </table>
  </div>
  <div className='Grid2x2'>
  <div><img src="/img310.jpg" className="imgCub" alt="img"></img></div>
  <div><img src="/img309.jpg" className="imgCub" alt="img"></img></div>
  <div><img src="/img311.jpg" className="imgCub" alt="img"></img></div>
  <div><img src="/img312.jpg" className="imgCub" alt="img"></img></div>
</div>
</div>
<p className='Candara2'>* SUP серфинг - это скольжение по воде при помощи доски и весла</p>
<br/>

<MySlider />
<br/>

<Routes>
  <Route path='/form' element={ <Form/>}/>
</Routes>

<footer>
<div><img src="/logoWhite.png" className="logo2" alt="img"></img></div>
  <div >     
    <h3 className='Candara2White'>Адрес: г. Сочи, ул. Фурманова, д. 38</h3>     
    <h3 className='Candara2White'>По вопросам организации:<br/>+7-988-487-65-27 Ольга 
    </h3>
  </div>
</footer>



</div> 
</div>  
               
  
    
  );
}

export default App;
