import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';



const BackGround = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #d4fc79 0%, #96e6a9 100%);
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  
`;

const TitleTxt = styled.div`
  font-size: 32px;
  
  font-family: "PT Sans", sans-serif;
  font-weight: 600;
  color: gray;
  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }

`;

const Form = styled.div`
  margin-top: 20px;
  max-width: 450px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const FormHeader = styled.div`
  background-color: #007bff;
  padding: 20px;
  color: white;
  font-family: "PT Sans", sans-serif;
  font-size: 20px;
  font-weight: bold;  
  @media (max-width: 768px) {
    padding: 15px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 16px;
  }
`;

const FormBody = styled.div`
  padding-top: 30px;
  background-color: white;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-family: "PT Sans", sans-serif;
  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  
`;

const InputField = styled.input`
  width: 330px;
  height: 50px;
  padding-left: 40px;
  border: 2px solid #ccc;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
  @media (max-width: 480px) {
    height: 45px;
    font-size: 14px;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  font-size: 18px;
  color: #ccc;
  @media (max-width: 480px) {
    left: 10px;
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  width: 370px;
  height: 50px;
  @media (max-width: 480px) {
    height: 45px;
    font-size: 14px;
  }
`;

const DropdownField = styled.select`
  width: 370px;
  height: 50px;
  padding: 12px;
  border: 2px solid #ccc;
  border-radius: 25px;
  font-size: 16px;
  appearance: none;

  @media (max-width: 480px) {
    height: 45px;
    font-size: 16px;
  }
`;

const SendButton = styled.button`
  width: 370px;
  height: 50px;
  background-color: #405df8;
  font-size: 17px;
  font-family: "PT Sans", sans-serif;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 25px;
  cursor: pointer;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  text-align: center;
  border-radius: 10px;
  @media (max-width: 480px) {
    width: 250px;
  }
`;

const ModalButton = styled.button`
  margin-top: 20px;
  background-color: #405df8;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 480px) {
    padding: 8px 16px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;

// Основной компонент
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [seminar, setSeminar] = useState('');  // Добавляем состояние для семинара
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Валидация email с помощью регулярного выражения
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
