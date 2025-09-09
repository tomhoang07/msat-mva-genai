// src/pages/FeaturePage.tsx
import React from 'react';
import { Stack } from '@fluentui/react';
import IntractData  from '../../../assets/Interact with data.svg'
import SourceReference  from '../../../assets/Quick source reference.svg'
import SummarizeContracts  from '../../../assets/Summarize contracts.svg'
import styles from './Cards.module.css'; // Create this CSS module for custom styles

const Cards: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <section className={styles.cards}>
          <FeatureCard

            title="Asking about Data"
            description="Better understand and interpret the results of your MVA dataset."
            icon={<img src = {IntractData} aria-hidden="true" alt="Intract with Data" role="none" aria-label='IntractwithData' aria-labelledby='Cards' style={{ minWidth: 20, minHeight: 22 }} />}
          />
          <FeatureCard

            title="Summarize Key Points"
            description="Quickly review and summarize the key points."
            icon={<img src = {SummarizeContracts} aria-hidden="true" alt="Summarize Contracts" role="none" aria-label='SummarizeContracts' aria-labelledby='Cards'style={{ minWidth: 20, minHeight: 22 }} />}
          />
          <FeatureCard

            title="Quick Data Reference"
            description="Extract the original reference document."
            icon={<img src = {SourceReference} aria-hidden="true" alt="Source Reference" role="none" aria-label='SourceReference' aria-labelledby='Cards' style={{ minWidth: 20, minHeight: 22 }} />}
          />
        </section>
      </main>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div  className={styles.featureCard}>
      <div className={styles.icon}>{icon}</div>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default Cards;
