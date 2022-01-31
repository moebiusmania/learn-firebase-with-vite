/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APPID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
