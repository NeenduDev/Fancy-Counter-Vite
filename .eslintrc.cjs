module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "react-app", // Use CRA's default ESLint configuration
    "react-app/jest", // Include Jest rules (optional, if you're using Jest)
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "detect" } },
  rules: {
    // Disable or relax rules for a more CRA-like experience
    "react/prop-types": "off", // Disable PropTypes validation
    "react/react-in-jsx-scope": "off", // Not needed in modern React
    "jsx-a11y/no-autofocus": "off", // Relax accessibility rules
    "no-unused-vars": "warn", // Show warnings instead of errors for unused variables
    "no-console": "warn", // Allow console logs but show warnings
    "no-debugger": "warn", // Allow debugger but show warnings
  },
};
