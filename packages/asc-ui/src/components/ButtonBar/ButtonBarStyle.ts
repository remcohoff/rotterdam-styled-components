import styled from '@datapunt/asc-core'

export type Props = {
  padding?: number
}

const ButtonBarStyle = styled.div<Props>`
  display: flex;
  ${({ padding }) => `padding: ${padding}px;`}

  & > * {
    margin-right: 5px;
  }
`

export default ButtonBarStyle
