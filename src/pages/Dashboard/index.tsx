import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="logo" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/17694119?s=460&u=a37e4ff4144c97832de91ed9e40ae8220b9991fb&v=4"
            alt="Perfil Name"
          />
          <div>
            <strong>jonathan/jsstudies</strong>
            <p>description in here</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/17694119?s=460&u=a37e4ff4144c97832de91ed9e40ae8220b9991fb&v=4"
            alt="Perfil Name"
          />
          <div>
            <strong>jonathan/jsstudies</strong>
            <p>description in here</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/17694119?s=460&u=a37e4ff4144c97832de91ed9e40ae8220b9991fb&v=4"
            alt="Perfil Name"
          />
          <div>
            <strong>jonathan/jsstudies</strong>
            <p>description in here</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
