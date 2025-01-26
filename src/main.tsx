import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { Dashboard } from './pages/Dashboard';
import { Patients } from './pages/Patients';
import { Appointments } from './pages/Appointments';
import { Inventory } from './pages/Inventory';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { MedicalRecords } from './pages/MedicalRecords';
import { Odontogram } from './pages/Odontogram';
import { Queue } from './pages/Queue';
import { Prescriptions } from './pages/Prescriptions';
import { Cashier } from './pages/Cashier';
import { WhatsApp } from './pages/WhatsApp';
// import { Reminders } from './pages/Reminders';
import { BPJS } from './pages/BPJS';
import { Education } from './pages/Education';
import { Medications } from './pages/Medications';
import { AIAnalysis } from './pages/AIAnalysis';
import { MetaAnalytics } from './pages/MetaAnalytics';
import { Referrals } from './pages/Referrals';
import { Diagnosis } from './pages/Diagnosis';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/medical-records" element={<MedicalRecords />} />
        <Route path="/odontogram" element={<Odontogram />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
        <Route path="/cashier" element={<Cashier />} />
        <Route path="/whatsapp" element={<WhatsApp />} />
        {/* <Route path="/reminders" element={<Reminders />} /> */}
        <Route path="/bpjs" element={<BPJS />} />
        <Route path="/education" element={<Education />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/ai-analysis" element={<AIAnalysis />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/meta-analytics" element={<MetaAnalytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/referrals" element={<Referrals />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
      </Routes>
    </Router>
  </StrictMode>
);
