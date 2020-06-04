import {Category} from '../common/category';
import {Priority} from '../common/priority';
import {Task} from '../common/task';

export class DataTest {
  static categories: Category[] = [
    {id: 1, name: 'Работа', icon: 'work'},
    {id: 2, name: 'Семья', icon: 'family_restroom'},
    {id: 3, name: 'Учеба', icon: 'school'},
    {id: 4, name: 'Отдых', icon: 'deck'},
    {id: 5, name: 'Спорт', icon: 'sports_basketball'},
    {id: 6, name: 'Еда', icon: 'fastfood'},
    {id: 7, name: 'Финансы', icon: 'attach_money'},
    {id: 8, name: 'Гаджеты', icon: 'ad_units'},
    {id: 9, name: 'Здоровье', icon: 'local_hospital'},
    {id: 10, name: 'Автомобиль', icon: 'directions_car'},
  ];

  static priorities: Priority[] = [
    {id: 1, name: 'Низкий', color: '#e5e5e5'},
    {id: 2, name: 'Средний', color: '#85d1b2'},
    {id: 3, name: 'Высокий', color: '#f1828d'},
    {id: 4, name: 'Срочный', color: '#f1128d'},
  ];

  static tasks: Task[] = [
    {id: 1, name: 'Залить бензин', completed: false, category: DataTest.categories[9], priority: DataTest.priorities[1]},
    {id: 2, name: 'Сходить в магазин', completed: false, category: DataTest.categories[5], priority: DataTest.priorities[2]},
    {id: 3, name: 'Пойти в кино', completed: false, category: DataTest.categories[3], priority: DataTest.priorities[0]},
    {id: 4, name: 'Пробежаться', completed: false, category: DataTest.categories[4], priority: DataTest.priorities[1]},
    {
      id: 5,
      name: 'Залить бензин полный бак',
      priority: DataTest.priorities[2],
      completed: false,
      category: DataTest.categories[9],
      date: new Date('2019-04-10')
    },
    {
      id: 6,
      name: 'Передать отчеты начальнику управления',
      priority: DataTest.priorities[0],
      completed: false,
      category: DataTest.categories[0],
      date: new Date('2019-04-11')
    },
    {
      id: 7,
      name: 'Убраться у себя в комнате, полить растения',
      priority: DataTest.priorities[2],
      completed: true,
      category: DataTest.categories[1]
    },
    {
      id: 8,
      name: 'Сходить в парк с семьей, пригласить друзей',
      priority: DataTest.priorities[1],
      completed: false,
      category: DataTest.categories[1],
      date: new Date('2019-08-17')
    },
    {
      id: 9,
      name: 'Найти и выучить учебник по квантовой физике',
      completed: false,
      category: DataTest.categories[2]
    },
    {
      id: 10,
      name: 'Сходить на семинар по программированию',
      priority: DataTest.priorities[1],
      completed: true,
      category: DataTest.categories[2],
      date: new Date('2019-06-11')
    },
    {
      id: 11,
      name: 'Найти билеты в Турцию, выбрать отель',
      priority: DataTest.priorities[2],
      completed: false,
      category: DataTest.categories[3]
    },
    {
      id: 12,
      name: 'Приготовить ужин для всей семьи (семга с картошкой)',
      completed: false,
      category: DataTest.categories[5]
    },
    {
      id: 13,
      name: 'Подтянуться 10 раз',
      priority: DataTest.priorities[2],
      completed: false,
      category: DataTest.categories[4],
      date: new Date('2019-03-12')
    },
    {
      id: 14,
      name: 'Пробежать 100 м',
      priority: DataTest.priorities[0],
      completed: true,
      category: DataTest.categories[4]
    },
    {
      id: 15,
      name: 'Организовать детский праздник ',
      completed: false
    },
    {
      id: 16,
      name: 'Сходить на лекцию "Как научиться программировать на Java"',
      priority: DataTest.priorities[1],
      completed: false,
      category: DataTest.categories[2]
    },
    {
      id: 17,
      name: 'Купить продукты на неделю',
      priority: DataTest.priorities[2],
      completed: false,
      category: DataTest.categories[5],
      date: new Date('2019-05-11')
    },
    {
      id: 18,
      name: 'Провести собрание по поводу всех проектов',
      completed: true,
      category: DataTest.categories[0]
    },
    {
      id: 19,
      name: 'Сдать экзамен по Java',
      priority: DataTest.priorities[2],
      completed: true
    },
    {
      id: 20,
      name: 'Положить 100 000 р в банк на депозит',
      priority: DataTest.priorities[3],
      completed: false,
      category: DataTest.categories[6]
    },
    {
      id: 21,
      name: 'Попросить аванс на работе',
      priority: DataTest.priorities[2],
      completed: false,
      category: DataTest.categories[6]
    },
    {
      id: 22,
      name: 'Сдать анализы, проверить гемоглобин',
      priority: DataTest.priorities[3],
      completed: false,
      category: DataTest.categories[8],
      date: new Date('2020-12-11')

    },
    {
      id: 23,
      name: 'Сравнить новый айпад с самсунгом',
      priority: DataTest.priorities[0],
      completed: false,
      category: DataTest.categories[7],
      date: new Date('2019-10-11')

    },
    {
      id: 24,
      name: 'Футбол с сотрудниками',
      priority: DataTest.priorities[0],
      completed: false,
      category: DataTest.categories[4],
      date: new Date('2019-03-17')
    }
  ];
}
