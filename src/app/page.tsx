import { Card } from "./_components/card";
import * as stylex from '@stylexjs/stylex';

export default function Home() {
  return (
    <main {...stylex.props(styles.container)}>
      <Card />
    </main>
  );
}

const styles = stylex.create({
  container: {
    display: 'grid',
    placeContent: 'center',
    minHeight: stylex.firstThatWorks('100dvh', '100vh')
  }
})
