import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  max-width: 600px;
  margin: 0 auto;
  height: 800px;
`;

const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

const StyledHeading = styled.h1`
  color: #007bff;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  height: 600px; /* Fixed height for the list */
  overflow-y: auto; /* Enable vertical scrolling */
`;

const StyledListItem = styled.li`
  padding: 10px;
  background-color: ${(props) => (props.isEven ? "#f2f2f2" : "#ffffff")};
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  margin: 0 5px;
  padding: 8px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);

  function handleNext() {
    setPage(page + 20);
  }

  function handlePrevious() {
    setPage(page - 20);
  }

  return (
    <StyledMain>
      <StyledHeader>
        <StyledHeading>Pokemon Api Data with Paging</StyledHeading>
      </StyledHeader>
      <StyledList>
        {pokemon.map(({ name }, index) => (
          <StyledListItem key={name} isEven={index % 2 === 0}>
            {name}
          </StyledListItem>
        ))}
      </StyledList>
      <StyledFooter>
        <StyledButton type="button" hidden={page <= 0} onClick={handlePrevious}>
          Previous Page
        </StyledButton>
        <StyledButton type="button" onClick={handleNext}>
          Next Page
        </StyledButton>
      </StyledFooter>
    </StyledMain>
  );
}
