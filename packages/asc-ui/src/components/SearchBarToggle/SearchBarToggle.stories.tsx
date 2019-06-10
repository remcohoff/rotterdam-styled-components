import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { css } from '@datapunt/asc-core'
import SearchBarToggle from './SearchBarToggle'

storiesOf('Composed/SearchBarToggle', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('default', () => (
    <SearchBarToggle
      css={css`
        position: relative;
      `}
      onWatchValue={value => {
        action(`input value changed: ${value}`)
      }}
      onSubmit={() => {
        action('submit')
      }}
    />
  ))
