import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../../lib/api/auth";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled {
    background-color: #a0a0a0;
  }
`;

const ToggleButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    console.log("id:", id);
    console.log("password:", password);
    console.log("nickname", nickname);

    if (id.length < 4 || id.length > 10) {
      alert("아이디는 4글자에서 10글자 이내로만 가능합니다!");
      return;
    }

    if (password.length < 4 || password.length > 15) {
      alert("비밀번호는 4글자에서 15글자 이내로만 가능합니다!");
      return;
    }

    if (nickname.length < 1 || nickname.length > 10) {
      alert("닉네임은 1글자에서 10글자 이내로만 가능합니다!");
      return;
    }

    // API 호출을 진짜로 하는 부분
    const response = await register({
      id: id,
      password: password,
      nickname: nickname,
    });
    // console.log("회원가입 API 응답값 : ", response);
    if (response) {
      confirm("회원가입이 완료되었습니다.");
      navigate("/sign_in");
    }
  };

  return (
    <Container>
      <InputGroup>
        <label htmlFor="id">아이디</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디"
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="nickname">닉네임</label>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임"
        />
      </InputGroup>
      <Button onClick={handleRegister}>회원가입</Button>
      <ToggleButton onClick={() => navigate("/sign_in")}>돌아가기</ToggleButton>
    </Container>
  );
}
