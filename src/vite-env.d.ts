/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME?: string;
  readonly VITE_API_BASE_URL?: string;
  readonly VITE_API_KEY?: string;
  readonly VITE_API_HASH?: string;
  readonly VITE_API_TS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
