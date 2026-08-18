import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://inlinebase.com";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/industries`, lastModified: new Date() },
    { url: `${baseUrl}/portfolio`, lastModified: new Date() },
    { url: `${baseUrl}/portfolio/medical`, lastModified: new Date() },
    { url: `${baseUrl}/portfolio/restaurant`, lastModified: new Date() },
    { url: `${baseUrl}/portfolio/resort`, lastModified: new Date() },
    { url: `${baseUrl}/portfolio/law-firm`, lastModified: new Date() },
    { url: `${baseUrl}/process`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];
}
