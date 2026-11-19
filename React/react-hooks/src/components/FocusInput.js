import React, {useEffect, useRef} from 'react'

function FocusInput() {

    const inputRef = useRef(null)

    useEffect(() => {
        //focus the input element.
        inputRef.current.focus()
    }, [] )
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default FocusInput
 //third step is to focus method on the input element within the arrpw function, we specify as inputRef.current.focus()