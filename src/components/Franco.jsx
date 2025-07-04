import React from 'react';
import '../styles/Franco.css'
import FrancoBooks from '../data/FrancoBooks';
import { Link } from 'react-router-dom';

function Franco() {
  return (
    <div className="bio-container">
      <img src="/Authors/Franco.jpg" alt="Іван Франко" className="portrait"/>
      <h2>Іван Франко (1856–1916)</h2>
      <p className='subtitle'>Видатний український письменник, поет, драматург, публіцист, перекладач, літературний критик, мистецтвознавець, фольклорист, етнолог, історик, соціолог, політолог, економіст, філософ, професійний видавець і редактор, громадський і політичний діяч</p>
      <p>
        Іван Франко народився 27 серпня 1856 року у селі Нагуєвичі Дрогобицького повіту в родині заможного сільського коваля – Якова Франка. Мати – Марія Кульчинська,
        походила з роду збіднілої шляхти,
        що належала до герба Сас. 
      </p>
      <p>
        Батька не стало у 1865 році, 
        коли Іванові – найстаршому серед дітей (він мав двох братів і сестру),
        було 9 років. Мати вийшла заміж удруге за Григорія Гаврилика – він добре опікував дітей і Франко упродовж усього свого життя підтримував з ним дружні стосунки, навіть тоді, коли у 1872 році померла і мати, а вітчим одружився вдруге.
      </p>
      <p>
        У 1862 році шестилітній Іван почав відвідувати початкову школу,
        де навчали основам математики, читати і писати українською,
        польською і німецькою мовами. 
      </p>
      <p>
        Михайло Коцюбинський, переповідаючи розповіді І. Франка про той час, писав: «Одягнутий у селянський одяг, боязкий, сумирний, часто невмитий, хлопчик увесь рік був посміховиськом класу й, натерпівшись досхочу від жорстоких учителів, несподівано наприкінці року,
        на подив собі й усьому класові, опинився першим учнем». 
      </p>
      <p>
        Сам письменник свої спогади про дитинство і навчання у початковій школі згодом поклав в основу сюжетів оповідань «Грицева шкільна наука», «Олівець», «Schönschreiben», «Отець-гуморист», «Малий Мирон», – які стали перлинами його творчості. У 1864– 1867 роках він продовжив навчання в міській школі з німецькою мовою викладання у Дрогобичі, а 1867 року – вступив у Дрогобицьку реальну гімназію імені Франца-Йосифа з польською 
        мовою навчання і закінчив її у 1875 році з похвальним свідоцтвом.
      </p>
      <p>
        Ще гімназистом Франко виявив свої феноменальні здібності
        до науки і творчості. Він майже дослівно міг повторити
        товаришам лекції викладачів, знав напам'ять усього «Кобзаря»,
        домашні завдання з польської мови часто виконував 
        у поетичній формі, читав багато творів європейських класиків,
        здійснив переклади давньоруського «Слова про Ігорів похід»,
        декілька глав Біблії і творів античних
        авторів – Софокла і Евріпіда. А ще наполегливо
        студіював  культурологічні, історіософські праці,
        популярні книжки на природничі теми, почав збирати
        фольклор і власну бібліотеку, писати вірші, прозу
        та перші п’єси.
      </p>
      <p>
        Восени 1875 року Іван Франко вступив на філософський факультет 
        Львівського університету – вивчав, насамперед,
        класичну філологію та українську мову й літературу.
        Саме тоді ж почав друкуватися в журналі «Друг». Відомо,
        що він був активним учасником молодіжних гуртків та громадських організацій, де відбувалися дискусії про проблеми й несправедливість суспільного ладу,
        і цим привернув до себе увагу поліції. 
      </p>
      <p>
        У 1877 році за чиїмось доносом його заарештували й кинули за ґрати. Сам письменник згадував про це так: «Дев’ять  місяців, пробутих в тюрмі, були для мене тортурою. Мене трактовано як звичайного злодія, посаджено між самих злодіїв та волоцюг, котрих бувало в одній камері зі мною по 14–18,... а кілька тижнів я просидів в такій камері, що мала тільки одно вікно, а містила 12 людей, з котрих 8 спало на тапчані, а 4 під тапчаном... я щорана будився, маючи на голові повно снігу, навіяного з вікна».
      </p>
      <p>
        Загалом Іван Франко через свою політично-громадську діяльність був ув'язнений австрійською владою 4 рази: у 1877, 1880, 1889 і 1892 роках. Після першого арешту «неблагонадійного» студента виключили з університету, перед ним закрили двері деякі наукові та літературні товариства. Поновити на деякий час навчання в університеті Франкові вдалося лише на деякий час у 1878 році. Саме тоді ж він почав тісно співпрацювати з польськими соціал-демократами з газети «Praca», які активно долучилися до робітничого руху в Галичині. У кінці 1878 року Франко фактично став редактором цього видання. 
      </p>
      <p>
        Повну вищу освіту, необхідну для докторату, він завершив лише через 15 років спочатку – в Чернівецькому, а згодом – у Віденському університеті, де захистив дисертацію і здобув ступінь доктора філософії. У 1895 році, після блискучої вступної лекції у Львівському університеті, професорський сенат обрав його на кафедру української та староросійської літератури. Франко радів, що нарешті він зможе скинути з себе «ярмо панщини» – так він називав обов'язкову роботу в польських газетах для шматка хліба для себе і сім'ї, – і цілком присвятити себе науковій діяльності та літературній творчості. Однак галицький намісник граф Казимир Бадені не допустив до затвердження у професурі людини, яка «тричі сиділа у в'язниці».
      </p>
      <p>
        Матеріальна скрута змушувала письменника на деякий час повертатися в рідні Нагуєвичі. Вдень він важко працював по господарству, а вечорами і вночі займався літературною працею. Саме у Нагуєвичах була написана повість «Захар Беркут» у той час, коли 1882 року львівський літературний часопис «Зоря» оголосив конкурс на кращий історичний твір. Іван Франко став переможцем цього конкурсу, створивши повість за шість тижнів. З 1881 по 1885 рік він був співвидавцем часопису «Світ», співробітником газети «Діло» та часопису «Зоря». У 1886 році познайомився з Ольгою Хоружинською, і у травні одружився з нею.
      </p>
      <p>
        З 1887 по 1897 рік письменник співпрацював з польською газетою «Kurjer Lwowski». У той же час майже рік працював у часописі «Правда». У 1898 році, на ювілейному вечорі з нагоди 25-річної літературної діяльності, Франко у відповідній промові сказав: «Двадцять п’ять літ я був тим пекарем, що пече хліб для щоденного вжитку... Яко син селянина, вигодуваний твердим мужицьким хлібом, я почував себе до обов’язку віддати працю свого життя тому простому народові...».
      </p>
      <p>
        У 1890 році Іван Франко став співзасновником Русько-Української радикальної партії, готував для неї програму, й по 1895 рік видав півмісячник «Народ». Радикальна партія тричі (1895, 1897, 1898) висувала його кандидатуру на виборах до віденського парламенту й галицького сейму, але через маніпуляції адміністрації та провокації ідеологічних і політичних супротивників – без успіху. Коли у 1899 році в Радикальній партії розпочалася криза, Франко разом з представниками правого крила народовців заснував Національно-демократичну партію, а у 1904 році – залишив активну участь у політичному житті, зосередившись на літературній та науковій роботі.
      </p>
      <p>
        У 1899 році за активної участі І. Франка було створено «Українсько-Руську Видавничу Спілку у Львові». У «малій» серії спілки вийшло 117 книжок, а у «великій» – понад 150 книжок української та закордонної літератури. З 1898 по 1901 рік і з 1903 по 1912 рр. – він очолював філологічну секцію та етнографічну комісію при Науковому товаристві імені Тараса Шевченка, був співредактором журналу «Літературно-науковий вісник».
      </p>
      <p>
        Починаючи з 1908 року у письменника, виснаженого кількома ув’язненнями й важкою працею, стан здоров’я значно погіршився, однак він продовжував працювати – писав нові твори, їздив по Галичині й Буковині, зустрічався зі своїми земляками, записував народні пісні, читав лекції. Сорокарічний ювілей літературної праці Франка у 1913 році відзначала вся Україна. Святкування відбулися також у тих куточках світу, де була дієвою українська діаспора. 
      </p>
      <p>
        28 травня 1916 року життя видатного письменника і науковця обірвалося. Газети багатьох країн у своїх некрологах рознесли цю сумну звістку по всьому світі. Кількатисячне урочисте прощання з Іваном Франком відбулося на Личаківському цвинтарі Львова. У 1933 році на його могилі був встановлений відомий пам’ятник, на якому Франко-каменяр «лупає сю скалу».
      </p>

      <h3 className="books-title">Книги:</h3>
            
            <div className="books-row">
            {FrancoBooks.books.map(book => (
            <Link key={book.id} to={`/poet/Franco/book/${book.id}`} className="book-card">
            <img src={book.image} alt={book.title} className="book-img" />
            <h4>{book.title}</h4>
            <p>{book.description}</p>
            </Link>
            ))}
            </div>
    </div>
  );
}

export default Franco;
