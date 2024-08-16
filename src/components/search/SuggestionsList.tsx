import styles from "./SuggestionsList.module.css"; // Adjust the path according to your project structure

const SuggestionsList = ({ suggestions, onSuggestionClick }) => {
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
