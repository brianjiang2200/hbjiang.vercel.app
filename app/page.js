import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { PostContent, PostMain } from '../components/Post';
import ShortcutHome from '../components/ShortcutHome';
import { Wrapper } from '../components/Wrapper';
import { getPersonJsonLd } from '../lib/json-ld';

export const metadata = {
  title: 'Brian Jiang',
  description: 'Software Developer. Chess Master. Cat Enthusiast.',
  openGraph: {
    title: 'Brian Jiang',
    description: 'Software Developer. Chess Master. Cat Enthusiast.',
    url: 'https://hbjiang.vercel.app',
    images: ['/static/images/home-bw.jpg']
  }
};

export default function Index() {
  const title = 'Brian Jiang';
  const description = 'Software Developer. Chess Master. Cat Enthusiast.';

  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPersonJsonLd())
        }}
        key="person-jsonld"
      />
      <Navbar />
      <PostMain className="mx-auto flex items-start md:w-200">
        <PostContent className="mb-5 p-0!">
          <div className="mx-5 mt-64 flex w-full max-w-190 flex-col items-start">
            <h1>{title}</h1>
            <p className="mt-0">
              <strong>
                Always exploring, learning, and refining.
              </strong>
              <br />
              {description}
            </p>
            <ShortcutHome />
          </div>
        </PostContent>
      </PostMain>
      <Footer />
    </Wrapper>
  );
}
