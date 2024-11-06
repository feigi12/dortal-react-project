import { createSlice } from '@reduxjs/toolkit';

const insuranceData = [
    {
        industry: "רכב",
        product: "פוליסת חיים",
        insuredName: "יצחק בן אברהם",
        licenseNumber: "1234567",
        id: "123456789",
        proposalDate: "01-01-2024",
        insuranceStartDate: "01-02-2024",
        policyNumber: "987654321",
        sentToCustomer: "כן",
        collective:"חברת חשמל"
    },
    {
        industry: "רכב",
        product: "פוליסת חיים",
        insuredName: "יצחק בן אברהם",
        licenseNumber: "1234567",
        id: "123456789",
        proposalDate: "01-01-2024",
        insuranceStartDate: "01-02-2024",
        policyNumber: "987654321",
        sentToCustomer: "כן",
        collective:"חברת חשמל"
    },
    {
        industry: "ביטוח בריאות",
        product: "פוליסת חיים",
        insuredName: "יצחק בן אברהם",
        licenseNumber: "1234567",
        id: "123456789",
        proposalDate: "01-01-2024",
        insuranceStartDate: "01-02-2024",
        policyNumber: "987654321",
        sentToCustomer: "לא",
        collective:"חברת חשמל"
    },
    {
        industry: "רכב",
        product: "פוליסת חיים",
        insuredName: "יצחק בן אברהם",
        licenseNumber: "1234567",
        id: "123456789",
        proposalDate: "01-01-2024",
        insuranceStartDate: "01-02-2024",
        policyNumber: "987654321",
        sentToCustomer: "לא",
        collective:"חברת חשמל"
    },
    {
        industry: "רכב",
        product: "פוליסת חיים",
        insuredName: "יצחק בן אברהם",
        licenseNumber: "1234567",
        id: "123456789",
        proposalDate: "01-01-2024",
        insuranceStartDate: "01-02-2024",
        policyNumber: "987654321",
        sentToCustomer: "כן",
        collective:"חברת חשמל"
    },
    {
        industry: "רכב",
        product: "פוליסת חיים",
        insuredName: "יצחק בן אברהם",
        licenseNumber: "1234567",
        id: "123456789",
        proposalDate: "01-01-2024",
        insuranceStartDate: "01-02-2024",
        policyNumber: "987654321",
        sentToCustomer: "לא",
        collective:"חברת חשמל"
    },
];
const otherInsuranceData = [
    {
        industry: "ביטוח בריאות",
        product: "פוליסת חיים",
        insuredName: "יצחק בן אברהם",
        licenseNumber: "1234567",
        id: "123456789",
        proposalDate: "01-01-2024",
        insuranceStartDate: "01-02-2024",
        policyNumber: "987654321",
        sentToCustomer: "כן",
        collective:"חברת חשמל"
    },
];

const initialState = [
    {
        name: 'ישראל ישראלי',
        id: 123456,
        policies: insuranceData,
        collective:"חברת חשמל"
    },
    {
        name: 'יוסף כהן',
        id: 654321,
        policies: otherInsuranceData,
        collective:"חברת חשמל"
    }
];

const agentSlice = createSlice({
    name: 'agent',
    initialState,

    reducers: {
        setPolicies: (state, action) => action.payload,
        addPolicy: (state, action) => { state.push(action.payload); },
        deletePolicy: (state, action) => {
            return state.filter(policy => policy.id !== action.payload);
        }
    }
});
export const selectInsurance = (state) => state.agent.policies;
export const { setPolicies, addPolicy, deletePolicy } = agentSlice.actions;
export default agentSlice.reducer;
