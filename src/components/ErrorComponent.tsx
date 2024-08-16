import React, { useState } from "react";
import styles from "./ErrorComponent.module.css";

interface ErrorComponentProps {
  error: string;
  isNotFound: boolean;
  onCityChange: (city: string) => void;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({
  error,
  isNotFound,
  onCityChange,
}) => {
  const [newCity, setNewCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCity.trim()) {
      onCityChange(newCity.trim());
    }
  };

  return (
    <div className={styles.errorContainer}>
      <p>{error}</p>
      {isNotFound ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
            placeholder="Enter correct city name"
          />
          <button type="submit">Search</button>
        </form>
      ) : (
        <button
          onClick={() => onCityChange(newCity)}
          className={styles.retryButton}
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorComponent;
