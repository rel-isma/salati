import React from "react";
import styles from "./SuggestionsList.module.css";
interface SuggestionsListProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
}

const SuggestionsList: React.FC<SuggestionsListProps> = ({
  suggestions,
  onSuggestionClick,
}) => {
  return (
    <ul className={styles.suggestionsList}>
      {suggestions.map((suggestion) => (
        <li
          key={suggestion}
          className={styles.suggestionItem}
          onClick={() => onSuggestionClick(suggestion)}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

export default SuggestionsList;
