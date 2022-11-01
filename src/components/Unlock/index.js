import {useState} from 'react'
import {
  BgContainer,
  ImageElement,
  Heading,
  ButtonElement,
} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setUnlock] = useState(false)
  const lockImage = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const imageAlt = isUnlocked ? 'unlock' : 'lock'
  const HeadingText = isUnlocked
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'

  const buttonText = isUnlocked ? 'Lock' : 'Unlock'

  const onClickButton = () => {
    setUnlock(prevIsUnlocked => !prevIsUnlocked)
  }

  return (
    <BgContainer>
      <ImageElement src={lockImage} alt={imageAlt} />
      <Heading>{HeadingText}</Heading>
      <ButtonElement onClick={onClickButton} type="button">
        {buttonText}
      </ButtonElement>
    </BgContainer>
  )
}

export default Unlock
