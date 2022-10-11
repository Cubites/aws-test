import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Main = () => {
  const [ResponseMain, setResponseMain] = useState("");
  const navigate = useNavigate();

  const MoveHttp = (e) => {
    e.preventDefault();
    navigate('/http');
  }

  const MoveHttps = (e) => {
    e.preventDefault();
    navigate('/https');
  }

  const RequestServer = async () => {
    const url = process.env.REACT_APP_NODE_ENV === 'production' ? `http://${process.env.REACT_APP_DNS_NAME}:4000/api/main` : '/api/main';
    // const url = `http://${process.env.REACT_APP_DNS_NAME}:4000/api/main`;
    console.log('url : ', url);
    console.log('HTTP 통신(DNS)');
    try{
      const answer = await axios.post(url);
      setResponseMain(answer.data.contents);

    }catch(err){
      console.log(err);
      setResponseMain("HTTP 통신(DNS) 에러");
    }
  }

  return (
    <MainContainer>
      <Title>Main Page입니다.</Title>
      <MoveBox>
        <PageMove onClick={MoveHttp}>HTTP(IP) page로 이동</PageMove>
        <PageMove onClick={MoveHttps}>HTTPS page로 이동</PageMove>
      </MoveBox>
      <CheckServerButton onClick={RequestServer}>서버 통신 테스트 (HTTP-DNS)</CheckServerButton>
      <ServerResponse>{ResponseMain}</ServerResponse>
      <ResetText onClick={() => setResponseMain("")}>Response 초기화</ResetText>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 10vh;
  padding-left: 20vw;
  padding-right: 20vw;
  background-color: #8fddd3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
  margin-bottom: 10vh;
`;
const MoveBox = styled.div`
  width: 100%;
  height: 10vh;
  text-align: center;
  margin-bottom: 10vh;
`;
const PageMove = styled.button`
  width: 10vw;
  height: 10vh;
  border-radius: 5vh;
  margin-left: 1vw;
  margin-right: 1vw;
`;
const CheckServerButton = styled.button`
  width: 20vw;
  height: 10vh;
  border-radius: 5vh;
  margin-left: 1vw;
  margin-right: 1vw;
  margin-bottom: 5vh;
`;
const ServerResponse = styled.p`
  width: 20vw;
  height: 5vh;
  border-radius: 1vh;
  margin-bottom: 3vh;
  background-color: white;
`;
const ResetText = styled.button`
  width: 10vw;
  height: 5vh;
`;

export default Main