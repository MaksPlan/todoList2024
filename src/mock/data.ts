export interface IData {
    completed: boolean;
    title: string;
    id: number;
    userId?: number
    descrpt?: string;
    category?: string;
    dateComplity?: string;
    dateCreate?: string;

}

const data: IData[] = [
    {
        title: 'modal window',
        id: 1,
        descrpt: 'modal window for card with click open',
        completed: false,
        category: 'must do',
        dateCreate: '',
        dateComplity: '',
    },
    {
        title: 'дизайн карточи и ее эде менстов',
        id: 2,
        descrpt: 'испарвить дизайн списком на гридах, добавить все элементы по ТЗ',
        completed: true,
        category: 'must do',
        dateCreate: '',
        dateComplity: '',
    },
    {
        title: 'сделать фильтрацию по описанию/ названию задачи',
        id: 3,
        descrpt: 'фильтрация массива обьектов, пагинация под вопросом. Может быть сделать свой БД или поключить сторонний для обьема данных?',
        completed: false,
        category: 'must do',
        dateCreate: '',
        dateComplity: '',
    },
    {
        title: 'фильтрация по приоритету, категории',
        id: 4,
        descrpt: 'фильтрация по приоритету, категории (селектор, даже несколько тип атрибута поиска и сам атрибут)',
        completed: false,
        category: 'must do',
        dateCreate: '',
        dateComplity: '',
    },
    {
        title: 'виджет с календарем',
        id: 5,
        descrpt: 'сделать компонент календаря, привязать к нему логику и маршрут, чтобы при выборе даты он показывал список актуальных заадач на данный день',
        completed: false,
        category: 'must do',
        dateCreate: '',
        dateComplity: '',
    }


];

export default data;