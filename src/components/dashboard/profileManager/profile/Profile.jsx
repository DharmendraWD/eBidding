import React, { useState, useEffect } from 'react';
import Tabs from './Tabs';
import BasicDetails from './BasicDetails';
import Participation from '../participation/Participation';
import VendorDocuments from '../venderDocuments/VenderDocuments';
import VendorDeclarationForm from '../declaration/VenderDeclaration';
import FinancialInformation from '../finanncialInfo/FinancialInformation';
import LatestClient from '../LatestClient/LatestClienr';
import CapacityInformation from '../capacity/CapacityInformation';
import EligibilityForm from '../eligibility/Eligibility';
import CompanyInfo from '../companyInfo/CompanyInfo';

function Profile() {
 
  // TAB DATA 
  const companyInfoContent = <div>
  <CompanyInfo></CompanyInfo>
  </div>;
  const participationContent = <div>
<Participation></Participation>
  </div>;
const documentsContent = <div>
  <VendorDocuments></VendorDocuments>
</div>;
const declarationContent = <div>
  <VendorDeclarationForm></VendorDeclarationForm>
</div>;
const financialInfoContent = <div>
  <FinancialInformation></FinancialInformation>
</div>;
const latestClientsContent = <div>
  <LatestClient></LatestClient>
</div>;
const certificationContent = <div>
  <LatestClient></LatestClient>

</div>;
const capacityContent = <div>
  <CapacityInformation></CapacityInformation>
</div>;
const eligibilityContent = <div>
  <EligibilityForm></EligibilityForm>
</div>;
  // TAB DATA end



  // tab data heading 
  const profileTabs = [
    { id: 'company-info', label: '1. Company Info', content: companyInfoContent },
    { id: 'participation', label: '2. Participation', content: participationContent },
    { id: 'documents', label: '3. Documents', content: documentsContent },
    { id: 'declaration', label: '4. Declaration', content: declarationContent },
    { id: 'financial-info', label: '5. Financial Info', content: financialInfoContent },
    { id: 'latest-clients', label: '6. Latest Clients', content: latestClientsContent },
    { id: 'certification', label: '7. Certification', content: certificationContent },
    { id: 'capacity', label: '8. Capacity', content: capacityContent },
    { id: 'eligibility', label: '9. Eligibility', content: eligibilityContent },
  ];
  // tab data heading end
  return (
    <div>
      <BasicDetails></BasicDetails>
      <Tabs tabs={profileTabs}></Tabs>
     
    </div>
  );
}

export default Profile;
