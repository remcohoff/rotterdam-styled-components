import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@datapunt/asc-core'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import {
  Card,
  CardContent,
  CardMedia,
  CardContainer,
  Heading,
  Paragraph,
  Image,
  Row,
  Column,
  Tag,
  Link,
  themeColor,
  breakpoint,
  styles,
} from '../../..'
import RowStyle from '../../Grid/RowStyle'
import { LoadingInterface } from '../../shared/types'

const SpecialCardContainer = styled(CardContainer)`
  ${/* sc-selector */ styles.ColumnStyle}:first-child > ${styles.LinkStyle} {
     border-top: ${themeColor('tint', 'level3')} 1px solid;
  }

    @media screen and ${breakpoint('min-width', 'tabletM')} {
    ${/* sc-selector */ styles.ColumnStyle}:nth-child(2) > ${styles.LinkStyle} {
      border-top: ${themeColor('tint', 'level3')} 1px solid;
    }
  }

  @media screen and ${breakpoint('min-width', 'laptop')} {
    ${/* sc-selector */ styles.ColumnStyle}:nth-child(3) > ${styles.LinkStyle} {
      border-top: ${themeColor('tint', 'level3')} 1px solid;
    }
  }

  ${/* sc-selector */ styles.ColumnStyle} > ${styles.LinkStyle} {
    border-bottom: ${themeColor('tint', 'level3')} 1px solid;
    width: 100%;
    min-height: 66px; 

    &:hover > ${styles.CardStyle} 
      > ${styles.CardContentStyle} 
      > ${styles.HeadingStyle} {
        color: ${themeColor('secondary')};
        text-decoration: underline;
    }
  }
  
  ${styles.CardStyle} {
    background: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 8px 0;
    margin: 24px 8px!important;
  }

  ${styles.CardContentStyle} {
     padding: 0;
     margin-right: 16px;
  }

  ${styles.CardMediaWrapperStyle} {
    max-width: 80px;
    align-self: flex-start;
  }

  ${styles.TagStyle} {
    display: inline;
    margin-right: 5px;
    background-color: ${color('tint', 'level3')};
    padding: 2px;
  }

  ${RowStyle} > ${/* sc-selector */ styles.LinkStyle}:last-child {
    margin-top: 24px;
    padding: 8px 3px 8px 0;
  }
`

const CardSpecialsSubtiltle = styled(Heading)`
  margin-top: 48px;

  @media screen and ${breakpoint('max-width', 'tabletM')} {
    margin-top: 48px;
    margin-bottom: 16px;
  }

  @media screen and ${breakpoint('max-width', 'laptopL')} {
    margin-top: 72px;
    margin-bottom: 16px;
  }

  @media screen and ${breakpoint('min-width', 'laptopL')} {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`

// eslint-disable-next-line import/prefer-default-export
export const DataportaalCardSpecials: React.FC<LoadingInterface> = ({
  loading,
}) => (
  <SpecialCardContainer>
    <Row hasMargin={false}>
      <Column
        wrap
        span={{ small: 1, medium: 2, big: 6, large: 12, xLarge: 12 }}
      >
        <CardSpecialsSubtiltle $as="h1">In Beeld</CardSpecialsSubtiltle>
      </Column>
    </Row>
    <Row hasMargin={false}>
      <Column wrap span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}>
        <Link href="/" linkType="blank">
          <Card horizontal loading={loading}>
            <CardContent>
              <Heading $as="h4" gutterBottom={8}>
                Veiligheidsindex
              </Heading>
              <Paragraph>
                <Tag>Dashboard</Tag>
                Hoe veilig is mijn buurt vergeleken met andere buurten en met
                voorgaande perioden?
              </Paragraph>
            </CardContent>
            <CardMedia>
              <Image
                src="https://picsum.photos/100/?random=1"
                alt="stadsloket"
                square
              />
            </CardMedia>
          </Card>
        </Link>
      </Column>
      <Column wrap span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}>
        <Link href="/" linkType="blank">
          <Card horizontal loading={loading}>
            <CardContent>
              <Heading $as="h4" gutterBottom={8}>
                Veiligheidsindex
              </Heading>
              <Paragraph>
                <Tag>Dashboard</Tag>
                Sub max 3 regels 14/17 #000000 Hoe veilig is mijn buurt
                vergelek…
              </Paragraph>
            </CardContent>
            <CardMedia>
              <Image
                src="https://picsum.photos/100/?random=2"
                alt="stadsloket"
                square
              />
            </CardMedia>
          </Card>
        </Link>
      </Column>
      <Column wrap span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}>
        <Link href="/" linkType="blank">
          <Card horizontal loading={loading}>
            <CardContent>
              <Heading $as="h4" gutterBottom={8}>
                Veiligheidsindex titel 16/20
              </Heading>
              <Paragraph>
                Sub max 3 regels 14/17 #000000 Hoe veilig is mijn buurt
                vergelek…
              </Paragraph>
            </CardContent>
            <CardMedia>
              <Image
                src="https://picsum.photos/100/?random=3"
                alt="stadsloket"
                square
              />
            </CardMedia>
          </Card>
        </Link>
      </Column>
      <Column wrap span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}>
        <Link href="/" linkType="blank">
          <Card horizontal loading={loading}>
            <CardContent>
              <Heading $as="h4" gutterBottom={8}>
                Veiligheidsindex titel 16/20
              </Heading>
              <Paragraph>
                <Tag>Dashboard</Tag>
                Sub max 3 regels 14/17 #000000 Hoe veilig is mijn buurt
                vergelek…
              </Paragraph>
            </CardContent>
            <CardMedia>
              <Image
                src="https://picsum.photos/100/?random=4"
                alt="stadsloket"
                square
              />
            </CardMedia>
          </Card>
        </Link>
      </Column>
      <Column wrap span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}>
        <Link href="/" linkType="blank">
          <Card horizontal loading={loading}>
            <CardContent>
              <Heading $as="h4" gutterBottom={8}>
                Veiligheidsindex titel 16/20
              </Heading>
              <Paragraph>
                Sub max 3 regels 14/17 #000000 Hoe veilig is mijn buurt
                vergelek…
              </Paragraph>
            </CardContent>
            <CardMedia>
              <Image
                src="https://picsum.photos/100/?random=5"
                alt="stadsloket"
                square
              />
            </CardMedia>
          </Card>
        </Link>
      </Column>
      <Column wrap span={{ small: 1, medium: 2, big: 3, large: 4, xLarge: 4 }}>
        <Link href="/" linkType="blank">
          <Card horizontal loading={loading}>
            <CardContent>
              <Heading $as="h4" gutterBottom={8}>
                Veiligheidsindex titel 16/20
              </Heading>
              <Paragraph>
                Sub max 3 regels 14/17 #000000 Hoe veilig is mijn buurt
                vergelek…
              </Paragraph>
            </CardContent>
            <CardMedia>
              <Image
                src="https://picsum.photos/100/?random=6"
                alt="stadsloket"
                square
              />
            </CardMedia>
          </Card>
        </Link>
      </Column>
      <Link linkType="with-chevron" href="/">
        Bekijk overzicht
      </Link>
    </Row>
  </SpecialCardContainer>
)

storiesOf('Atoms/Card/Implementation', module)
  .addDecorator(storyFn => <div style={{ padding: '40px 0' }}>{storyFn()}</div>)
  .addDecorator(withKnobs)
  .add('Dataportaal "Specials"', () => (
    <DataportaalCardSpecials loading={boolean('loading', false)} />
  ))
