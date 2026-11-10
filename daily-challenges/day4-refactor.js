// Day 4: Refactor Challenge Example
// Demonstrates proper error handling, meaningful names, and modular functions.

export async function fetchAndProcessUserData(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user data: ${response.statusText}`);
    }
    const userData = await response.json();
    return formatUserDisplayName(userData);
  } catch (error) {
    console.error("Error processing user data:", error.message);
    return null;
  }
}

function formatUserDisplayName(user) {
  return `${user.name} (${user.email})`;
}
