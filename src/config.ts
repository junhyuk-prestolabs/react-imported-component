import {isBackend} from "./detectBackend";

const rejectNetwork = (url:string) => url.indexOf('http')!==0;

export const settings = {
  hot: (!!module as any).hot,
  SSR: isBackend,
  fileFilter: rejectNetwork
};

export const setConfiguration = (config: Partial<typeof settings>) => {
  Object.assign(settings, config);
};