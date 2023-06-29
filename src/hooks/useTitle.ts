import { useCallback, useMemo } from 'react';

import Config from 'Config';

type UseTitleType = () => (title?: string | undefined) => void;

const useTitle: UseTitleType = () => {
  const setTitle = useCallback((title?: string) => {
    const appName = Config.app.name ?? 'My React app';
    document.title = title ? `${title} | ${appName}` : appName;
  }, []);

  return useMemo(() => setTitle, [setTitle]);
};

export default useTitle;
