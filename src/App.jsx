import './App.css'
import Header from './components/Header/Header'
import TeachingSection from './components/TeachingSection'
import Differences from './components/Differences'
import IntroSection from './components/introSection'
import TabsSection from './components/TabsSection'
import EffectSection from './components/EffectSection'
import FeedbackSection from './components/FeedbackSection'
import { useState } from 'react'

export default function App() {
  const [visible, setVisible] = useState(true)
  const [tab, setTab] = useState('effect')

  // setTimeout(() => { setVisible(false) }, 3000)

  return (
    <>
      { visible && <Header /> }
      <main>
        <IntroSection />

        <TabsSection
          active={tab}
          onChange={(current) => setTab(current)} />

        {tab === 'main' && (
          <>
            <TeachingSection />
            <Differences />
          </>
        )}

        {tab === 'feedback' && (<FeedbackSection />)}
        {tab === 'effect' && (<EffectSection />)}

      </main>
    </>
  )
}
