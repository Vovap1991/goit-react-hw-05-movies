import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import {
  CastContainer,
  CastList,
  CastTitle,
  CastItem,
  CastImg,
  CastItemSubtitle,
  CastItemActorName,
  CastItemCharacterName,
  NoCastMessage,
} from './Cast.styled';
import { Loader } from '../Loader/Loader';
import { fetchCastById } from '../service/service';
import { defaultImg } from '../service/service';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCast = async () => {
      setLoading(true);
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
      setLoading(false);
    };
    getCast();
  }, [movieId, error]);

  if (cast.length === 0) {
    return (
      <div>
        <CastTitle>Cast</CastTitle>
        <NoCastMessage>Unfortunately, cast hasn't been found!</NoCastMessage>
      </div>
    );
  }

  return (
    <CastContainer>
      <CastTitle>Cast</CastTitle>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </CastContainer>
  );
};

export default Cast;
