import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-6">
      <p>© {new Date().getFullYear()} MyApp. All Rights Reserved.</p>
    </footer>
  );
}
