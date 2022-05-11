import { useRouter } from "next/router";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import * as S from "./styles";

interface PaginationProps {
  page: number;
}

export function Pagination({ page }: PaginationProps) {
  const router = useRouter();

  const handleNextPage = () => {
    router.push(`/?page=${page + 1}`);
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      router.push(`/?page=${page - 1}`);
    }
  };

  return (
    <S.Container>
      {page > 0 ? (
        <S.ButtonsContainer
          data-testid="previous-button"
          onClick={handlePreviousPage}
        >
          <S.Button>
            <FiArrowLeft />
          </S.Button>
        </S.ButtonsContainer>
      ) : (
        <S.Spacer />
      )}
      <S.Button data-testid="page">{page + 1}</S.Button>
      <S.ButtonsContainer data-testid="next-button" onClick={handleNextPage}>
        <S.Button>
          <FiArrowRight />
        </S.Button>
      </S.ButtonsContainer>
    </S.Container>
  );
}
