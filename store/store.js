import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import patientReducer from '../features/patients/patientSlice'
import clinicianReducer from '../features/clinicians/clinicianSlice'
import referralReducer from '../features/referrals/refferralSlice'
import statsRedcuer from '../features/stats/statSlice'

export const store =  configureStore({
    reducer: {
        auth: authReducer,
        patient: patientReducer,
        clinician: clinicianReducer,
        referral: referralReducer,
        stat: statsRedcuer,
    }
})