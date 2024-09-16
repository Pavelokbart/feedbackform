
import styled from 'styled-components';
export const BackGround = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #4682b4 0%, #b0c4de 100%);


`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  
`;

export const TitleTxt = styled.div`
  font-size: 32px;
  
  font-family: "PT Sans", sans-serif;
  font-weight: 600;
  color: white;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }

`;

export const Form = styled.div`
  margin-top: 20px;
  max-width: 450px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    max-width: 350px;
  }
`;

export const FormHeader = styled.div`
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

export const FormBody = styled.div`
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
    height: 300px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  
`;

export const InputField = styled.input`
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
    width: 280px;
  }
`;

export const Icon = styled.div`
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

export const DropdownWrapper = styled.div`
  position: relative;
  
  @media (max-width: 480px) {
    height: 45px;
    font-size: 14px;
     
  }
`;

export const DropdownField = styled.select`
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
    width: 320px;
   
  }
`;

export const SendButton = styled.button`
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
  @media (max-width: 480px) {
    height: 45px;
    font-size: 16px;
    width: 320px;
   
  }
`;

export const Modal = styled.div`
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

export const ModalButton = styled.button`
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

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;
