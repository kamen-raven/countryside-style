import { teamMembersDataInterface } from '~widgets/HomeBlocks/TeamBlock/TeamBlock.props';
import Person1 from '~img/Team/Person1.jpg';
import Person2 from '~img/Team/Person2.jpg';
import Person3 from '~img/Team/Person3.jpg';
import Person4 from '~img/Team/Person4.jpg';
import Person5 from '~img/Team/Person5.jpg';



const teamMembersData: teamMembersDataInterface[] = [
  {
    _id: 1,
    role: 'owner',
    name: 'Павел Соколов',
    jobTitle: 'Управляющий партнер',
    quote: 'Мы – небольшое агентство, но это наше большое преимущество. Нам ни к чему специалисты, которые не умеют работать и тысячи объектов в базе только для галочки.',
    photo: Person1,
    contacts: {
      phone: '',
      telegram: '',
      whatsapp: ''
    }
  },
  {
    _id: 2,
    role: 'owner',
    name: 'Пётр Манько',
    jobTitle: 'Управляющий партнер',
    quote: 'Мы – небольшое агентство, но это наше большое преимущество. Нам ни к чему специалисты, которые не умеют работать и тысячи объектов в базе только для галочки.',
    photo: Person2,
    contacts: {
      phone: '',
      telegram: '',
      whatsapp: ''
    }
  },
  {
    _id: 3,
    role: 'employee',
    name: 'Дарья Феоктистова',
    jobTitle: 'Специалист по сопровождению сделок',
    quote: 'Lorem dolor adipisicing magna amet.',
    photo: Person3,
    contacts: {
      phone: '+7 (000) 561-62-57',
      telegram: 't.me/test1',
      whatsapp: 'wa.com/test1'
    }
  },
  {
    _id: 4,
    role: 'employee',
    name: 'Виктория Нардина',
    jobTitle: 'Специалист по ипотеке',
    quote: 'Adipisicing Lorem in labore aliqua deserunt officia non id sit eiusmod ad id cupidatat excepteur.',
    photo: Person4,
    contacts: {
      phone: '+7 (000) 000-00-57',
      telegram: 't.me/test2',
      whatsapp: 'wa.com/test2'
    }
  },
  {
    _id: 5,
    role: 'employee',
    name: 'Ольга Миллер',
    jobTitle: 'Агент по недвижимости',
    quote: 'Aliqua deserunt incididunt esse exercitation occaecat cillum esse eiusmod non in nostrud est eu proident.',
    photo: Person5,
    contacts: {
      phone: '+7 (000) 561-62-00',
      telegram: 't.me/test3',
      whatsapp: 'wa.com/test3'
    }
  },
];

export default teamMembersData;
