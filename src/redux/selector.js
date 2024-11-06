import { createSelector } from 'reselect';

export const selectUserWithAgent = createSelector(
    [(state) => state.agent, (state) => state.user],
    (agents, user) => {
        const agent = agents.find(agent => agent.id === user.insuranceAgent);
        return {
            ...user,
            insuranceAgent: agent || null
        };
    }
);
