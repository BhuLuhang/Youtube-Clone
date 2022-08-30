import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/userSlice';
import { useState } from 'react';

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({theme}) => theme.bgLighter};;
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Input = styled.input`
  width:100%;
  background-color: transparent;
  outline: none;
  border: none;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;

  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({theme}) => theme.text};;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
  cursor: pointer;
  position: relative;
`;

const Signout =styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  cursor: pointer;
  padding: 5px;
  border: 1px solid ${({theme}) => theme.text};
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

function Navbar() {
  const {currentUser} = useSelector(state=>state.user);
  const [signout, Setsignout] = useState(false);
  const dispatch = useDispatch();
  const popSignout = ()=>{
    Setsignout(!signout);
  };

  const handleSignout = ()=>{
    Setsignout(false);
    dispatch(logout());
  }

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'/>
          <SearchOutlinedIcon />
        </Search>
        {currentUser ? (
          <User>
            <VideoCallOutlinedIcon />
            <Avatar src={currentUser.img} onClick={popSignout}/>
            {signout && <Signout onClick={handleSignout}>Sign out</Signout>}
            {currentUser.name}
          </User>
        ) : (
        <Link to="/signin" style={{textDecoration:"none", color: "inherit" }}>
        <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
        </Button>
        </Link>
        )}
      </Wrapper>
    </Container>
  )
}

export default Navbar