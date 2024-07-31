import { Metadata } from "next";
import { metaPersonalAgreement } from "~meta/metadataPages";
import { PersonalAgreementPage } from "~pages/index";

export const metadata: Metadata = {
  title: metaPersonalAgreement.title,
  description: metaPersonalAgreement.description,
  keywords: metaPersonalAgreement.keywords,
};


export default function PagePersonalAgreement() {

  return (
    <PersonalAgreementPage />
  );
}
