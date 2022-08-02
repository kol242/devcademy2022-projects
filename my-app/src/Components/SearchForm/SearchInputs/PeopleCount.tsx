import React from 'react'

const PeopleCount = React.forwardRef((props, ref: React.Ref<HTMLInputElement>) => {
  return (
    <div className="input-wrapper">
        <label>How many people?</label>
        <input ref={ref} type="text" />
    </div>
  )
})

export default PeopleCount