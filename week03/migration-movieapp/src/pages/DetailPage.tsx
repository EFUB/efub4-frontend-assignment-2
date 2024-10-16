import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { styled } from "styled-components";
import Header from "../components/Header";
import Loading from "../components/Loading";
import MovieInfo from "../components/detailpage/MovieInfo";
import MovieCasts from "../components/detailpage/MovieCasts";
import {Movie} from "../types/movieTypes";

const DetailPage = () => {
  const params = useParams();
  const movieId = params.id; // 영화 id

  const [loading, setLoading] = useState<boolean>(true);
  const [detail, setDetail] = useState<Movie>(); // 영화 상세 정보

  const getMovies = async () => {
    const data = await axios.get(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}&with_cast=true`
    );

    setLoading(false);
    setDetail(data.data.data.movie);
  };

  useEffect(() => {
    getMovies(); // 영화 api 데이터 받아오기
  }, []);

  return (
    <>
      <Header />
      <Wrapper>
        {loading ? (
          <Loading />
        ) : (
          <>
            {detail && <MovieInfo info={detail} />}
            {detail?.cast && <MovieCasts casts={detail.cast} />}
          </>
        )}
      </Wrapper>
    </>
  );
};

export default DetailPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 10%;

  background: var(--background);
  color: var(--font);

  min-height: calc(100vh - 60px);
`;
