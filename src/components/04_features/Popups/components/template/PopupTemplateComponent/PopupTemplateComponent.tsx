import React from 'react';
import styles from './PopupTemplateComponent.module.scss';
import { PopupTemplateComponentInterface } from './PopupTemplateComponent.interface.ts';

import CloseIcon from '~svg/button/clear.svg';
import { ContactUsFormPopup, ReviewFormPopup, ReviewFullPopup, SuccessMessagePopup } from '../../index.ts';

const PopupTemplateComponent: React.FC<PopupTemplateComponentInterface> = ({ type }) => {

  const popupType = {
    contactForm: <ContactUsFormPopup/>,
    reviewForm: <ReviewFormPopup/>,
    successMessage: <SuccessMessagePopup/>,
    reviewFull: <ReviewFullPopup/>
  };

  const popupContainerStyle = {
    contactForm: styles.popupContainer_form,
    reviewForm: styles.popupContainer_form,
    successMessage: styles.popupContainer_form,
    reviewFull: styles.popupContainer_reviewFull,
  };



/*   const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия попапа
  const [formData, setFormData] = useState({ name: '', email: '', question: '' }); // Состояние для данных формы

  const handleOpenPopup = () => {
    setIsOpen(true); // Открываем попап
  };

  const handleClosePopup = () => {
    setIsOpen(false); // Закрываем попап
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Обновляем данные формы при изменении полей
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику для отправки данных формы на сервер
    console.log(formData);
    setFormData({ name: '', email: '', question: '' }); // Очищаем поля формы после отправки
    handleClosePopup(); // Закрываем попап
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClosePopup(); // Закрываем попап при клике на внешний слой
    }
  };
 */




  return (
    <div className={`${styles.popupOverlay} ${styles.popup_open}`}>
      <div className={`${styles.popupContainer} ${popupContainerStyle[type]}`}>
        <button className={styles.popupCloseButton}>
          <CloseIcon />
        </button>
        {popupType[type]}
      </div>
    </div>
  );
};

export { PopupTemplateComponent };
