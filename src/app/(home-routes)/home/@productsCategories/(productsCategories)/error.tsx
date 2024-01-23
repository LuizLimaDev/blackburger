"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  return <p className="text-center">{error.message}</p>;
}
