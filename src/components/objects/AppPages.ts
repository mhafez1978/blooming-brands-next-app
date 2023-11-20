// If using TypeScript, define the type for the page object
type MyPage = {
  pageId: number;
  pageName: string;
  pageUrl: string;
};

// Define the array of pages
const MyAppPages: MyPage[] = [
  // Use 'const' instead of 'function' or 'class'
  { pageId: 1, pageName: "Home", pageUrl: "/" },
  { pageId: 2, pageName: "About", pageUrl: "/about" },
  { pageId: 3, pageName: "Services", pageUrl: "/services" },
  { pageId: 4, pageName: "Portfolio", pageUrl: "/portfolio" },
  { pageId: 5, pageName: "News", pageUrl: "/news" },
  { pageId: 6, pageName: "Contact", pageUrl: "/contact" },
];

export default MyAppPages;
