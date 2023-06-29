import { memo, useEffect, useMemo } from 'react';

import { Location, useLocation, useParams } from 'react-router-dom';

import { useCharacters } from 'context/CharactersContext';

import CharacterList from 'components/CharacterList';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Loading from 'components/Loading';

import { getImageUrl } from 'helpers';

import useTitle from 'hooks/useTitle';

import { CharacterType } from 'types/CharacterType';

import {
  CharacterContainer,
  Image,
  ImageContainer,
  InfoContainer,
  TitleText,
} from './style';

type CharacterLocationType = Location & { state: { character: CharacterType } };

const Character: React.FC = () => {
  const {
    character: characterFromContext,
    isLoading,
    error,
    fetchCharacter,
  } = useCharacters();
  const { id } = useParams();
  const { state } = useLocation() as CharacterLocationType;
  const setTitle = useTitle();

  useEffect(() => {
    window.scrollTo(0, 0);
    setTitle('character');

    if (!state?.character) {
      fetchCharacter(Number(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, state?.character]);

  const character = useMemo(
    () => state?.character || characterFromContext,
    [characterFromContext, state?.character],
  );

  return (
    <>
      <Header />
      <main style={{ backgroundColor: 'black' }} className="flex-grow-1">
        {isLoading && <Loading />}
        {error && <h2 className="text-center">{error}</h2>}
        {!isLoading && !error && character && (
          <CharacterContainer>
            <ImageContainer>
              <Image
                className="img-fluid"
                src={getImageUrl(character.thumbnail)}
                alt={character.name}
              />
            </ImageContainer>
            <InfoContainer>
              <TitleText>{character.name}</TitleText>
              <p className="text-light text-center mt-3 mb-5">
                {character.description
                  ? character.description
                  : 'This character is part of the incredible Marvel universe, filled with extraordinary beings and fascinating stories. With a striking presence, their actions and choices influence the course of events and impact the destinies of the characters around them. Their unique and complex personality adds layers to the narrative, making them a vital element in the rich tapestry of Marvel characters. Whether as a valuable ally, a formidable opponent, or a loyal support, they contribute to the depth and diversity of this thrilling universe.'}
              </p>
              {character.comics.available > 0 && (
                <CharacterList item={character.comics} title="Comics" />
              )}
              {character.series.available > 0 && (
                <CharacterList item={character.series} title="Series" />
              )}
              {character.stories.available > 0 && (
                <CharacterList item={character.stories} title="Stories" />
              )}
              {character.events.available > 0 && (
                <CharacterList item={character.events} title="Events" />
              )}
            </InfoContainer>
          </CharacterContainer>
        )}
      </main>
      <Footer />
    </>
  );
};

export default memo(Character);
