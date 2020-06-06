import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Title, Form, Repositories, Error } from './styles';
import RepositoryModel from '../../models/RepositoryModel';
import logoImg from '../../assets/logo.svg';
import { api } from '../../services/api';

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<RepositoryModel[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepositoryAsync(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<RepositoryModel>(`/repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch {
      setInputError('Erro na busca por esse repositório');
    }
  }

  return (
    <>
      <img src={logoImg} alt="logo" />
      <Title>Explore repositórios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepositoryAsync}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do usuário/repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(repository => {
          return (
            <Link
              key={repository.full_name}
              to={`/repository/${repository.full_name}`}
            >
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
              <FiChevronRight size={20} />
            </Link>
          );
        })}
      </Repositories>
    </>
  );
};

export default Dashboard;
