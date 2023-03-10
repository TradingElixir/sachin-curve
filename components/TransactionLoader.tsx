import { css } from '@emotion/react'
import MoonLoader from 'react-spinners/MoonLoader'

const styles = {
  wrapper: `text-white h-96 w-72 flex flex-col justify-center items-center`,
  title: `font-semibold text-xl mb-12`,
}

const cssOverride = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`

type MoonLoaderProps = {
  color: string,
  loading: boolean,
  css: any,
  size: number
};

const TransactionLoader = () => {
  const moonLoaderProps: MoonLoaderProps = {
    color: '#fff',
    loading: true,
    css: cssOverride,
    size: 50
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>wait...</div>
      <MoonLoader {...moonLoaderProps} size={moonLoaderProps.size} />
    </div>
  )
}

export default TransactionLoader;
