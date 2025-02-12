import * as _elizaos_core from '@elizaos/core';
import { AsteraiClient } from '@asterai/client';

declare const getInitAsteraiClient: (agentId: string, publicQueryKey: string) => AsteraiClient;
declare const asteraiPlugin: {
    name: string;
    description: string;
    providers: _elizaos_core.Provider[];
    actions: _elizaos_core.Action[];
    evaluators: any[];
    services: any[];
};

export { asteraiPlugin, asteraiPlugin as default, getInitAsteraiClient };
