
import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { BackGround, Container, TitleTxt, Form, FormHeader, FormBody, InputWrapper, InputField, Icon, DropdownWrapper, DropdownField, SendButton, Modal, ModalButton, Overlay } from './AppStyles';







function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [seminar, setSeminar] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');


  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      setModalMessage('Пожалуйста, введите ваше имя!');
      setShowModal(true);
    } else if (!isValidEmail(email)) {
      setModalMessage('Некорректный email! Пожалуйста, введите корректный адрес электронной почты.');
      setShowModal(true);
    } else if (!seminar) {
      setModalMessage('Пожалуйста, выберите семинар!');
      setShowModal(true);
    } else {
      handleSubmitEmail();
      setModalMessage('Все хорошо! Заявка успешно отправлена.');
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmitEmail = () => {
    const templateParams = {
      to_email: email,
      from_name: 'Семинарские занятия PBD',
      message: `Поздравляю ${name} с возможностью поучаствовать в семинаре: ${seminar}`,
    };

    emailjs.send('service_qzux08h', 'template_2whur7d', templateParams, '2rlgTcQx3apiQIY8F')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <BackGround>
      <Container>
        <TitleTxt>Отправить заявку на участие в семинаре</TitleTxt>
        <Form>
          <FormHeader>Форма обратной связи</FormHeader>
          <FormBody>
            <InputWrapper>
              <Icon>
                <img src="/User.png" alt="user" width="20px" height="20px" />
              </Icon>
              <InputField
                type="text"
                placeholder="Введите ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper>
              <Icon>
                <img src="/Mail.png" alt="email" width="20px" height="20px" />
              </Icon>
              <InputField
                type="email"
                placeholder="Введите вашу почту"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputWrapper>

            <DropdownWrapper>
              <DropdownField value={seminar} onChange={(e) => setSeminar(e.target.value)}>  {/* Обновляем состояние семинара */}
                <option value="">Выбрать</option>
                <option value="Семинар 1">Семинар 1</option>
                <option value="Семинар 2">Семинар 2</option>
                <option value="Семинар 3">Семинар 3</option>
              </DropdownField>
            </DropdownWrapper>

            <SendButton onClick={handleSubmit}>Отправить</SendButton>
          </FormBody>
        </Form>
      </Container>

      {/* Модалка */}
      {showModal && (
        <>
          <Overlay onClick={closeModal} />
          <Modal>
            <p>{modalMessage}</p>
            <ModalButton onClick={closeModal}>Закрыть</ModalButton>
          </Modal>
        </>
      )}
    </BackGround>
  );
}

export default App;
