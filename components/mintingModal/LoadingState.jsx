import { GridLoader } from 'react-spinners'
import { css } from '@emotion/react'

const cssOverride = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`

const LoadingState = () => {
  return (
    <div className="flex h-[20rem] w-[35rem] flex-col items-center justify-center rounded-3xl bg-[#15202b] p-10 text-white">
      <div className="mb-6 text-xl font-semibold">Minting in progress...</div>
      <GridLoader color={'#fff'} loading={true} css={cssOverride} size={30} />
    </div>
  )
}

export default LoadingState
