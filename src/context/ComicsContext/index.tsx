import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import Api from 'services/Api';

import { ComicType } from 'types/ComicType';

interface IContextProps {
  comics: ComicType[];
  comic: ComicType | null;
  isLoading: boolean;
  totalPages: number;
  currentPage: number;
  error: string | null;
  fetchComic: (id: number | string) => Promise<void>;
  fetchComics: (page: number, search?: string) => Promise<void>;
}

interface IComicsProviderProps {
  children: React.ReactNode;
}

export const ReactContext = createContext<IContextProps>({} as IContextProps);

export const ComicsProvider: React.FC<IComicsProviderProps> = ({
  children,
}) => {
  const [comics, setComics] = useState<ComicType[]>([]);
  const [comic, setComic] = useState<ComicType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const fetchComics = useCallback(async (page: number, search?: string) => {
    const limit = 36;
    const offset = (page - 1) * limit;

    setCurrentPage(page);
    setIsLoading(true);
    setError(null);

    const params = {
      offset,
      limit,
      titleStartsWith: search?.length ? search : undefined,
    };

    try {
      const response = await Api.get('/comics', {
        params,
      });
      setComics(response.data.data.results);
      setTotalPages(Math.ceil(response.data.data.total / limit));
    } catch {
      // eslint-disable-next-line no-console
      setError('Falha no carregamento da API');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchComic = useCallback(async (id: number | string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await Api.get(`/comics/${id}`);
      setComic(response.data.data.results[0]);
    } catch {
      // eslint-disable-next-line no-console
      setError('Falha no carregamento da API');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          comics,
          comic,
          isLoading,
          totalPages,
          currentPage,
          error,
          fetchComics,
          fetchComic,
        }),
        [
          comics,
          comic,
          isLoading,
          totalPages,
          currentPage,
          error,
          fetchComics,
          fetchComic,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  );
};

export const useComics = (): IContextProps => {
  const context = useContext(ReactContext);

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useComics must be within ComicsProvider');
  }

  return context;
};
