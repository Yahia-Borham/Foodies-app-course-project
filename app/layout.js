import MainHeader from "@/component/Header/MainHeader"
import './globals.css';

export const metadata = {
  title: 'Welcom baby',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <MainHeader />
        {children}
      </body>
    </html>
  );
}
