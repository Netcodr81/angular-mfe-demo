import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'todo',
  exposes: {
    './Routes': 'todo/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
