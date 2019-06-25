import React from 'react'
import MenuList from '../MenuList/MenuList'
import MenuContext from '../MenuContext'
import useFocussedChildren from '../useFocussedChildren'
import useKeysToFocus from '../useKeysToFocus'
import MenuToggleStyle, { Props } from './MenuToggleStyle'
import Toggle from '../../Toggle/Toggle'

const MenuToggle: React.FC<Props> = ({
  children: childrenProps,
  onExpand,
  align = 'left',
  ...otherProps
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [activeChild, setActiveChild] = React.useState(0)
  const { children, filteredChildren } = useFocussedChildren(childrenProps)
  const toggleMenu = () => {
    setActiveChild(0)
    setMenuOpen(!menuOpen)
  }

  const { onKeyDown } = useKeysToFocus(
    filteredChildren,
    activeChild,
    setActiveChild,
    setMenuOpen,
  )

  const onClose = () => {
    setActiveChild(0)
    setMenuOpen(false)
  }

  React.useEffect(() => {
    if (onExpand) {
      onExpand(menuOpen)
    }
  }, [menuOpen])

  return (
    <MenuContext.Provider
      value={{
        activeChild,
        setActiveToggleChild: setActiveChild,
        underFlyOutMenu: false,
        hasToggle: true,
      }}
    >
      <Toggle
        as={MenuToggleStyle}
        onClose={onClose}
        onClick={toggleMenu}
        onKeyDown={onKeyDown}
        align={align}
        open={menuOpen}
        {...otherProps}
      >
        <MenuList>{children}</MenuList>
      </Toggle>
    </MenuContext.Provider>
  )
}

MenuToggle.defaultProps = {
  align: 'left',
}

export default MenuToggle
