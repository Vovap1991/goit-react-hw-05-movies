import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from '../service/service';
import { toast } from 'react-hot-toast';
import { defaultImg } from '../service/service';
import {
  CastContainer,
  CastList,
  CastTitle,
  CastItem,
  CastImg,
  CastItemSubtitle,
  CastItemActorName,
  CastItemCharacterName,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      try {
        const castData = await fetchCastById(movieId);
        const cast = castData.cast;
        if (cast) {
          setCast(cast);
        } else {
          setError(error);
        }
      } catch (error) {
        toast.error('Something went wrong. Please, try again later!');
        setError(error);
      }
    };
    getCast();
  }, [movieId, error]);

  return (
    <CastContainer>
      <CastTitle>Cast</CastTitle>
      <CastList>
        {cast.map(actor => (
          <CastItem key={actor.id}>
            <CastImg
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : defaultImg
              }
              width={250}
              alt={actor.name}
            />
            <CastItemActorName>{actor.name}</CastItemActorName>
            <CastItemCharacterName>
              <CastItemSubtitle>Character:</CastItemSubtitle>{' '}
              {actor.character ? actor.character : 'unavailable'}
            </CastItemCharacterName>
          </CastItem>
        ))}
      </CastList>
    </CastContainer>
  );
};

export default Cast;
