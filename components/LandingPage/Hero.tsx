import React from 'react';
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const t = useTranslations('LandingPage.Hero');

  return (
    <section className="py-20 px-6 text-center" style={{ backgroundColor: '#81edd9' }}>
      <h1 className="text-6xl font-bold mb-6">{t('title')}</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        {t('description')}
      </p>
      <Button variant="default" size="lg" className="bg-black text-white">{t('cta')}</Button>
    </section>
  );
};

export default Hero;
