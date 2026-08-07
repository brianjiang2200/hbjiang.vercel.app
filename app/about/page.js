import Base from '../../layouts/Base';
import AboutClient from './AboutClient';

export const metadata = {
  title: 'About',
  description:
    "Software Developer based in Toronto, Canada.",
  openGraph: {
    title: 'About // Brian Jiang',
    description:
      "Brian Jiang is a software developer, chess player, and cat enthusiast based in Toronto, Canada.",
    url: 'https://hbjiang.vercel.app/about',
    images: ['/static/images/about-bw.jpg']
  }
};

export default function About() {
  const description =
    "Brian Jiang is a software developer, chess player, and cat enthusiast based in Toronto, Canada.";

  return (
    <Base
      title="About // Brian Jiang"
      tagline="About // Brian Jiang"
      primaryColor="pink"
      secondaryColor="purple"
    >
      <AboutClient description={description} />
    </Base>
  );
}
