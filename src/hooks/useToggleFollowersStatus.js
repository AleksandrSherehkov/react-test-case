import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleFollowersStatus } from '@/services/api/tweetsApi';
import { useState } from 'react';

export const useToggleFollowersStatus = (id, isFollowed, followers) => {
  // Отримуємо інстанцію клієнта запитів React Query
  const queryClient = useQueryClient();

  // Стан для збереження стану завантаження мутації
  const [isLoading, setIsLoading] = useState(false);

  // Обчислюємо кількість фоловерів залежно від стану "isFollowed"
  const calcFollowers = isFollowed ? followers - 1 : followers + 1;

  // Використовуємо хук useMutation для створення мутації
  const toggle = useMutation(
    async () => {
      // Встановлюємо стан завантаження на true перед виконанням мутації
      setIsLoading(true);

      // Виконуємо функцію toggleFollowersStatus для зміни статусу фоловерів
      await toggleFollowersStatus(id, !isFollowed, calcFollowers);
    },
    {
      // Визивається, якщо мутація завершиться успішно
      onSuccess: () => {
        // Запускаємо перезавантаження запиту для оновлення даних
        queryClient.invalidateQueries({ queryKey: ['tweets'] });

        // Після успішного виконання мутації встановлюємо стан завантаження на false
        setIsLoading(false);
      },
      // Визивається, якщо мутація завершиться з помилкою
      onError: () => {
        // При помилці також встановлюємо стан завантаження на false
        setIsLoading(false);
      },
    }
  );

  // Повертаємо об'єкт з результатами мутації та станом завантаження
  return { toggle, isLoading };
};
