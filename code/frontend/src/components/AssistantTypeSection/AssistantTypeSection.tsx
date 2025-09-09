import React from "react";
import { Stack } from "@fluentui/react";
import Azure from "../../assets/Azure.svg";
import Cards from "../../pages/chat/Cards_contract/Cards";
import styles from "./AssistantTypeSection.module.css";

type AssistantTypeSectionProps = {
  assistantType: string;
  isAssistantAPILoading: boolean;
};

enum assistantTypes {
  default = "default",
  contractAssistant = "data assistant",
}

export const AssistantTypeSection: React.FC<AssistantTypeSectionProps> = ({
  assistantType,
  isAssistantAPILoading,
}) => {
  return (
    <Stack className={styles.chatEmptyState}>
      <img
        src={Azure}
        className={styles.chatIcon}
        aria-hidden="true"
        alt="Lonza MSAT GenAI"
      />
      {assistantType === assistantTypes.contractAssistant ? (
        <>
          <h1 className={styles.chatEmptyStateTitle}>Lonza MSAT MVA-GenAI</h1>
          <h2 className={styles.chatEmptyStateSubtitle}>
            AI-Powered Data Analytics and Assistant
          </h2>
          <Cards />
        </>
      ) : assistantType === assistantTypes.default ? (
        <>
          <h1 className={styles.chatEmptyStateTitle}>
            Chat with your
            <span className={styles.dataText}>&nbsp;Data</span>
          </h1>
          <h2 className={styles.chatEmptyStateSubtitle}>
            This chatbot is configured to answer your questions
          </h2>
        </>
      ) : null}
      {isAssistantAPILoading && (
        <div className={styles.loadingContainer}>
          <div className={styles.loadingIcon}></div>
          <p>Loading...</p>
        </div>
      )}
    </Stack>
  );
};
