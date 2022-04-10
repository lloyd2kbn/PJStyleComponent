import {FaTwitter,FaFacebook,FaLinkedin} from 'react-icons/fa';
import { StyledSocialIcons } from './styles/StyledSocialIcons'
function SocialIcon() {
  return (
    <StyledSocialIcons>
    <li>
      <a href='https://twitter.com'>
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href='https://facebook.com'>
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href='https://linkedin.com'>
        <FaLinkedin />
      </a>
    </li>
  </StyledSocialIcons>
  )
}

export default SocialIcon