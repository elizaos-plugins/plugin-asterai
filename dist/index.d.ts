import { AsteraiClient } from '@asterai/client';

declare const getInitAsteraiClient: (agentId: string, publicQueryKey: string) => AsteraiClient;
declare const asteraiPlugin: {
    name: string;
    description: string;
    providers: Provider[];
    actions: Action[];
    evaluators: any[];
    services: any[];
};

export { asteraiPlugin, asteraiPlugin as default, getInitAsteraiClient };
