import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import { useTranslation } from "@/i18n/LanguageContext";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <main className="py-16 md:py-20">
      <div className="container">
        <SectionHeader title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="mx-auto max-w-lg">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default Contact;
