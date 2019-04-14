import { AscCore, ascDefaultTheme, StyledComponents, Theme } from './styles'

import IconButton from './components/IconButton'
import Modal from './components/Modal'
import Portal from './components/Portal'
import Typography from './components/Typography'
import TopBar from './components/TopBar'
import ShareBar from './components/ShareBar'
import ShareButton from './components/ShareButton'
import Button from './components/Button'
import Radio from './components/Radio'
import Focus from './components/Focus'
import ContextMenu from './components/ContextMenu'
import ContextMenuItem from './components/ContextMenu/ContextMenuItem'

import ThemeProvider from './theme'

import IconStyle from './styles/components/IconStyle'

const { Divider, GlobalStyle, ListItem } = AscCore

// Components
export {
  Divider,
  IconStyle,
  Button,
  IconButton,
  Modal,
  Portal,
  ListItem,
  Typography,
  Radio,
  TopBar,
  ShareBar,
  ShareButton,
  Focus,
  ContextMenu,
  ContextMenuItem,
}

export {
  AscCore,
  GlobalStyle,
  StyledComponents,
  Theme,
  ThemeProvider,
  ascDefaultTheme,
}
