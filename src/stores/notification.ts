import { ref } from 'vue';
import { defineStore } from 'pinia';
import isEmpty from 'lodash/isEmpty';

interface NotificationProps {
  title: string;
  color: string;
  subtitle?: string;
  multiline?: boolean;
  timeout?: number;
}

export const useNotificationStore = defineStore('notification', () => {
  const show = ref<boolean>(false);
  const notification = ref<NotificationProps>({} as NotificationProps);

  const triggerNotification = (props: NotificationProps) => {
    if (!isEmpty(props)) {
      show.value = true;
      Object.assign(notification.value, props);
    }
  };

  const toggleNotification = (value: boolean = false) => {
    show.value = value;
    if (!value) Object.assign(notification.value, {});
  };

  return { show, notification, triggerNotification, toggleNotification };
});
