import { useState } from 'react';

// Хук useLoadMore використовується для реалізації функціоналу "Завантажити ще" у списку твітів.
// Він приймає початкове значення кількості твітів на сторінці (initialPerPage).

export const useLoadMore = initialPerPage => {
  // Створюємо стан perPage, який зберігатиме поточну кількість твітів на сторінці.
  // Початкове значення встановлюється за допомогою параметра initialPerPage.
  const [perPage, setPerPage] = useState(initialPerPage);

  // Створюємо стан currentPage, який зберігатиме поточний номер сторінки.
  // Початкове значення встановлюється як 1.
  const [currentPage, setCurrentPage] = useState(1);

  // Функція loadMore викликається, коли користувач натискає кнопку "Завантажити ще".
  // Вона збільшує кількість твітів на сторінці на значення initialPerPage і збільшує номер поточної сторінки на 1.
  const loadMore = () => {
    setPerPage(prevPerPage => prevPerPage + initialPerPage);
    setCurrentPage(prevPage => prevPage + 1);
  };

  // Повертаємо об'єкт зі значеннями perPage, currentPage та функцією loadMore, які можуть бути використані в компоненті.
  return { perPage, currentPage, loadMore };
};
