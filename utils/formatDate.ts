export const formatDate = (dateString: string, dateFormat?: string): string => {
  if (!dateString) return "";

  const date = new Date(dateString);

  // Checks if date is invalid
  if (isNaN(date.getTime())) return "";

  if (dateFormat === "dd/mm") {
    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "short",
    }).format(date);
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long", // e.g., "April"
    day: "numeric", // e.g., "30"
    year: "numeric", // e.g., "2021"
  }).format(date);
};

export const timeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
};
