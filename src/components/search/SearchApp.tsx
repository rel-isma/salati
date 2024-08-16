import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import styles from "./SearchApp.module.css";
import searchIcon from "../../assets/search.svg";
import SuggestionsList from "./SuggestionsList";
import MoroccanCities from "./moroccanCities";

const SearchApp = ({ onCityChange }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState("");
  const wrapperRef = useRef(null);

  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    setCity(value);
    setError("");

    if (value) {
      const filteredCities = MoroccanCities.filter((city) =>
        city.toLowerCase().startsWith(value.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filteredCities);
    } else {
      setSuggestions([]);
    }
  }, []);

  const handleSuggestionClick = useCallback(
    (suggestion) => {
      setCity(suggestion);
      setSuggestions([]);
      setCity("");
      setError("");
      onCityChange(suggestion);
    },
    [onCityChange]
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (city.trim()) {
          if (MoroccanCities.includes(city)) {
            onCityChange(city);
            setSuggestions([]);
            setError("");
            setCity("");
          } else {
            setError(
              "City not found. Please try entering the correct city name."
            );
            setSuggestions([]);
          }
        }
      }
    },
    [city, onCityChange]
  );

  const handleSearchClick = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
    if (!city.trim()) {
      return;
    }
    if (MoroccanCities.includes(city)) {
      onCityChange(city);
      setSuggestions([]);
      setCity("");
      setError("");
    } else {
      setError("City not found. Please try entering the correct city name.");
    }
  }, [city, onCityChange]);

  // Handle clicks outside of the component
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSuggestions([]);
        setError("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const memoizedSuggestionsList = useMemo(
    () =>
      suggestions.length > 0 && (
        <SuggestionsList
          suggestions={suggestions}
          onSuggestionClick={handleSuggestionClick}
        />
      ),
    [suggestions, handleSuggestionClick]
  );

  return (
    <div className={styles.SearchApp} ref={wrapperRef}>
      <input
        className={styles.searchBarInput}
        type="text"
        placeholder="Your city"
        value={city}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
      />
      <button
        className={`${styles.searchBarButton} ${
          isAnimating ? styles.animateClick : ""
        }`}
        onClick={handleSearchClick}
      >
        <img src={searchIcon} alt="Search" />
      </button>

      {memoizedSuggestionsList}
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default SearchApp;
